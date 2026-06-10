import { Link, useNavigate } from 'react-router-dom'
import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import user from '../../../assets/img/avatar-1.jpg'
import FooterDark from '../../../components/footer/footer-dark'
import { useEffect, useState, type EventHandler } from 'react'

export default function ProfileEdit() {
    
    // const handleSubmit = async (e:React.FormEvent)=>{
    // const [displayName,updateDisplayName]=useState("")
    // const [dob,updatedob]=useState("")
    // const [img,updateImg]=useState("")
    
    // e.preventDefault()

    // try
    // const res = await fetch()
        
    
    // }
    
    // useEffect(()=>
    // {
    //     const loadPfp 
    // },[])
    const handleClick = async ()=>
    {
        fetch("")

    }
    
    return (
    <>
        <InstructorNavbar/>   

        <section className="bg-gredient p-0">
            <div className="container-fluid px-0">
                <div className="ht-200"></div>
            </div>
        </section>

        <section className="pt-4">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-3">
                        <StudentAdminSidebar/>						
                    </div>	
                    
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile Edit</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card border">
                                    <div className="card-header">
                                        <h4 className="mb-0">Profile Details</h4>
                                    </div>
                                    
                                    <div className="card-body">
                                        <div className="d-lg-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center mb-4 mb-lg-0">
                                                <img src={user} id="image-uploaded" className="img-fluid circle w-20" alt="avatar Image"/>
                                                <div className="ms-3">
                                                    <h4 className="mb-0">Your avatar</h4>
                                                    <p className="ext-mid text-muted mb-0">PNG or JPG no bigger than 500px wide and tall.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <button onClick={handleClick}  className="btn btn-light-green btn-sm">Update</button>
                                                <Link to="#" className="btn btn-light-red btn-sm">Delete</Link>
                                            </div>
                                        </div>
                                        
                                        <hr className="my-4"/>
                                        
                                        <div className="form-section">
                                        
                                            <h4 className="mb-0">Personal Details</h4>
                                            <p className="text-muted mb-4">Edit your personal information and address.</p>
                                            
                                            <form className="row g-3">
                                            
                                                <div className="col-12 col-md-6">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" placeholder="First Name"/>
                                                </div>
                                                
                                                <div className="col-12 col-md-6">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" placeholder="Last Name" />

                                                </div>
                                                
                                                {/* <div className="col-12 col-md-6">
                                                    <label className="form-label">Phone</label>
                                                    <input type="text" className="form-control" placeholder="Phone" />
                                                </div> */}
                                                
                                                {/* <div className="col-12 col-md-6">
                                                    <label className="form-label">Email</label>
                                                    <input className="form-control" type="email" placeholder="Your eMail"/>
                                                </div> */}
                                                
                                                {/* <div className="col-12 col-md-6">
                                                    <label className="form-label">Address Line 1</label>
                                                    <input type="text" className="form-control" placeholder="Address"/>
                                                </div>
                                                
                                                <div className="col-12 col-md-6">
                                                    <label className="form-label">Address Line 2</label>
                                                    <input type="text" className="form-control" placeholder="Address"/>
                                                </div> */}
                                                
                                                {/* <div className="col-12 col-md-6">
                                                    <label className="form-label">State</label>
                                                    <select className="form-control form-select" id="state">
                                                        <option value="one">San Diego</option>
                                                        <option value="two">San Jose</option>
                                                        <option value="three">San Francisco</option>
                                                        <option value="four">San Antonio</option>
                                                        <option value="five">Las Vegas</option>
                                                        <option value="six">Los Angeles</option>
                                                    </select>
                                                </div>
                                                
                                                <div className="col-12 col-md-6">
                                                    <label className="form-label">Country</label>
                                                    <select className="form-control form-select" id="country">
                                                        <option value="india">India</option>
                                                        <option value="usa">United State</option>
                                                        <option value="uk">United Kingdom</option>
                                                        <option value="australia">Australia</option>
                                                        <option value="brazil">Brazil</option>
                                                        <option value="shrilanka">Shrilanka</option>
                                                    </select>
                                                </div> */}
                                            
                                                <div className="col-12">
                                                    <button className="btn btn-main px-5" type="button">Update Profile</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterDark/>
    </>
  )
}
