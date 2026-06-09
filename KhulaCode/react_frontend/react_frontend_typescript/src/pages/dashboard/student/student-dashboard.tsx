import {}  from 'react-router-dom'
import { useState } from 'react'

import bg from '../../../assets/img/black.png'

import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { coursesData } from '../../../data/student'
import FooterDark from '../../../components/footer/footer-dark'
import img from "../../../assets/img/decision.png"
import { useEffect } from 'react'
import { useApi } from '../../../lib/useApi'
import { getAccessToken } from '../../../lib/tokenService'



type profile=
{
    percentage:number,
    area:string,
    lessons_completed:number,
    last_unit:number|string



}

interface AboutData{
     icon: string;
    value: string;
    title: string;
    theme: string;
}

interface CoursesData{
    image: string;
    time: string;
    name: string;
    lesson: string;
    progress: string;
}




export default function StudentDashboard() {
    const {makeRequest} = useApi()
    const access = getAccessToken()
    const [profileInfo,setProfileInfo] = useState<profile|null>(null)
    useEffect(()=>{
        if(access)
        {
            makeRequest("get-info/")
            .then(res=>res.json())
            .then(data=>{setProfileInfo(data.profile_data)
            console.log(data.profile_data)
            })
            
        }
    },[])
    const unlocked = profileInfo?.last_unit==="completed"?6:profileInfo?.last_unit
const aboutData = [
    {
        icon:'bi bi-laptop text-green',
        value:`${profileInfo?.lessons_completed}`,
        title:'Total Lessons Completed (in order)',
        theme:'green'
    },
    {
        icon:'fas fa-user-graduate text-red',
        value:`${profileInfo?.percentage}%`,
        title:'Percentage Completed',
        theme:'red'
    },
    {
        icon:'bi bi-shield-lock text-main',
        value:`${unlocked}/6`,
        title:'Lwazi Upgrades Unlocked',
        theme:'main'
    },
]

  return (

    <>
        <StudentNavbar/>

        <section className="bg-cover p-0" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}} data-overlay="4">
            <div className="container-fluid px-0">
                <div className="ht-250"></div>
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
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Student Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                        
                        <div className="row gy-3 mb-4">
                            {aboutData.map((item:AboutData,index:number)=>( 
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="card rounded-3 border px-3 py-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className={`square--60 circle bg-light-${item.theme} fs-3`}><i className={item.icon}></i></div>
                                            <div className="d-flex flex-column gap-1">
                                                <h2 className="fw-semibold m-0">{item.value}</h2><span className="text-muted">{item.title}</span>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                            ))}
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <div className="head-title"><h4 className="mb-2 mb-sm-0">Current Area of Cyber Jungle:</h4></div>
                                    {/* <div className="view-all"><Link to="#" className="btns text-muted mb-0">View All</Link></div> */}
                                </div>
                            </div>
                            <img src={profileInfo?.area} alt=""/>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                {/* <div className="row g-3">
                                    {coursesData.map((item:CoursesData,index:number)=>( 
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                                            <div className="education_block_grid border">
                                            
                                                <div className="education-thumb position-relative">
                                                    <Link to="/course-detail"><img src={item.image} className="img-fluid" alt=""/></Link>
                                                    <div className="course-hours position-absolute top-0 start-0 ms-3 mt-3">
                                                        <span className="badge bg-dark rounded-pill"><i className="bi bi-clock-history me-1"></i>{item.time}</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="education-body p-3">
                                                    <div className="education-title">
                                                        <h4 className="fs-6 fw-medium"><Link to="/course-detail">{item.name}</Link></h4>
                                                    </div>
                                                    
                                                    <div className="progress-info mt-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h6 className="text-mid fw-normal">{item.lesson}</h6>
                                                            <h6 className="fw-semibold">{item.progress}</h6>
                                                        </div>
                                                        {item.progress === '100%' ? 
                                                            <div className="d-flex">
                                                                <div className="progress w-100" role="progressbar" aria-label="Success striped example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{height:'8px'}}>
                                                                    <div className="progress-bar progress-bar-striped bg-success" style={{width: "100%"}}></div>
                                                                </div>
                                                            </div> : 

                                                            <div className="d-flex">
                                                                <div className="progress w-100" role="progressbar" aria-label="warning striped example" aria-valuenow={40} aria-valuemin={0} aria-valuemax={40} style={{height:'8px'}}>
                                                                    <div className="progress-bar progress-bar-striped bg-warning" style={{width: item.progress}}></div>
                                                                </div>
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                                
                                                <div className="education-footer border-0 p-3 pt-2">
                                                    <Link to="/student-course-resume" className="btn btn-md btn-outline-gray border-2 rounded-pill w-100">Course Resume<i className="bi bi-arrow-right ms-2"></i></Link>
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

        <FooterDark/>
    </>
  )
}
