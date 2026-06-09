import { Link } from 'react-router-dom'
import avatar1 from '../../assets/img/avatar-1.jpg'
import avatar2 from '../../assets/img/avatar-2.jpg'
import avatar3 from '../../assets/img/avatar-3.jpg'
import avatar4 from '../../assets/img/avatar-4.jpg'
import avatar5 from '../../assets/img/avatar-5.jpg'
import avatar6 from '../../assets/img/avatar-6.jpg'
import hero1 from '../../assets/img/hero-img-2.png'

import PartnerOne from '../../components/partner/partner-one'
import NavDark from '../../components/navbar/nav-dark'
import CoursesTab from '../../components/courses/courses-tab'
import CtaOne from '../../components/cta/cta-one'
import CategoryTwo from '../../components/category/category-two'
import Instructors from '../../components/instructors'
import AboutTwo from '../../components/about/about-two'
import PricingOne from '../../components/pricing/pricing-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

const images:string[] = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6]

export default function IndexFour() {
  return (
    <>  
        <div className="shadow-sm">
            <NavDark/>
        </div>

        <div className="hero_banner home-7 position-relative border-bottom">
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="d-block mb-3">
                                <div className="d-inline-flex align-items-center justify-content-start bg-white rounded-pill border py-1 px-2 pe-3 gap-2">
                                    <div className="new label bg-green rounded-pill">New</div>
                                    <div className="capstion">
                                        <span className="text-dark">Empower Your Learning Journey</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="big-header-capt fw-bold text-dark mb-0">The #1 Place to Learn, Grow, and Succeed</h1>
                            <p>Real-world projects and certifications to take your learning further with LearnUp Learning Platform.</p>
                        </div>
                        
                        <div className="top-features my-4">
                            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                                <li className="d-flex flex-row gap-2">
                                    <span><i className="bi bi-patch-check-fill text-green"></i></span>
                                    <span>World's Top Instructors</span>
                                </li>
                                <li className="d-flex flex-row gap-2">
                                    <span><i className="bi bi-patch-check-fill text-green"></i></span>
                                    <span>Skill-Based Training</span>
                                </li>
                                <li className="d-flex flex-row gap-2">
                                    <span><i className="bi bi-patch-check-fill text-green"></i></span>
                                    <span>Future-Proof Your Career</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="d-block mt-2">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <Link to="#" className="btn btn-main px-4">Join For Free</Link>
                                <Link to="#" className="btn btn-outline-dark ">Browse Our Courses</Link>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-image position-relative ps-xl-5">
                            <div className="position-absolute bottom-25 start-0 ms-n8 end-0 d-flex flex-column align-items-start">
                                <div className="bg-white rounded-pill py-2 px-3 shadow-sm mb-2 d-inline-block animate-leftright">
                                    <span className="text-green me-1"><i className="bi bi-book-half"></i></span>
                                    <span className="text-dark fw-medium">200+ Programes</span>
                                </div>
                                <div className="bg-white rounded-pill py-2 px-3 shadow-sm mb-2 d-inline-block animate-leftright">
                                    <span className="text-info me-1"><i className="bi bi-people"></i></span>
                                    <span className="text-dark fw-medium">80+ Expert Instructors</span>
                                </div>
                                <div className="bg-white rounded-pill py-2 px-3 shadow-sm mb-2 d-inline-block animate-leftright">
                                    <span className="text-red me-1"><i className="bi bi-shield-fill-check"></i></span>
                                    <span className="text-dark fw-medium">Certified Learning</span>
                                </div>
                            </div>
                            <img src={hero1} className="img-fluid"/>
                            <div className="bg-white rounded-4 p-3 pe-4 position-absolute end-0 bottom-0 shadow-sm animate-bounce">
                                <div className="text-dark fw-bold fs-4 m-0">75k+</div>
                                <div className="text-gray-500">Students Enrolled with us</div>
                                <div className="avatar-group mt-3">
                                    {images.map((item:string,index:number)=>(
                                        <span className="avatar-single" key={index}>
                                            <img alt="avatar" src={item} className="img-fluid border thumb-sm circle"/>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center text-center">
                            <h5 className="text-dark mb-0">Learn from founders/operators of top brands.</h5>
                        </div>
                    </div>
                </div>
                <PartnerOne/>
            </div>
        </section>

        <section className="pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Explore Our Courses</h2>
                            <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
                        </div>
                    </div>
                </div>
               <CoursesTab/>
            </div>
        </section>

        <CtaOne/>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Discover Categories</h2>
                            <p>Browse a Wide Range of Subjects to Start Learning What You Love</p>
                        </div>
                    </div>
                </div>
                <CategoryTwo/>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Meet Our Instructors</h2>
                            <p>Connect with Experienced Professionals Who Are Passionate About Teaching</p>
                        </div>
                    </div>
                </div>
                <Instructors/>
            </div>
        </section>

        <section>
            <div className="container">
                <AboutTwo/>
            </div>
        </section>

        <section className="bg-light">
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
        </section>

        <section>
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                        <div className="caption-block">
                            <h2 className="display-3 m-0">Hello!</h2>
                            <h3 className="display-4">Become Tutor Today</h3>
                            <p>We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.</p>
                            <div className="benifit-wraps mb-4">
                                <ul className="p-0 m-0 row g-4">
                                    <li className="col-sm-6 fs-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6">Monthly Test Practis</span>
                                        </div>
                                    </li>
                                    <li className="col-sm-6 fs-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6">Offline Classes</span>
                                        </div>
                                    </li>
                                    
                                    <li className="col-sm-6 fs-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6">Best Connectivity</span>
                                        </div>
                                    </li>
                                    <li className="col-sm-6 fs-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6">Get Certificate</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="form-block">
                            <form className="row g-3">
                            
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Name"/>
                                </div>
                                
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Email"/>
                                </div>
                                
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Subject"/>
                                </div>
                                
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Phone No."/>
                                </div>
                                
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" placeholder="Message"></textarea>
                                </div>
                                
                                <div className="form-group col-md-12">
                                    <button type="button" className="btn btn-primary w-100">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterTop/>
        <FooterDark/>
    </>
  )
}
