import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { logErrorHandler } from "../helpers/errorLogger";
import { JWT_SECRET_KEY } from '@/config';
import validator from 'validator';

const prisma = new PrismaClient()
export class AuthController {

    async getUsers(req: Request, res: Response) {
        
        try {
            
          const users = await prisma.user.findMany();
          return res.status(200).send({
            message: "success, you are connected to database"
          })

        } catch (error) {
            return res.status(500).send({
                error: JSON.stringify(error)
            });
        }

    }

    async getUsersById(req: Request, res: Response) {
        const { id } = req.body;
        const user = await prisma.user.findUnique({
          where: { id: Number(id) },
        });
        if (!user) {
          return res.send(404);
        }
        return res.status(200).send(user);
    }

    async registerUser(req: Request, res: Response) {
      try {
        const { name, email, password, birthdate, referredBy, role } = req.body;
        
        if (validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(password) || validator.isEmpty(role) || validator.isEmpty(birthdate)) {
          return res.status(400).send({
            message: "Name, Email, Password, Birthdate and Role is required"
          })
        }
        const validbirthdate = new Date(birthdate).toISOString();

              if (!validator.isEmail(email)) {
          return res.status(400).send({
            message: "Wrong Email format"
          })
        }

        //check email exist
        const emailExist = await prisma.user.findUnique({
          where: {
            email: email
          }
        })

        if (emailExist) {
          return res.status(400).send({
            message: "Email already exist"
          })
        }

        let referrerId = 0;
        let hasDiscount = 0;
        let referralCode = '';

        if (role.toLowerCase() === 'customer') {

          //check referralCode Exist 
          let referralCodeExist = true;

          while (referralCodeExist) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < 8; i++) {
              referralCode += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            const checkReferralCode = await prisma.user.findFirst({
              where: {
                referralCode: referralCode
              }
            })

            if (!checkReferralCode) {
              referralCodeExist = false;
            }
          }

          if (referredBy) {
            const referrer = await prisma.user.findFirst({
              where: {
                referralCode: referredBy
              },
              select: {
                id: true,
              }
            })
  
            if (referrer) {
              referrerId = referrer.id
              hasDiscount = 1
            }
          }
        
        }

        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            birthdate: validbirthdate,
            referralCode: referralCode,
            referredBy: referrerId,
            role
          }
        })

        //jika user baru dan mendaftar sebagai customer, referal dapat 10000
        if (newUser && referrerId) {
          const addReferralBalance = await prisma.logUserPoint.create({
            data: {
              userId: referrerId,
              points: 10000,
            }
          })

          const addDiscount = await prisma.logUserPoint.create({
            data: {
              userId: newUser.id,
              discount: 10
            }
          })
        }

        return res.status(201).send({
          message: "success",
          data: newUser
        })

      } catch (error: any) {
        // if (error instanceof Prisma.PrismaClientKnownRequestError) {
        //   console.log(error.code)
        // }
        // throw error
        return res.status(500).send({
          error: JSON.stringify(error)
        });
      }
    
    }

    async loginUser(req: Request, res: Response) {
      
      try {

        const { email, password } = req.body;

        if (!email && !password) {
          return res.status(400).send({
            message: "Email and Password is required"
          })
        }

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })

        if (!user) {
          return res.status(401).send({
            message: "Invalid Email or Password, please try again"
          })
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
          return res.status(401).send({
            message: "Invalid Email or Password, please try again"
          })
        }

        const jwtPayload = { id: user.id, name: user.name, email: email, role: user?.role }
        const token = await sign(jwtPayload, JWT_SECRET_KEY, { expiresIn: '1h' })

        const addToken = await prisma.logUserlogin.create({
          data: {
            userId: user.id,
            token: token
          }
        })

        return res.status(200).send({
            message: "success",
            data: user,
            token: token
        })

      } catch (error) {
        logErrorHandler(JSON.stringify(error))
        res.status(500).send({
          data: JSON.stringify(error)
        })
      }
    
    }

    async myProfile(req: Request, res: Response) {
      try {

        const myid = req.user?.id

        const user = await prisma.user.findUnique({
          where: {
            id: myid
          },
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        })

        let profile = {
          id: user?.id,
          name: user?.name,
          email: user?.email,
          role: user?.role,
          balance: 0,
          discount: 0
        }        

        if (user?.role == 'customer') {
          const balance = await prisma.logUserPoint.aggregate({
            _sum: {
              points: true,
              discount: true
            },
            where: {
              userId: myid
            }
          })

          if (balance._sum.points) {
            profile.balance = balance._sum.points
          }

          if (balance._sum.discount) {
            profile.discount = balance._sum.discount
          }
        }

        return res.status(200).json({
          profile
        })
        
      } catch (error) {
        logErrorHandler(JSON.stringify(error))
        res.status(500).send({
          data: JSON.stringify(error)
        })
      }

    }

}