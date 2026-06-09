import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import bg from '../../../assets/img/student-bg.jpg'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { coursesData } from '../../../data/student'
import { Link } from 'react-router-dom'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import FooterDark from '../../../components/footer/footer-dark'

const settings = {
    nav: false,
    mouseDrag: true,
    loop: true,
    autoplay: true,
    rewind: true,
    autoplayButtonOutput: false,
    speed: 400,
    autoplayTimeout: 3000,
    controlsText:['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
    },
};

interface CoursesData{
    image: string;
    time: string;
    name: string;
    lesson: string;
    progress: string;
}

export default function StudentAllCourses() {
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
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link    to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Student Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">All Courses</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row mb-4">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <div className="head-title"><h4 className="mb-2 mb-sm-0">Complete Courses</h4></div>
                                    <div className="view-all"><Link to="#" className="btns text-muted mb-0">View All</Link></div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="dash-course-slide" id="dash-course-slide">
                                       <TinySlider settings={settings}>
                                            {coursesData.map((item:CoursesData,index:number)=>( 
                                                <div className="singles_items mb-1" key={index}>
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
                                       </TinySlider>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                        
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                                    <div className="head-title"><h4 className="mb-2 mb-sm-0">All Courses</h4></div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row g-3">
                                        
                                    {coursesData.map((item,index)=>( 
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
