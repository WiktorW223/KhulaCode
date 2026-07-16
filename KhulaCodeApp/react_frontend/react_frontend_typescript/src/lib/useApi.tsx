import { useNavigate } from "react-router-dom";
import {clearTokens,getAccessToken,getRefreshToken,getTokenStorage} from "./tokenService"

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000/KhulaCode/"

export function getBackendUrl(){
    return API_BASE_URL
}

export function getFrontendUrl(){
    return import.meta.env.DEV ? "http://localhost:5173/" : "/"
}

export type makeRequest=
(
    url:string,
    options?:RequestInit
)=>Promise<Response>




export function useApi(){
    const navigate = useNavigate()
    const makeRequest:makeRequest = async(url:string, options: any={}) =>{
        let access = getAccessToken()
        let res = await fetch(`${API_BASE_URL}${url}`,{
            ...options,
            headers:{
                ...(options.headers || {}),
                Authorization: `Bearer ${access}`,
            },
        })
        
        if(res.status===401)
        {
            await refreshToken()
            access = getAccessToken()
            res = await fetch(`${API_BASE_URL}${url}`,{
                ...options,
                headers:{
                    ...(options.headers || {}),
                    Authorization: `Bearer ${access}`,
                },
            })
        }
        if(res.status===401)
        {
            clearTokens()
            navigate("/register?tab=signin")
            throw new Error("AUTH_EXPIRED")
        }
        return res
    }
return {makeRequest}    
}



export const refreshToken = async() =>{
    const refresh = getRefreshToken()
    const tokenStorage = getTokenStorage()

    if (!refresh || !tokenStorage) {
        return false
    }

    const res = await fetch(`${API_BASE_URL}token/refresh/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({refresh}),
    })
    const data = await res.json()

    if(res.ok)
    {
        tokenStorage.setItem("access",data.access)
        return true

        
    }
    else{
        console.log("Refresh failed, log out user.")
        clearTokens()
        return false
    }
}
