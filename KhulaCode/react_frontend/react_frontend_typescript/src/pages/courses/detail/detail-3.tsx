import { Link } from 'react-router-dom'

import images from '../../../assets/img/bg-new.jpg'

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

export default function Detail3() {
  return (
    <>
        <div className="shadow-sm">
            <NavDark/>   
        </div>

        <div className="ed_detail_head lg bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="courses-video lg">
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
                    
                    <div className="col-lg-6 col-md-6">
                        <div className="ed_detail_wrap">
                            <ul className="list_ed_detail2">
                                <li className="tag-2"><i className="ti-calendar"></i><strong>Duration:</strong>10 - 25 Weeks</li>
                                <li className="tag-1"><i className="ti-user"></i><strong>Enrolled:</strong>712 Students</li>
                                <li className="tag-3"><i className="ti-book"></i><strong>Lectures:</strong>602 Lectures</li>
                                <li className="tag-4"><i className="ti-video-camera"></i><strong>Videos:</strong>402 Videos</li>
                                <li className="tag-5"><i className="ti-tag"></i><strong>Level:</strong>Advance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 pe-xl-4">
                        <CoursesOverview border={true}/>
                        
                        <Circullum border={true}/>
                        
                        <DetailRating border={true}/>
                        
                        <CourseDetail border={true}/>
                        
                        <CourseRating border={true}/>
                        
                        <ReviewForm border={true}/>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-12 pe-xl-5">
                        <DetailSidebar border={true}/>
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
