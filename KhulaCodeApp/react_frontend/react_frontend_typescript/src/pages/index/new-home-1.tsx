import { Link } from 'react-router-dom'

import bg from '../../assets/img/bg-new.jpg'
import video from '../../assets/img/video.jpg'

import NavDark from '../../components/navbar/nav-dark'
import PartnerOne from '../../components/partner/partner-one'
import WorkProcessTwo from '../../components/work-process-two'
import CoursesTabTwo from '../../components/courses/courses-tab-two'
import CategoryOne from '../../components/category/category-one'
import AboutFour from '../../components/about/about-four'
import AboutFive from '../../components/about/about-five'
import Review from '../../components/review/page'
import FaqTwo from '../../components/faq/faq-two'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

export default function NewHome1() {
  return (
    <>
        <NavDark/>

        <div className="image-cover hero_banner shadow rlt bg-light-2" style={{backgroundImage:`url(${bg})`, backgroundColor:'#2540a2'}} data-overlay="7">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12">
                        <div className="new_captio transparent">
                            <h1 className="big-header-capt text-light mb-2 f_2">A Good Education Is a Foundation for Better Future</h1>
                            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            <div className="mt-4 mb-2">
                                <Link to="#" className="btn btn-main rounded-pill px-md-5 px-4">Get Started</Link>
                                <Link to="#" className="btn btn-video" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><span className=""><i className="fa fa-play"></i></span>Watch Our Video</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        <div className="live_video_craps">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="_live_video_bx">
                            <div className="_live_vd_thumb">
                                <img src={video} className="img-fluid" alt="" />
                                <div className="_live_vd_caption">
                                    <div className="_lvc_staus"><span className="crlc"></span><strong>Live</strong>04:32:22</div>
                                    <div className="_lvc_navigation">
                                        <ul>
                                            <li><Link to="#"><i className="fa fa-microphone"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-video"></i></Link></li>
                                            <li><Link to="#" className="active"><i className="fa fa-phone"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-volume-up"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-user-plus"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PartnerOne/>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Work & Process</h2>
                            <p>Working Process for Join And Benifits</p>
                        </div>
                    </div>
                </div>
                <WorkProcessTwo/>
            </div>
        </section>

        <section className="border-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Explore Our Courses</h2>
                            <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
                        </div>
                    </div>
                </div>
                <CoursesTabTwo/>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Discover Categories</h2>
                            <p>Browse a Wide Range of Subjects to Start Learning What You Love</p>
                        </div>
                    </div>
                </div>
                <CategoryOne/>
            </div>
        </section>

        <section className="pb-0">
            <div className="container">
                <AboutFour/>
            </div>
        </section>

        <section>
            <div className="container">
                <AboutFive/>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Hear from Our Students</h2>
                            <p>Discover What Learners Around the World Are Saying About Our Courses</p>
                        </div>
                    </div>
                </div>
                <Review/>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="sec-heading center">
                            <p>FAQ's</p>
                            <h2>Frequently asked questions</h2>
                        </div>
                    </div>
                </div>
                <FaqTwo/>
            </div>
        </section>
        <FooterTop/>
        <Footer/>

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
