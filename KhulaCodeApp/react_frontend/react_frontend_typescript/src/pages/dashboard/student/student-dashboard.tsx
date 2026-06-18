import { Link }  from 'react-router-dom'
import { useState } from 'react'


import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { coursesData } from '../../../data/student'
import FooterDark from '../../../components/footer/footer-dark'
import img from "../../../assets/img/decision.png"
import { useEffect } from 'react'
import { useApi } from '../../../lib/useApi'
import { getAccessToken } from '../../../lib/tokenService'
import type { RecentLesson } from '../../../lib/recentApi'



type profile=
{
    first_name:string,
    percentage:number,
    area:string,
    lessons_completed:number,
    last_unit:number|string



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
    const [recentLesson,setRecentLesson] = useState<RecentLesson|null>(null)
    const [completed,setCompleted] = useState(false)
    useEffect(()=>{
        if(access)
        {
            makeRequest("get-info/0/")
            .then(res=>res.json())
            .then(data=>{setProfileInfo(data.profile_data)
            console.log(data.profile_data)
            })
            
        }
    },[])

    useEffect(()=>{
        const loadRecent = async()=>{
            if(!access) return
            const res = await makeRequest("get-last/")
            if(!res.ok) return
            const data = await res.json()
            if(data.message==="all lessons completed"){ setCompleted(true); return }
            setRecentLesson(data)
        }
        loadRecent()
    },[])
    const unlocked = profileInfo?.last_unit==="completed"?6:profileInfo?.last_unit

  return (

    <>
        <StudentNavbar/>

        <section style={{ background: 'linear-gradient(135deg, var(--maincolor) 0%, var(--navcolor) 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <div className="pt-4 position-relative" style={{ paddingBottom: '8rem', zIndex: 1 }}>
                            <h1 className="fw-bold mb-2" style={{ color: '#ffffff' }}>Molo, <span style={{ color: 'var(--goldcolor)' }}>{profileInfo?.first_name ?? "there"}</span>! 👋</h1>
                            <p className="fs-5 mb-0" style={{ color: 'rgba(255,255,255,0.92)' }}>{completed ? "You've completed every lesson — amazing work!" : recentLesson ? `You're exploring Unit ${recentLesson.unit} of the Cyber Jungle. Keep going!` : "Ready to start your coding adventure with Lwazi?"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-0">
            <div className="container">
                <div className="row gx-xl-5 position-relative" style={{ marginTop: '-6rem', zIndex: 2 }}>
                    <div className="col-lg-3">
                        <StudentAdminSidebar/>
                    </div>	
                    
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="card rounded-3 border shadow-sm p-4 mb-4">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="square--60 circle bg-light-green fs-3"><i className="bi bi-laptop text-green"></i></div>
                                        <div className="d-flex flex-column gap-1">
                                            <h2 className="fw-semibold m-0">{profileInfo?.lessons_completed ?? 0}</h2><span className="text-muted">Lessons completed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="square--60 circle bg-light-main fs-3"><i className="bi bi-shield-lock text-main"></i></div>
                                        <div className="d-flex flex-column gap-1">
                                            <h2 className="fw-semibold m-0">{unlocked ?? 0}/6</h2><span className="text-muted">Lwazi upgrades unlocked</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4"/>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="m-0 fw-semibold">Course progress</h6>
                                <span className="fw-bold text-main">{profileInfo?.percentage ?? 0}%</span>
                            </div>
                            <div className="progress" style={{ height: '12px', borderRadius: '8px' }}>
                                <div className="progress-bar bg-green" role="progressbar" style={{ width: `${profileInfo?.percentage ?? 0}%` }} aria-valuenow={profileInfo?.percentage ?? 0} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-12">
                                <div className="card rounded-3 border shadow-sm p-4">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                                        <div>
                                            <span className="text-muted d-block mb-1">Continue where you left off</span>
                                            <h4 className="mb-0">{completed ? "You've finished every lesson! 🎉" : recentLesson ? `Unit ${recentLesson.unit} · Lesson ${recentLesson.number}` : "Start your first lesson"}</h4>
                                        </div>
                                        {completed ? (
                                            <Link to="/student-course-resume" className="btn btn-main rounded-pill px-4">Review lessons<i className="bi bi-arrow-right ms-2"></i></Link>
                                        ) : (
                                            <Link to={recentLesson ? `/lesson/${recentLesson.unit}/${recentLesson.number}?item=${recentLesson.order}` : "/lesson/0/1"} className="btn btn-main rounded-pill px-4"><i className="bi bi-play-circle me-2"></i>Continue</Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 mt-4 pt-2">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <div className="head-title"><h4 className="mb-2 mb-sm-0">Current Area of the Cyber Jungle</h4></div>
                                </div>
                            </div>
                            {profileInfo?.area && (
                                <div className="col-lg-12 mb-2">
                                    <div className="area-frame">
                                        <img src={profileInfo.area} className="img-fluid w-100 d-block" alt="Current area of the Cyber Jungle" />
                                    </div>
                                </div>
                            )}
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
