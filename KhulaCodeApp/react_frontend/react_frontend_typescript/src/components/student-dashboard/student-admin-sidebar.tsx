import { useEffect, useState } from 'react';
import user from '../../assets/img/avatar-1.jpg'
import { useApi } from '../../lib/useApi'; 
import { Link, useLocation } from 'react-router-dom'
import { getRecentLesson } from '../../lib/recentApi';
import type { RecentLesson } from '../../lib/recentApi';
import { getAccessToken } from '../../lib/tokenService';

export default function StudentAdminSidebar() {
    const location = useLocation();
    const current = location.pathname
    const access = getAccessToken()
    const {makeRequest} =useApi()
    const [profileData,setProfileData] = useState<profile|null>(null)
    const [showImage,setShowImage] = useState(false)
    const [recentLesson,setRecentLesson] = useState<RecentLesson|null>(null)
    const [completed,setCompleted] = useState(false)

    type profile=
    {
        first_name:string,
        last_name:string,
        xp:number,
        tag:string,
        img:string
    }


    useEffect(()=>{
        makeRequest("get-info/0/")
            .then((res=>res.json()))
            .then((data)=>
            {
                setProfileData(data.profile_data)
                console.log(data)
            })
            

    },[])
    useEffect(()=>{
        const loadRecent = async()=>
        {
            if (access)   
                {
                   const res = await makeRequest("get-last/")
                   if(!res.ok)
                   {
                    console.log("ERROR")   
                    return 
                       
                   }
                   const data = await res.json()
           
                   if(data.message==="all lessons completed")
                   {
                    setCompleted(true)
                    return
                   }
                   setRecentLesson(data)
           
               }
            
        }
        
            
loadRecent()
    },[])
  return (
    <>
        <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-3">
            <div className="d-flex w-100">
                <a className="d-lg-none btn btn-md btn-outline-dark rounded-pill w-100" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i className="bi bi-ui-checks-grid me-2"></i>Dashboard Menu
                </a>
            </div>
        </div>
        <div className="offcanvas offcanvas-start offcanvas-collapse side-filter" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header d-lg-none border-bottom">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pt-4 pt-lg-0 p-lg-0 overlio">
                
                <div className="dashboard-navbar card p-3 pt-4 border">
            
                    <div className="author-info-wwrap">
                        <div className="avatar-box d-flex justify-content-center mb-4">
                            <div className="square--120 circle shadow-sm border border-3 position-relative">
                                <img onClick={()=>setShowImage(true)} src={profileData?.img} className="img-fluid circle" alt="Avatar" style={{cursor:"pointer"}}/>
                                {showImage && (
                                <div className="image-preview-backdrop" onClick={() => setShowImage(false)}>
                                    <img
                                    src={profileData?.img}
                                    className="image-preview"
                                    alt="Profile enlarged"
                                    onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                                )}
                                <span className="badge bg-green text-light rounded-pill position-absolute top-100 start-50 translate-middle">{profileData?.tag}</span>
                            </div>
                        </div>
                        <div className="author-caps text-center mb-4">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h5 className="fw-semibold m-0">{profileData?.first_name} {profileData?.last_name}</h5>
                                </div>
                                {/* <div className="d-flex align-items-center justify-content-center gap-1">
                                    <span className="text-mid text-muted-2">Platinum - Exp. 15 Dec 2025</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                                <h6 className="text-dark lh-1 fw-semibold m-0">{profileData?.xp}</h6>
                                <span style={{color:"green"}}className="text-muted-2 m-0">XP</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                                <h6 className="text-dark lh-1 fw-semibold m-0">{completed?"FINISHED!":`${recentLesson?.unit}/5`}</h6>
                                <span className="text-muted-2 m-0">Current Unit</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-navigation">
                        <ul id="side-menu"> 
                            <li><Link to="/student-dashboard" className={current === '/student-dashboard' ? 'active' : ''}><i className="bi bi-ui-radios-grid me-2"></i>Dashboard</Link></li>
                            {/* <li><Link to="/student-all-courses" className={current === '/student-all-courses' ? 'active' : ''}><i className="bi bi-play-circle me-2"></i>All Courses</Link></li>
                            <li><Link to="/student-subscription" className={current === '/student-subscription' ? 'active' : ''}><i className="bi bi-basket2 me-2"></i>My Subscription</Link></li> */}
                            <li><Link to="/student-course-resume" className={current === '/student-course-resume' ? 'active' : ''}><i className="bi bi-patch-plus me-2"></i>Course Resume</Link></li>
                            {/* <li><Link to="/student-wishlist" className={current === '/student-wishlist' ? 'active' : ''}><i className="bi bi-wallet2 me-2"></i>Wishlist</Link></li> */}
                            {/* <li><Link to="/student-payment-info" className={current === '/student-payment-info' ? 'active' : ''}><i className="bi bi-star-half me-2"></i>Payment Info</Link></li> */}
                            {/* <li><Link to="#"><i className="bi bi-question-octagon me-2"></i>Help & Support</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>	   
    </>
  )
}
