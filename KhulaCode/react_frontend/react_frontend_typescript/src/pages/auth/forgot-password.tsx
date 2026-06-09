import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    
    

    const [username,setUsername]=useState("")
    const [msg, setMsg]=useState("")
    const [loading,setLoading] = useState(false)
    // const [temp, setTemp] = useState(String||null)

    const handleSubmit = async(e:React.FormEvent)=>
    {
        try{
        e.preventDefault()
        setMsg("")
        setLoading(true)
            const res = await fetch("http://127.0.0.1:8000/KhulaCode/forgot-password/",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username})
            }
        )
        const  data = await res.json()
        if(!res.ok)
        {
            setMsg(data.detail||"Something went wrong")
        }
        else{
            setMsg(data.detail)
            console.log(data.url)
        }

    }
    catch{
        setMsg("Network error please try again")
        return
    }
    finally{
        setLoading(false)
    }
}



    
    
    return (
      <>
          
  
          <section className="pt-4">
                  <div className="container">
                      <div className="row gx-xl-5">
                          
                          <div className="col-lg-9 col-md-12 col-sm-12">
                              
                              
                              <div className="row">
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                          <div className="head-title"><h4 className="mb-2 mb-sm-0">Forgot Password</h4></div>
                      
                                      </div>
                                  </div>
                <div className="form-group mb-4">
                  <form onSubmit={handleSubmit}>
                  <label htmlFor='username'>Please enter your username to reset password: </label>
                  <input onChange = {(e)=>setUsername(e.target.value)}  id = "username" type="text" name ="username"/>
                  <button type='submit'>{loading?"Creating reset link...":"Submit"}</button>
                  </form>
                  <Link to="/register?tab=signin">Return to Login Page</Link>
                  {msg&& <p>{msg}</p>}
                  {/* {temp&&<Link to={temp}>link to reset</Link>} */}
                  
                  
                  </div>
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                      
                    
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
  
      </>
    )
  }
  
