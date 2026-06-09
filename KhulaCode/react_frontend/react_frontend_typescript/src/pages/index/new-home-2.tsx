import { Link } from 'react-router-dom'

import avatar1 from '../../assets/img/avatar-1.jpg'
import avatar2 from '../../assets/img/avatar-2.jpg'
import avatar3 from '../../assets/img/avatar-3.jpg'
import avatar4 from '../../assets/img/avatar-4.jpg'
import avatar5 from '../../assets/img/avatar-5.jpg'
import men from '../../assets/img/men.png'
import lady from '../../assets/img/student-lady.png'

import NavDark from '../../components/navbar/nav-dark'
import PartnerOne from '../../components/partner/partner-one'
import InstructorsTwo from '../../components/instructors-two'
import CategoryOne from '../../components/category/category-one'
import ProCourses from '../../components/courses/pro-courses'
import ReviewTwo from '../../components/review/review-two'
import CtaThree from '../../components/cta/cta-three'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

const images:string[] = [avatar1,avatar2,avatar3,avatar4,avatar5]

export default function NewHome2() {
  return (
    <>
        <NavDark/>

        <div className="hero_banner bg-light home-11 position-relative">
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="mb-3 d-flex gap-3 align-items-center">
                                <div className="avatar-group">
                                    {images.map((item:string,index:number)=>( 
                                        <span className="avatar-single" key={index}>
                                            <img alt="avatar" src={item} className="img-fluid border thumb-sm circle"/>
                                        </span>
                                    ))}
                                </div>
                                <div className="reviews-caption">
                                    <div className="d-flex align-items-center gap-2 fs-5 lh-0">
                                    <div className="text-dark fw-semibold">4.9</div>
                                    <div className="reviews-star">
                                        <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                        <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                        <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                        <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                        <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                    </div>
                                    </div>
                                    <div>Engaged Students</div>
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
                    
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="hero-image d-block d-lg-none">
                            <img src={men} className="img-fluid" width="" alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute end-0 bottom-0 me-5 d-lg-block d-none"><img src={lady} className="img-fluid" width="470" alt="Image"/></div>
        </div>

        <div className="brands_up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="brands-sliders large op-1 shadow_upper">
                            <PartnerOne/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="border-bottom">
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
                <CategoryOne/>
            </div>
        </section>

        <section className="bg-light-main">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Explore Our Courses</h2>
                            <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
                        </div>
                    </div>
                </div>
                <ProCourses/>
            </div>
        </section>

        <section>
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
