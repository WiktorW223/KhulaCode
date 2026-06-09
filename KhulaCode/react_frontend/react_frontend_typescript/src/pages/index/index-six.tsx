import bg from '../../assets/img/map.svg'
import b1 from '../../assets/img/banner-catalog-4.png'
import b2 from '../../assets/img/banner-catalog-5.png'
import lamp from '../../assets/img/banner-lamp-2.png'
import trustpilot from '../../assets/img/trustpilot.png'

import NavDark from '../../components/navbar/nav-dark'
import CategorySlider from '../../components/category/category-slider'
import CoursesSliderTwo from '../../components/courses/courses-slider-two'
import FreeCoursesSlider from '../../components/courses/free-courses-slider'
import LearningBenifit from '../../components/learning-benifit'
import Review from '../../components/review/page'
import BlogOne from '../../components/blog/blog-one'
import CtaTwo from '../../components/cta/cta-two'
import FooterDark from '../../components/footer/footer-dark'

export default function IndexSix() {
  return (
    <>
        <NavDark/>

        <div className="hero_banner home-2 position-relative" style={{backgroundColor:'#e7eff6', backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-12">
                    
                        <div className="hero-caption text-center mb-5">
                            <div className="d-block mb-2">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <div className="trustpilot-img"><img src={trustpilot} className="img-fluid" width="150"/></div>
                                    <div className="trustpilot-rats d-flex align-items-center justify-content-center gap-2">
                                        <span className="text-dark fw-semibold">4.8</span>
                                        <span className="text-muted">(3213 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="big-header-capt text-dark mb-0">Master New Skills With <span className="text-main">LearnUp</span> Expert-Led Courses</h1>
                        </div>
                        
                        <div className="hero-search modern">
                            <form action="get" className="search-form shadow-sm">
                                <div className="form-group flex-fill">
                                    <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                    <i className="ico bi bi-search"></i>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-dark">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute start-0 bottom-0"><img src={b1} className="img-fluid"/></div>
            <div className="position-absolute end-0 bottom-0"><img src={b2} className="img-fluid"/></div>
            <div className="position-absolute end-0 top-0 me-5"><img src={lamp} className="img-fluid" width="70"/></div>
        </div>   

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
                <CategorySlider/>
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
                <CoursesSliderTwo/>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Browse Our Free Courses</h2>
                            <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
                        </div>
                    </div>
                </div>
                <FreeCoursesSlider/>
            </div>
        </section>

        <section>
            <div className="container">
                <LearningBenifit/>
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

        <CtaTwo/>

        <FooterDark/>
    </>
  )
}
