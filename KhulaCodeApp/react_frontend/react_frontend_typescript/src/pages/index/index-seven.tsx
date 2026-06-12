import { Link } from 'react-router-dom'
import { getAccessToken } from '../../lib/tokenService'

import hero1 from '../../assets/img/hero-img-1.png'
import tricone from '../../assets/img/tricone-slide.png'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import NavDark from '../../components/navbar/nav-dark'
import CategoryOne from '../../components/category/category-one'
import CoursesSlider from '../../components/courses/courses-slider'
import Review from '../../components/review/page'
// import PricingOne from '../../components/pricing/pricing-one'
// import CtaThree from '../../components/cta/cta-three'
// import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'
export default function IndexSeven() {
  const access = getAccessToken()
  const bar = access?<StudentNavbar/>:<NavDark/>
  return (
    <>
        {bar}
        {/* <NavDark/> */}
        

        <div className="hero_banner home-3 position-relative">
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="d-block mb-3">
                                <div className="d-inline-flex align-items-center justify-content-start bg-white rounded-pill py-1 px-2 pe-3 gap-2">
                                    <div className="new label bg-green rounded-pill">New</div>
                                    <div className="capstion">
                                        <span className="text-dark">Sparking Interest in Coding</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="big-header-capt text-dark mb-0">Your Coding Journey Starts Here</h1>
                        </div>
                        
                        {/* <div className="hero-search my-4">
                            <form action="get" className="search-form shadow-sm">
                                <div className="form-group flex-fill">
                                    <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                    <i className="ico bi bi-search"></i>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-main"><i className="bi bi-send"></i></button>
                                </div>
                            </form>
                        </div> */}
                        
                        <div className="d-block mt-2">
                            
                            {access?
                            <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                            <div className="join-buttons d-flex align-items-center justify-content-start gap-2">
                                <Link id="play-video" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className="video-play-button" to=""><span></span></Link>
                                <Link to="" id="play-video" className="fw-semibold">How It Works?</Link>
                            </div>
                        </div>
                            :
                            <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                {/* <div className="join-buttons"><Link to="/register" className="btn btn-outline-dark rounded-pill">Enroll Today Now</Link></div> */}
                                <div className="join-buttons d-flex align-items-center justify-content-start gap-2">
                                    <Link id="play-video" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className="video-play-button" to=""><span></span></Link>
                                    <Link to="" id="play-video" className="fw-semibold">How It Works?</Link>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="hero-image">
                            <img src={hero1} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute start-0 end-0 bottom-0"><img src={tricone} className="img-fluid"/></div>
        </div>

        {/* <section>
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
        </section> */}

        {/* <section className="border-top">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading">
                            <h2>Explore Our Courses</h2>
                            <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
                        </div>
                    </div>
                </div>
                <CoursesSlider/>
            </div>
        </section> */}

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

        {/* <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Get Membership</h2>
                            <p>Connect with Experienced Professionals Who Are Passionate About Teaching</p>
                        </div>
                    </div>
                </div>
                <PricingOne/>
            </div>
        </section> */}
        {/* <CtaThree/> */}

        {/* <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Insights & Updates</h2>
                            <p>Stay Informed with the Latest News, Tips, and Trends in Online Learning</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>
        </section> */}

        {/* <FooterTop/> */}
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
