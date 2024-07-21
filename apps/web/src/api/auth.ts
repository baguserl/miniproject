"use client"
import axios from "axios"
import { getCookie } from "../actions/cookies"
const base_url_api = "http://localhost:5670/api"

interface IRegisterRequest {
    name: string,
    email: string,
    password: string,
    birthdate: string,
    referralCode?: string,
    role: string
}

export async function loginProcess(email: string, password: string) {

    const res = await axios.post(base_url_api + "/auth/login", {
        email: email,
        password: password
    })

    return res
}

export async function registerProcess(data: IRegisterRequest) {

    const res = await axios.post(base_url_api + "/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        birthdate: data.birthdate,
        referredBy: data.referralCode,
        role: data.role
    }).catch((err) => {
        return err
    })
    
    return res
}

export async function test() {
    const res = await axios.get(base_url_api + "/auth")
    return res

}

export async function myProfile() {
    const authToken = await getCookie("authToken")
    // console.log(authToken)
    if (authToken) {
        const res = await axios.get(base_url_api + "/auth/me", {
            headers: {
                Authorization: "Bearer " + authToken
            }
        })

        return res
    }
    return {data: {} as any}

}