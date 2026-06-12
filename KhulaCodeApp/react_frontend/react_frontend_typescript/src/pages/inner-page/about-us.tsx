import { Link } from 'react-router-dom'

import bg from '../../assets/img/about-bg.jpg'
import img from '../../assets/img/hero-img-3.png'
import map from '../../assets/img/testimonial.png'

import NavDark from '../../components/navbar/nav-dark'
import TeamOne from '../../components/team-one'
import ReviewTwo from '../../components/review/review-two'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'
import logo from "../../assets/img/tn.png"
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import { getAccessToken } from '../../lib/tokenService'
export default function AboutUs() {
  const access = getAccessToken()
  return (
    <>
        <div className="shadow-sm">
            {access?<StudentNavbar/>:<NavDark/>}
        </div> 

        <section>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="xol-xxl-7 col-xl-8 col-lg-10 col-md-12">
                        <div className="text-center d-block mb-4">
                            <h1 className="display-2 fw-semibold page-title">Hi, We're <span className="text-main">KhulaCode</span></h1>
                            <p className="fs-5">Sparking curiosity in coding, and making computer science more accessible to all.</p>
                        </div>
                        <div className="article_detail_wrapss single_article_wrap format-standard">
                            <div className="article_body_wrap">
                                <div className="article_featured_image">
                                    <img className="img-fluid" src={logo} alt=""/>
                                </div>
                                
                                <div className="article_top_info">
                                    <ul className="article_middle_info">
                                        <li><Link to="#"><span className="icons"><i className="ti-user"></i></span>by Wiktor Waligora</Link></li>
                                        {/* <li><Link to="#"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</Link></li> */}
                                    </ul>
                                </div>
                                <p>Computer science and coding is not accessible to many students in the world, especially in South Africa. KhulaCode was created to make a difference in that accessibility. By allowing children to learn the basics of computer science in their mother tongue of Xhosa, they are able to retain the basics more and spark a genuine interest in programming. For any inquiries pleasae contact: khulacode@email. PS:Thank you to MaLisa Ndimba for her help in the early stages of the webiste.  </p>
                                {/* <blockquote>
                                    <span className="icon"><i className="fas fa-quote-left"></i></span>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
                                    <h5 className="name">- Rosalina Pong</h5>
                                </blockquote> */}
                                <p></p>
                            </div>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center gap-3">
                            <Link to="#" className="btn btn-main rounded-pill px-4">Get Enrolled</Link>
                            <Link to="#" className="btn btn-gray rounded-pill px-4">Join LearnUp</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>  

        {/* <section className="bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="xol-xxl-12 col-xl-12 col-lg-12 col-md-12">
                        <div className="ht-300"></div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="benifit-oflearning">
                            <div className="d-block mb-4">
                                <h2>Benifit of online learning</h2>
                                <p>We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.</p>
                            </div>
                            
                            <div className="benifit-wraps mb-4">
                                <div className="d-flex flex-column gap-4">
                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                        <div className="icons"><span className="square--50 circle bg-light-green fs-5"><i className="bi bi-patch-check-fill text-green"></i></span></div>
                                        <div className="caps">
                                            <h5>Wide Range of Courses</h5>
                                            <p className="text-muted-2 m-0">Choose from thousands of subjects and skills.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                        <div className="icons"><span className="square--50 circle bg-light-green fs-5"><i className="bi bi-patch-check-fill text-green"></i></span></div>
                                        <div className="caps">
                                            <h5>Cost-Effective</h5>
                                            <p className="text-muted-2 m-0">Often more affordable than traditional classroom learning.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                        <div className="icons"><span className="square--50 circle bg-light-green fs-5"><i className="bi bi-patch-check-fill text-green"></i></span></div>
                                        <div className="caps">
                                            <h5>Global Networking</h5>
                                            <p className="text-muted-2 m-0">Connect with learners and instructors from around the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="#" className="btn btn-main rounded-pill px-5">Create an Account</Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="facts-img">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Meet Our Expert Team</h2>
                            <p>Discover What Learners Around the World Are Saying About Our Courses</p>
                        </div>
                    </div>
                </div>
                <TeamOne/>
            </div>
        </section>

        <section style={{backgroundImage:`url(${map})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Hear from Our Students</h2>
                            <p>Discover What Learners Around the World Are Saying About Our Courses</p>
                        </div>
                    </div>
                </div>
                <ReviewTwo/>
            </div>
        </section>
        <FooterTop/>
        <Footer/> */}
    </>
  )
}
