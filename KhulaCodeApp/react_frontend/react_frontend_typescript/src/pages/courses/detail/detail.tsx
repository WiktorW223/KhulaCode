import { Link } from 'react-router-dom'

import images from '../../../assets/img/courses-5.jpg'

import NavDark from '../../../components/navbar/nav-dark'
import CoursesOverview from '../../../components/courses-detail/courses-overview'
import Circullum from '../../../components/courses-detail/circullum'
import DetailRating from '../../../components/courses-detail/detail-rating'
import CourseDetail from '../../../components/courses-detail/course-detail'
import CourseRating from '../../../components/courses-detail/course-rating'
import DetailSidebar from '../../../components/courses-detail/detail-sidebar'
import ReviewForm from '../../../components/courses-detail/review-form'
import FooterTop from '../../../components/footer/footer-top'
import FooterDark from '../../../components/footer/footer-dark'

export default function Detail() {
  return (
    <>
        <div className="shadow-sm">
            <NavDark/>   
        </div>

        <div className="ed_detail_head">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-5">
                        <div className="courses-video">
                            <div className="thumb">
                                <img className="pro_img img-fluid w100" src={images} alt="7.jpg"/>
                                <div className="overlay_icon">
                                    <div className="bb-video-box">
                                        <Link to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="play-popup-video">
                                            <i className="bi bi-play-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-8 col-md-7">
                        <div className="ed_detail_wrap">
                            <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-light-green text-green rounded-pill">Beginner</span>
                                <span className="badge bg-light-red text-red rounded-pill"><i className="bi bi-tags me-1"></i>Pro</span>
                            </div>
                            <div className="ed_header_caption">
                                <h2 className="ed_title">Ruby on Rails Program</h2>
                                <ul>
                                    <li><i className="bi bi-calendar-check"></i>10 - 20 weeks</li>
                                    <li><i className="bi bi-camera-video"></i>102 Lectures</li>
                                    <li><i className="bi bi-people"></i>502 Student Enrolled</li>
                                </ul>
                            </div>
                            <div className="ed_header_short">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            
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
                                        <strong className="high fw-bold text-dark">4.9</strong><span className="text-mid text-muted">(2.24k Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-4">
                        <CoursesOverview border={false}/>
                        
                        <Circullum border={false}/>
                        
                        <DetailRating border={false}/>
                        
                        <CourseDetail border={false}/>
                        
                        <CourseRating border={false}/>
                        
                        <ReviewForm border={false}/>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-12 pe-xl-5">
                        <DetailSidebar border={false}/>
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
