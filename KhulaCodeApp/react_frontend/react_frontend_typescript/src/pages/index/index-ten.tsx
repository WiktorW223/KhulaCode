// @ts-nocheck 
import { Link } from 'react-router-dom'

import avatar1 from '../../assets/img/avatar-1.jpg'
import avatar2 from '../../assets/img/avatar-2.jpg'
import avatar3 from '../../assets/img/avatar-3.jpg'
import avatar4 from '../../assets/img/avatar-4.jpg'
import avatar5 from '../../assets/img/avatar-5.jpg'
import hero1 from '../../assets/img/hero-img-6.png'

import NavDark from '../../components/navbar/nav-dark'
import Trips from '../../components/trips'
import AboutFive from '../../components/about/about-five'
import FaqThree from '../../components/faq/faq-three'
import InstructorsTwo from '../../components/instructors-two'
import CategoryTwo from '../../components/category/category-two'
import Review from '../../components/review/page'
import PricingOne from '../../components/pricing/pricing-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

const image:string[] = [avatar1,avatar2,avatar3, avatar4, avatar5]

export default function IndexTen() {
  return (
    <>
        <NavDark/>

        <div className="notifications-wrapper bg-warning py-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12 col-md-12 col-lg-12">
                        <marquee>
                            <span><i className="bi bi-lightbulb-fill me-2"></i>Start Free Today</span>
                            <span><i className="bi bi-lightbulb-fill me-2"></i>Learn Fast, Grow Big</span>
                            <span><i className="bi bi-lightbulb-fill me-2"></i>100% Quality Courses</span>
                            <span><i className="bi bi-lightbulb-fill me-2"></i>Get 25% Discount at First Time</span>
                            <span><i className="bi bi-lightbulb-fill me-2"></i>Access Anywhere, Anytime</span>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>

        <div className="hero_banner py-5">
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="mb-3 d-flex gap-3 align-items-center">
                                <div className="avatar-group">
                                    {image.map((item:string, index:number)=>( 
                                        <span className="avatar-single" key={index}>
                                            <img alt="avatar" src={item} className="img-fluid border thumb-sm circle"/>
                                        </span>
                                    ))}
                                </div>
                                <div className="reviews-caption">
                                    <div className="d-flex align-items-center gap-2 fs-5 lh-0">
                                    <div className="text-dark fw-semibold">4.9</div>
                                    <div className="reviews-star">
                                        <i className="bi bi-star-fill text-warning me-1 fs-6"></i>
                                        <i className="bi bi-star-fill text-warning me-1 fs-6"></i>
                                        <i className="bi bi-star-fill text-warning me-1 fs-6"></i>
                                        <i className="bi bi-star-fill text-warning me-1 fs-6"></i>
                                        <i className="bi bi-star-fill text-warning me-1 fs-6"></i>
                                    </div>
                                    </div>
                                    <div>Engaged Students</div>
                                </div>
                            </div>
                            <h1 className="big-header-capt fw-bold text-dark mb-0">Getting Best Quality Education is Now More Easier</h1>
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
                                <Link to="#" className="btn btn-warning px-4">Join For Free</Link>
                                <Link to="#" className="btn btn-outline-dark ">Browse Our Courses</Link>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-image position-relative ps-xl-5">
                            <img src={hero1} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Trips/>

        <section>
            <div className="container">
                <AboutFive/>
            </div>
        </section>

        <section className="pt-0">
            <div className="container">
                <FaqThree/>
            </div>
        </section>

        <section className="bg-light-main">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Meet Our Instructors</h2>
                            <p>Connect with Experienced Professionals Who Are Passionate About Teaching</p>
                        </div>
                    </div>
                </div>
                
                <InstructorsTwo/>
            </div>
        </section>

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

        <FooterTop/>
        <FooterDark/>
    </>
  )
}
