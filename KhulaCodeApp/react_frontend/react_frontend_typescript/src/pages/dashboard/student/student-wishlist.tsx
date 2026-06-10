import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import bg from '../../../assets/img/student-bg.jpg'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { coursesData } from '../../../data/data'
import { Link, useParams } from 'react-router-dom'
import FooterDark from '../../../components/footer/footer-dark'
import type { ReactEventHandler } from 'react'
import { useState } from 'react'

interface CoursesData{
    id: number;
    image: string;
    title: string;
    lectures: number;
    level: string;
    price: number;
    rating: number;
    review: string;
    autherImg: string;
    autherName: string;
    time: string;
}

export default function StudentWishlist() {
  const [newPassword,setNewPassword] = useState("")
  const [errors,setErrors] = useState<Record<string,string[]>>({})
  const [message, setMessage] = useState("")
  const {userId,token}= useParams<{
    userId:string,
    token:string 
  }>();
  if(!userId||!token)
  {
    return <p>Invalid reset link</p>
  }
  
  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    setErrors({})
    setMessage("")

    

    
    try{
    const res = await fetch("http://127.0.0.1:8000/KhulaCode/reset-password/",
      {
        method:"POST",
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({new_password:newPassword,user_id:userId,token})
      }
    )
  
  
  }
    catch(error)
    {
      setErrors({"non_field_errors":["network error please try again"]})
      return
    }


    
  }
  return (
    <>
        /* <StudentNavbar/> */

        {/* <section className="bg-cover p-0" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}} data-overlay="4">
          <div className="container-fluid px-0">
            <div className="ht-250"></div>
          </div>
        </section> */}

        <section className="pt-4">
				<div className="container">
					<div className="row gx-xl-5">
						{/* <div className="col-lg-3">
							<StudentAdminSidebar/>					
						</div>	 */}
						
						<div className="col-lg-9 col-md-12 col-sm-12">
							{/* <div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 pb-4">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item"><Link to="#">Home</Link></li>
											<li className="breadcrumb-item"><Link to="#">Student Dashboard</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Wishlist</li>
										</ol>
									</nav>
								</div>
							</div> */}
							
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="d-flex align-items-center justify-content-between gap-2 mb-3">
										<div className="head-title"><h4 className="mb-2 mb-sm-0">Forgot Password</h4></div>
                    
									</div>
								</div>
								<div className="form-group mb-4">
                {message&&<p>{message}</p>}
                <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Please enter email to reset password: </label>
                <input onChange = {(e)=>setNewPassword(e.target.value)}  id = "email" type="email" name ="email"/>
                <button type='submit'>Submit</button>
                </form>
                {errors.new_password&& <p style={{color:"red"}}>{errors.new_password[0]}</p>}
                {errors.non_field_errors&& <p style={{color:"red"}}>{errors.non_field_errors[0]}</p>}
                
                </div>
								<div className="col-lg-12 col-md-12 col-sm-12">
									
                  {/* <div className="row g-3">
                    {coursesData.slice(0,6).map((item:CoursesData,index:number)=>( 
                      <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                        <div className="education_block_grid border">
                          <div className="education-thumb position-relative">
                            <Link to={`/course-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
                            <div className="course-hours position-absolute top-0 start-0 ms-2 mt-2">
                              <span className="badge bg-dark rounded-pill"><i className="bi bi-clock-history me-1"></i>{item.time}</span>
                            </div>
                          </div>
                          
                          <div className="education-body p-3">
                            <div className="education-title">
                              <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-light-green text-green rounded-pill">Beginner</span>
                                <span className="badge bg-light-red text-red rounded-pill">Pro</span>
                              </div>
                              <h4 className="fs-6 fw-medium"><Link to={`/course-detail/${item.id}`} className="text-dark">{item.title}</Link></h4>
                            </div>
                            
                            <div className="courses-ratings mb-4">
                              <div className="d-flex align-items-center gap-1">
                                <div className="stars d-flex align-items-center gap-1">
                                  <i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i>
                                </div>
                                <span className="overall-rates text-dark fw-medium ms-1">{item.rating}</span><span className="total-reviews">({item.review})</span>
                              </div>
                            </div>
                            
                            <div className="education_block_author">
                              <Link to="#" className="d-flex align-items-center justify-content-start gap-2">
                                <span className="square--40"><img src={item.autherImg} className="img-fluid circle" alt="Author"/></span>
                                <div className="d-flex align-items-start flex-column">
                                  <span className="text-dark fw-light opacity-75">Lectures By:</span><span className="text-dark fw-semibold">{item.autherName}</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                          
                          <div className="education-footer p-3">
                            <div className="corses-price">
                              <h5 className="m-0 fw-semibold text-red"><span className="text-dark">$</span>{item.price}</h5>
                            </div>
                            <div className="enrolled-link"><Link to="#" className="main-link fw-medium">Enrolled Now<i className="bi bi-arrow-right ms-2"></i></Link></div>
                          </div>
                        </div>	
                      </div>
                    ))}
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

      {/* <FooterDark/> */}
    </>
  )
}
