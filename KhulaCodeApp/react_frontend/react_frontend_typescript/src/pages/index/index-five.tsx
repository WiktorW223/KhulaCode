import { Link } from 'react-router-dom'

import hero from '../../assets/img/hero-img-3.png'
import avatar1 from '../../assets/img/avatar-1.jpg'
import avatar2 from '../../assets/img/avatar-2.jpg'
import avatar3 from '../../assets/img/avatar-3.jpg'
import avatar4 from '../../assets/img/avatar-4.jpg'
import avatar5 from '../../assets/img/avatar-5.jpg'

import NavLight from '../../components/navbar/nav-light'
import CoursesTabTwo from '../../components/courses/courses-tab-two'
import Instructors from '../../components/instructors'
import CategoryOne from '../../components/category/category-one'
import AboutThree from '../../components/about/about-three'
import PricingOne from '../../components/pricing/pricing-one'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

const Images:string[] = [avatar1, avatar2, avatar3, avatar4, avatar5]

export default function IndexFive() {
  return (
    <>
        <NavLight/>

        <div className="image-cover hero_banner home-5" data-overlay="0">
            <div className="container pt-lg-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="hero-caption mb-2">
                            <div className="mb-3 d-flex gap-3 align-items-center">
                                <div className="avatar-group">
                                    {Images.map((item:string,index:number)=>( 
                                        <span className="avatar-single" key={index}>
                                            <img alt="avatar" src={item} className="img-fluid border thumb-sm circle"/>
                                        </span>
                                    ))}
                                </div>
                                <div className="reviews-caption">
                                    <div className="d-flex align-items-center gap-2 fs-5 lh-0">
                                        <div className="text-light fw-semibold">4.9</div>
                                        <div className="reviews-star">
                                            <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                            <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                            <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                            <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                            <i className='bi bi-star-fill text-warning me-1 fs-6'></i>
                                        </div>
                                    </div>
                                    <div className="text-light">Engaged Students</div>
                                </div>
                                </div>
                            <h1 className="big-header-capt mb-0">Your Learning Journey Starts Here</h1>
                        </div>
                        
                        <div className="hero-search my-4">
                            <form className="search-form shadow-sm">
                                <div className="form-group flex-fill">
                                    <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                    <i className="ico bi bi-search"></i>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-dark"><i className="bi bi-send"></i></button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="d-block mt-2">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="join-buttons"><Link to="#" className="btn btn-backup rounded-pill px-4">Enrolled Today Now</Link></div>
                                <div className="join-buttons d-flex align-items-center justify-content-start gap-2">
                                    <Link id="play-video" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="video-play-button light" to=""><span></span></Link>
                                    <Link to="#" id="play-video" className="text-light fw-semibold">How It Works?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="flixio position-relative">
                            <div className="bg-white rounded-4 p-3 px-4 position-absolute start-0 bottom-0 ms-4 shadow-sm animate-bounce d-none d-md-block">
                                <div className="d-flex align-items-center justify-content-start flex-column gap-3">
                                    <div className="d-flex align-items-center gap-2 lh-0">
                                        <div className="reviews-star">
                                            <i className="bi bi-star-fill text-warning"></i>
                                        </div>
                                        <div className="text-dark fw-semibold">Success Rate 4.9%</div>
                                    </div>
                                    <div className="d-flex align-items-start flex-column gap-1 w-100">
                                        <div className="progress w-100 mb-2" role="progressbar" aria-label="Example with label" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{height:'5px'}}>
                                            <div className="progress-bar bg-success" style={{width:'80%'}}></div>
                                        </div>
                                        <div className="progress w-100 mb-2" role="progressbar" aria-label="Example with label" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{height:'5px'}}>
                                            <div className="progress-bar bg-primary" style={{width:'60%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <img className="img-fluid" src={hero} alt=""/>
                            
                            <div className="bg-white rounded-4 p-3 pe-4 position-absolute end-0 top-0 mt-5 shadow-sm animate-bounce d-none d-md-block">
                                <div className="d-flex align-items-center justify-content-start gap-2">
                                    <div className="square--50 circle bg-light-green text-green"><i className="bi bi-mortarboard-fill fs-4"></i></div>
                                    <div className="d-flex align-items-start flex-column gap-1">
                                        <div className="fs-6 text-dark fw-semibold">Join for Free</div>
                                        <div className="text-gray-500">2.5k+ Courses Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
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

        <section className="border-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Explore Our Courses</h2>
                            <p>Connect with Experienced Professionals Who Are Passionate About Teaching</p>
                        </div>
                    </div>
                </div>
                <Instructors/>
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

        <section>
            <div className="container">
                <AboutThree/>
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
