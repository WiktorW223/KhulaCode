import { Link } from 'react-router-dom'
import videoImg from '../../../assets/img/video-bg.jpg'
import NavDark from '../../../components/navbar/nav-dark'
import CoursesOverview from '../../../components/courses-detail/courses-overview'
import Circullum from '../../../components/courses-detail/circullum'
import DetailRating from '../../../components/courses-detail/detail-rating'
import CourseDetail from '../../../components/courses-detail/course-detail'
import CourseRating from '../../../components/courses-detail/course-rating'
import ReviewForm from '../../../components/courses-detail/review-form'
import DetailSidebarFive from '../../../components/courses-detail/detail-sidebar-five'
import FooterTop from '../../../components/footer/footer-top'
import FooterDark from '../../../components/footer/footer-dark'

export default function Detail6() {
  return (
    <>
        <div className="shadow-sm">
            <NavDark/>
        </div>   

        <section className="pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb simple">
                                <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Course</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Laravel introduction for beginners</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-5">
                        <div className="inline_edu_wraps mb-4">
                            <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-light-green text-green rounded-pill">Beginner</span>
                                <span className="badge bg-light-red text-red rounded-pill"><i className="bi bi-tags me-1"></i>Pro</span>
                            </div>
                            <h2>Programming with Advance Laravel: HandsOn Introduction for beginners</h2>
                            <div className="ed_rate_info">
                                <div className="d-flex align-items-center justify-content-start gap-2">
                                    <div className="star_info text-md d-flex align-items-center gap-1">
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                    </div>
                                    <div className="review_counter d-flex align-items-center gap-1">
                                        <strong className="high fw-bold text-dark">4.9</strong><span className="text-mid ">(2.24k Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="inline_edu_wrap">
                            <div className="inline_edu_first">
                                <div className="instructor_dark_info">
                                    <ul>
                                        <li><span>Last Update</span>10 Jan 2022</li>
                                        <li><span>Level</span>Basic</li>
                                        <li><span>Students</span>742,614</li>
                                        <li><span>Language</span>Hindi</li>
                                    </ul>
                                </div>
                            </div>	
                            <div className="inline_edu_last">
                                <Link to="#" className="btn btn-outline-gray border-2 rounded-pill px-4"><i className="bi bi-suit-heart me-2"></i>Wishlist</Link>
                            </div>
                        </div>
                        
                        <div className="courses-video xl mb-4">
                            <div className="thumb">
                                <img className="pro_img img-fluid w100" src={videoImg} alt="7.jpg"/>
                                <div className="overlay_icon">
                                    <div className="bb-video-box">
                                        <Link to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="play-popup-video"><i className="bi bi-play-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <CoursesOverview border={true}/>
                                                
                        <Circullum border={true}/>
                        
                        <DetailRating border={true}/>
                        
                        <CourseDetail border={true}/>
                        
                        <CourseRating border={true}/>
                        
                        <ReviewForm border={true}/>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <DetailSidebarFive/>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop/>
        
        <FooterDark/>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                        <iframe src="https://www.youtube.com/embed/S_CGed6E610"  width='100%' height="450px" style={{marginBottom: 0, display: 'block'}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
