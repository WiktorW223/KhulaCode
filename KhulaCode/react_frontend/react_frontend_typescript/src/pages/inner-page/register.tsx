import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { getAccessToken,getRefreshToken,getTokenStorage } from '../../lib/tokenService'
import logo from '../../assets/img/log.png'
import logoIcon from '../../assets/img/logo-icon.png'

import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'
import type React from 'react'
import { Timer } from 'lucide-react'

export default function Register() {

useEffect(()=>{
const token = getAccessToken()
if(token)
{
    navigate("/student-dashboard")
}
},[])
    

    
const navigate = useNavigate()
const [searchParams] = useSearchParams()
const initialTab = searchParams.get("tab") === "signin" ? "signin" : "register"

const [rememberMe,setRememberMe] = useState(false)

const [loginFormData, setLoginFormData] = useState(
    {
        username:"",
        password:""
    }
)
const [formData, setFormData] =useState({
    firstName:"",
    lastName: "",
    username: "",
    password: "",

})
const [seePass,setSeePass] = useState(false)
const[errors,setErrors] = useState<Record<string, string[]>>({})
const[loginErrors,setLoginErrors] = useState<Record<string, string[]>>({})
const[loading,setLoading]= useState(false)
const [activeTab, setActiveTab] = useState<"signin" | "register">(initialTab)
const[showSuccess,setShowSuccess] = useState(false)



const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) =>{
    const { name, value } = e.target
    setFormData({
        ...formData,
        [name]:value
    });
    const newErrors = {...errors}
    delete newErrors[name]
    setErrors(newErrors)
}

const handleLoginChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = e.target
    setLoginFormData({
        ...loginFormData,
        [name]:value,
    })
    const newErrors = {...loginErrors}
    delete newErrors[name]
    setLoginErrors(newErrors)
}


const handleLogin = async (e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    setErrors({})
    try{
        const res = await fetch("http://127.0.0.1:8000/KhulaCode/login/",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:"include",
            body: JSON.stringify({username:loginFormData.username,password:loginFormData.password}),
        })
        const data = await res.json()

        if(!res.ok)
        {
            if(data.detail)
            {
                setLoginErrors({"non_field_errors":[data.detail]})
            }
            else{
                setLoginErrors(data)
            }
            
            return
        }
        if(rememberMe){
        localStorage.setItem("access" ,data.access)
        localStorage.setItem("refresh", data.refresh)
        }
        else{
            sessionStorage.setItem("access",data.access)
            sessionStorage.setItem("refresh",data.refresh)
        }
        console.log("signed in")
        
        navigate("/student-dashboard")
        window.location.href="/"
        
    }

        catch(error)
    {
        setErrors({non_field_errors:["network error"]})
        console.log("network error")
    }
    finally{
        setLoading(false)
    }   

}

