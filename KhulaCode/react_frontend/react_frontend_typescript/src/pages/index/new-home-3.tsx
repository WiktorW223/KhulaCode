import { Link } from 'react-router-dom'

import avtar1 from '../../assets/img/avatar-1.jpg'
import avtar2 from '../../assets/img/avatar-2.jpg'
import avtar3 from '../../assets/img/avatar-3.jpg'
import avtar4 from '../../assets/img/avatar-4.jpg'
import avtar5 from '../../assets/img/avatar-5.jpg'
import heroImg from '../../assets/img/hero-img-5.png'

import NavDark from '../../components/navbar/nav-dark'
import Trips from '../../components/trips'
import AboutFour from '../../components/about/about-four'
import FaqThree from '../../components/faq/faq-three'
import InstructorsTwo from '../../components/instructors-two'
import CategoryTwo from '../../components/category/category-two'
import Review from '../../components/review/page'
import PricingOne from '../../components/pricing/pricing-one'
import CtaThree from '../../components/cta/cta-three'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

const images:string[] = [avtar1, avtar2, avtar3,avtar5, avtar4]

export default function NewHome3() {
  return (
    <>
        <NavDark/>

        <div className="hero_banner py-5">
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="d-block mb-3">
                                <div className="d-inline-flex align-items-center justify-content-start bg-light-red rounded-pill border py-1 px-2 pe-3 gap-2">
                                    <div className="new label bg-red rounded-pill">Buum</div>
                                    <div className="capstion">
                                        <span className="text-red">20% off till 15 Dec 2025</span>
                                    </div>
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
                            
                            <img src={heroImg} className="img-fluid"/>
                            
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

        <Trips/>

        <section>
            <div className="container">
                <AboutFour/>
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

        <CtaThree/>

        <section>
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
        </section>
        <FooterTop/>
        <FooterDark/>
    </>
  )
}
