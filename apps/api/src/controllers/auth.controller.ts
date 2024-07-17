import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import { genSalt, hash, compare } from "bcrypt"
import validator from 'validator';

const prisma = new PrismaClient()
export class AuthController {

    async getUsers(req: Request, res: Response) {
        
        try {
            
          const users = await prisma.user.findMany();
          return res.status(200).send({
            message: "success",
            data: users
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
        
        const { name, email, password, referredBy, role } = req.body;
        const birthdate = new Date(req.body.birthdate).toISOString();

        if (!name && !email && !password && !role) {
          return res.status(400).send({
            message: "Name, Email, Password and Role is required"
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

        //check referralCode Exist

        let referralCodeExist = true;
        let referralCode = '';

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

        let referrerId = 0;

        if (referredBy) {
          const referrer = await prisma.user.findFirst({
            where: {
              referralCode: referredBy
            },
            select: {
              id: true
            }
          })

          if (referrer) {
            referrerId = referrer.id
          }
        }

        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            birthdate: birthdate,
            referralCode: referralCode,
            referredBy: referrerId,
            role
          }
        })

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

}

// export class SampleController {
//   async getSampleData(req: Request, res: Response) {
//     const sampleData = await prisma.sample.findMany();

//     return res.status(200).send(sampleData);
//   }

//   async getSampleDataById(req: Request, res: Response) {
//     const { id } = req.params;

//     const sample = await prisma.sample.findUnique({
//       where: { id: Number(id) },
//     });

//     if (!sample) {
//       return res.send(404);
//     }

//     return res.status(200).send(sample);
//   }

//   async createSampleData(req: Request, res: Response) {
//     const { name, code } = req.body;

//     const newSampleData = await prisma.sample.create({
//       data: { name, code },
//     });

//     return res.status(201).send(newSampleData);
//   }
// }