const sleep=(ms:number):Promise<void>=>
{
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

const handleRegister = async (e:React.FormEvent)=>{
e.preventDefault()
setLoading(true)
setErrors({})
try{
const res = await fetch("http://127.0.0.1:8000/KhulaCode/register/",{
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({username:formData.username,password:formData.password,first_name:formData.firstName,last_name:formData.lastName}),
})
const data = await res.json()

if (!res.ok){
    console.log(data)
    if(typeof data==="object")
    {
        setErrors(data)
        
    }
    else
    {
        setErrors({non_field_errors:["Something went wrong"]})
    }
    return
}
setFormData({firstName:"",lastName:"",username:"",password:""})
console.log(data.message)
navigate("/register?tab=signin")

setShowSuccess(true)




}
catch(error){
    console.error("network error")
    setErrors({non_field_errors:["Network error. Please try again."]})
    
}
finally{
    setLoading(false)
    await sleep(2500)
    setShowSuccess(false)
    window.location.reload()

}  
}




return (
    <>
        <NavDark/>

        <div className="bg-main position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9 col-md-12">
                        <div className="ht-300"></div>
                    </div>
                </div>
            </div>
            <div className="position-absolute end-0 top-0"><img src={logo} className="img-fluid" width="200" alt="Log Screen"/></div>
            <div className="position-absolute start-0 bottom-0"><img src={logo} className="img-fluid" width="150" alt="Log Screen"/></div>
        </div>  

        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-12">
                        <div className="card border py-xl-5 p-4 login-card overlio overlios">
                            <div className="web-logo d-flex align-items-center justify-content-center mb-3">
                                <div className="logo"><img src={logoIcon} className="img-fluid" width="60" alt="Logo"/></div>
                            </div>
                            
                            <div className="login-caps mb-4">
                                <div className="text-center">
                                    <h2 className="fw-semibold m-0">Welcome To</h2>
                                    <h3 className="fw-semibold m-0">KhulaCode</h3>
                                </div>
                            </div>
                            
                            <div className="d-block mb-4">
                                <ul className="nav nav-tabs simple d-flex align-items-center justify-content-center border-0" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link px-md-5 ${activeTab === "signin" ? "active" : ""}`} id="signin-tab" type="button" role="tab" aria-controls="signin-tab-pane" aria-selected={activeTab === "signin"} onClick={() => setActiveTab("signin")}>Sign In</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link px-md-5 ${activeTab === "register" ? "active" : ""}`} id="register-tab" type="button" role="tab" aria-controls="register-tab-pane" aria-selected={activeTab === "register"} onClick={() => setActiveTab("register")}>Register</button>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="tab-content" id="myTabContent">
                                <div className={`tab-pane fade p-0 ${activeTab === "signin" ? "show active" : ""}`} id="signin-tab-pane" role="tabpanel" aria-labelledby="signin-tab" tabIndex={0}>
                                    <div className="login-form">
                                        <form onSubmit={handleLogin}>
                                            <div className="form-group mb-4">
                                                
                                                <input type="text" name = "username" value = {loginFormData.username} onChange={handleLoginChange} className="form-control" placeholder="Enter your username"/>
                                            </div>
                                            
                                            <div className="form-group mb-4">
                                                <div className="position-relative">
                                                    <input type={seePass?"text":"password"} name = "password" value={loginFormData.password} onChange={handleLoginChange} className="form-control" placeholder="********"/>
                                                    <span className="position-absolute top-50 end-0 translate-middle-y me-3" style={{cursor:"pointer"}} onClick={()=>setSeePass(!seePass)}><i className={seePass?"bi bi-eye-slash text-mutede":"bi bi-eye text-muted"}></i></span>
                                                    {loginErrors.non_field_errors&&<p style={{color:"red"}}>{loginErrors.non_field_errors}</p>}
                                                </div>
                                            </div>
                                            
                                            <div className="form-group mb-4">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="form-check">
                                                        <input id="saveinfo" checked = {rememberMe} onChange ={(e)=> setRememberMe(e.target.checked)} className="form-check-input" name="saveinfo" type="checkbox"/>
                                                        <label htmlFor="saveinfo" className="form-check-label">Remember me</label>
                                                    </div>
                                                    <div className="forget-password"><Link to="/forgot-password" className="text-decoration-underline">Forgot Password?</Link> </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group mb-3">
                                                <button type="submit"  className="btn btn-main w-100">{loading?"Signing In...":"Sign In"}</button>
                                                {/*sign in button*/}
                                            </div>
                                            
                                        </form>
                                    </div>	
                                </div>
                                
                                <div className={`tab-pane fade p-0 ${activeTab === "register" ? "show active" : ""}`} id="register-tab-pane" role="tabpanel" aria-labelledby="register-tab" tabIndex={0}>
                                    <div className="login-form">
                                        <form onSubmit={handleRegister}>
                                            <div className="form-group mb-3">
                                                <div className="row g-3">
                                                    <div style={{ position: "relative", marginBottom: "1.5rem" }} className="form-group col-6"><input type="text" name = "firstName" value = {formData.firstName} onChange = {handleChange} className="form-control" placeholder="First Name"/>
                                                    {errors.first_name&&<p style ={{ position: "absolute", top: "100%", margin: 0, fontSize: "0.75rem", color: "red" }}>{errors.first_name[0]}</p>}
                                                    </div>
                                                    
                                                    
                                                    <div style = {{ position: "relative", marginBottom: "1.5rem" }} className="form-group col-6"><input type="text" name = "lastName" value = {formData.lastName} onChange = {handleChange} className="form-control" placeholder="Last Name"/>
                                                    {errors.last_name &&<p style={{ position: "absolute", top: "100%", margin: 0, fontSize: "0.75rem", color: "red" }}>{errors.last_name[0]}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group mb-3" style = {{position:"relative"}}>
                                                <input type="text" name = "username" value = {formData.username} onChange = {handleChange} className="form-control" placeholder="Choose a username"/>
            
                                                    {errors.username && (<p style={{ position: "absolute", top: "100%", margin: 0, fontSize: "0.75rem", color: "red" }}>{errors.username[0]}</p>)}
                                            </div>
                                            
                                            <div className="form-group mb-3" style = {{position:"relative"}}>
                                                <div className="position-relative">
                                                    <input type="password" name = "password" value = {formData.password} onChange =  {handleChange} className="form-control" placeholder="********"/>
                                                    
                                                    {errors.password && (<p style={{ position: "absolute", top: "100%", margin: 0, fontSize: "0.75rem", color: "red" }}>{errors.password[0]}</p>)}
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                {errors.non_field_errors&&<p style={{color:"red"}}>{errors.non_field_errors[0]}</p>}
                                                <p></p>
                                                <button type="submit" disabled = {loading} className="btn btn-main w-100">{loading ? "Signing Up...":"Sign Up"}</button>
                                                {/*sign up button*/}
                                            </div>
                                            {showSuccess&&<p>Registration Successful! Please Sign In.</p>}
                                            
                                            <div className="deider-wrap w-100 mt-4 mb-4">
                                                <div className="d-block border-top position-relative">
                                                    {/*<span className="position-absolute top-50 start-50 translate-middle square--40 circle bg-white text-muted z-1">OR</span>*/}
                                                </div>
                                            </div>
                                            
                                            <div className="social-login-wrap">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                                                    {/*<Link to="#" className="btn btn-md btn-gray rounded-3 border-2 flex-fill">SignUp with<i className="bi bi-apple ms-2"></i></Link>
                                                    <Link to="#" className="btn btn-md btn-gray rounded-3 border-2 flex-fill">SignUp with<i className="bi bi-google text-red ms-2"></i></Link>*/}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <FooterTop/> */}
        <Footer/> 
    </>
  )
}
