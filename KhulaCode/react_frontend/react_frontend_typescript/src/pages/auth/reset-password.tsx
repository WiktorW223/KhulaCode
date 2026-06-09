import { useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'

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
        console.log({userId, token})
        if(!userId||!token)
        {
          return <p>Invalid reset link</p>
        }
    
        const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setMessage("")
    
        
    
        
        try{
        setLoading(true)
            const res = await fetch("http://127.0.0.1:8000/KhulaCode/reset-password/",
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
            navigate("/home-7")
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
                  {message&&<p>{message}</p>}
                  <form onSubmit={handleSubmit}>
                  <label htmlFor='password'>Please enter new password: </label>
                  <input onChange = {(e)=>setNewPassword(e.target.value)}  id = "password" type="password" name ="password"/>
                  <button type='submit'>{loading?"Processing...":"Submit"}</button>
                  </form>
                  {errors&& <p style={{color:"red"}}>{errors}</p>}
                  
                  
        </div>

    </>)}