import { Link } from 'react-router-dom'

import bg from '../../../assets/img/detail-bg-2.jpg'
import image from '../../../assets/img/video-bg.jpg'
import avatar from '../../../assets/img/avatar-6.jpg'

import NavDark from '../../../components/navbar/nav-dark'
import ReviewForm from '../../../components/courses-detail/review-form'
import DetailRating from '../../../components/courses-detail/detail-rating'
import CourseRating from '../../../components/courses-detail/course-rating'
import CourseDetail from '../../../components/courses-detail/course-detail'
import Circullum from '../../../components/courses-detail/circullum'
import CoursesOverview from '../../../components/courses-detail/courses-overview'
import DetailSidebarThree from '../../../components/courses-detail/detail-sidebar-three'
import FooterTop from '../../../components/footer/footer-top'
import FooterDark from '../../../components/footer/footer-dark'

export default function Detail4() {
  return (
    <>
       <NavDark/>

        <div className="image-cover ed_detail_head lg theme-ov" style={{backgroundColor:'#f4f4f4', backgroundImage:`url(${bg})`}} data-overlay="7">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-10">
                        <div className="ed_detail_wrap light">
                            <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-green rounded-pill">Beginner</span>
                                <span className="badge bg-red rounded-pill"><i className="bi bi-tags me-1"></i>Pro</span>
                            </div>
                            <div className="ed_header_caption">
                                <h2 className="ed_title">Advance Web Designing Courses</h2>
                                <ul>
                                    <li><i className="bi bi-calendar-check"></i>10 - 20 weeks</li>
                                    <li><i className="bi bi-calendar-check"></i>102 Lectures</li>
                                    <li><i className="bi bi-people"></i>502 Student Enrolled</li>
                                </ul>
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
                                        <strong className="high fw-bold text-light">4.9</strong><span className="text-mid text-light">(2.24k Reviews)</span>
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
                    <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-5">
                        <div className="inline_edu_wrap">
                            <div className="inline_edu_first">
                                <h4>Become a Web Designer & Make More Money</h4>
                                <ul className="edu_inline_info">
                                    <li><i className="ti-calendar"></i>10 weeks</li>
                                    <li><i className="bi bi-camera-video"></i>102 Lectures</li>
                                    <li><i className="ti-user"></i>42k Student Enrolled</li>
                                </ul>
                            </div>	
                            <div className="inline_edu_last">
                                <h4 className="edu_price">$49.00</h4><a href="#" className="btn btn-main enroll-btn">Buy Now<i className="ti-angle-right"></i></a>
                            </div>
                        </div>
                        
                        <div className="courses-video xl">
                            <div className="thumb">
                                <img className="pro_img img-fluid w100" src={image} alt="7.jpg"/>
                                <div className="overlay_icon">
                                    <div className="bb-video-box">
                                        <Link to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="play-popup-video"><i className="bi bi-play-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="instructor_over_info">
                                <ul>
                                    <li>
                                        <div className="ins_info">
                                            <div className="ins_info_thumb"><img src={avatar} className="img-fluid" alt="" /></div>
                                            <div className="ins_info_caption"><span>Teacher</span><h4>Jessica West</h4></div>
                                        </div>
                                    </li>
                                    <li><span>Category</span>Software</li>
                                    <li>
                                        <span>Reviews</span>
                                        <div className="eds_rate">4.2
                                            <div className="eds_rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <div className="tab_box_info mt-4">
                            <ul className="nav nav-pills mb-3 light" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="overview-tab" data-bs-toggle="pill" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="curriculum-tab" data-bs-toggle="pill" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="instructor-tab" data-bs-toggle="pill" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="reviews-tab" data-bs-toggle="pill" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                </li>
                            </ul>
                        
                            <div className="tab-content" id="pills-tabContent">
                                
                                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <CoursesOverview border={false}/>
                                </div>
                                
                                <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum-tab">
                                    <Circullum border={false}/>
                                </div>
                                
                                <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <CourseDetail border={false}/>
                                </div>
                                
                                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                    <DetailRating border={false}/>
                        
                                    <CourseRating border={false}/>
                                    
                                    <ReviewForm border={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <DetailSidebarThree/>
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
