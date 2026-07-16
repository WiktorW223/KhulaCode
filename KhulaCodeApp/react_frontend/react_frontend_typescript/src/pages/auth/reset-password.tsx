import { useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000/KhulaCode/"

export default function ResetPassword(){


const navigate = useNavigate()
const [newPassword,setNewPassword] = useState("")
    const [errors,setErrors] = useState("")
    const [message, setMessage] = useState("")
    const [loading,setLoading] = useState(false)

    
    const {userId,token}= useParams<{
          userId:string,
          token:string 
        }>();

        if(!userId||!token)
        {
          return <p>Invalid reset link</p>
        }
    
        const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setMessage("")
    
        
    
        
        try{
        setLoading(true)
            const res = await fetch(`${API_BASE_URL}reset-password/`,
          {

            method:"POST",
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({new_password:newPassword,user_id:userId,token})
          }
        )
        const data = await res.json()
        if(!res.ok)
        {
            setErrors(data.detail)
        }
        else{
            setMessage(data.detail)
            console.log("success")
            navigate("/register?tab=signin")
        }
        
        
      }
        catch(error)
        {
          setErrors("network error please try again")
          return
        }
        finally
        {
            setLoading(false)
        }
      }
    return(
        <>
        <div className="form-group mb-4">
                  
                  <form onSubmit={handleSubmit}>
                  <label htmlFor='password'>Please enter new password: </label>
                  <input onChange = {(e)=>setNewPassword(e.target.value)}  id = "password" type="password" name ="password"/>
                  <button type='submit'>{loading?"Processing...":"Submit"}</button>
                  </form>
                  {message&&<p>{message}</p>}
                  {errors&& <p style={{color:"red"}}>{errors}</p>}
                  
                  
        </div>

    </>)}