export const getAccessToken=() =>{
    return localStorage.getItem("access")||sessionStorage.getItem("access")
}

export const getRefreshToken=()=>{
    return localStorage.getItem("refresh")||sessionStorage.getItem("refresh")
}

export const clearTokens=()=>{
    sessionStorage.removeItem("access")
    sessionStorage.removeItem("refresh")
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
}


export const getTokenStorage = () => {
    if (localStorage.getItem("refresh")) {
        return localStorage
    }
    if (sessionStorage.getItem("refresh")) {
        return sessionStorage
    }
    return null
}

