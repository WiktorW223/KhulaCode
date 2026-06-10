import { Link } from 'react-router-dom'
import avatar1 from '../../assets/img/avatar-1.jpg'
import avatar2 from '../../assets/img/avatar-2.jpg'
import avatar3 from '../../assets/img/avatar-3.jpg'
import avatar4 from '../../assets/img/avatar-4.jpg'
import avatar5 from '../../assets/img/avatar-5.jpg'
import men from '../../assets/img/men.png'
import men2 from '../../assets/img/tutor-men.png'

import NavDark from '../../components/navbar/nav-dark'
import Trips from '../../components/trips'
import CategoryOne from '../../components/category/category-one'
import AboutFour from '../../components/about/about-four'
import AboutFive from '../../components/about/about-five'
import FaqOne from '../../components/faq/faq-one'
import Review from '../../components/review/page'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

const images:string[] = [avatar1, avatar2, avatar3, avatar4, avatar5]

export default function IndexEight() {
  return (
    <>
        <NavDark/>

        <div className="hero_banner home-4 position-relative">
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
                                        <i className='bi bi-star-fill text-warning fs-6 me-1'></i>
                                        <i className='bi bi-star-fill text-warning fs-6 me-1'></i>
                                        <i className='bi bi-star-fill text-warning fs-6 me-1'></i>
                                        <i className='bi bi-star-fill text-warning fs-6 me-1'></i>
                                        <i className='bi bi-star-fill text-warning fs-6 me-1'></i>
                                        <i className='bi bi-star-fill text-warning fs-6 me-1'></i>
                                    </div>
                                    </div>
                                    <div>Engaged Students</div>
                                </div>
                                </div>
                            <h1 className="big-header-capt text-dark mb-0">Your Learning Journey Starts Here</h1>
                        </div>
                        
                        <div className="hero-search my-4">
                            <form action="get" className="search-form shadow-sm">
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
                            <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                <div className="join-buttons"><Link to="#" className="btn btn-main rounded-pill">Enrolled Today Now</Link></div>
                                <div className="join-buttons d-flex align-items-center justify-content-start gap-2">
                                    <Link id="play-video" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="video-play-button" to="#"><span></span></Link>
                                    <Link to="#" id="play-video" className="fw-semibold">How It Works?</Link>
                                </div>
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
            <div className="position-absolute end-0 bottom-0 d-lg-block d-none"><img src={men2} className="img-fluid" width="700" alt="Image"/></div>
        </div>

        <Trips/>

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
                
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="text-center">
                            <Link to="#" className="btn btn-light-main rounded-pill px-5">Explore More Categories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light-main">
            <div className="container">
                <AboutFour/>
            </div>
        </section>

        <section>
            <div className="container">
                <AboutFive/>
            </div>
        </section>

        <section className="pt-0">
            <div className="container">
                <FaqOne/>
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
