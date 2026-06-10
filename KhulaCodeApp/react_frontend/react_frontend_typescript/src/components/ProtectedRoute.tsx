import type { ReactNode } from "react"
import {Navigate} from "react-router-dom"

type Props = {
    children:ReactNode
}

function ProtectedRoute({children}:Props)
{
    const token = localStorage.getItem("access")||sessionStorage.getItem("access")
    if(!token)
    {
        return <Navigate to="/register?tab=signin" replace/>
    }
    return children
}
export default ProtectedRoute