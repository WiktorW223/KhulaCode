import pilot from '../../assets/img/trustpilot.png'
import catalog1 from '../../assets/img/banner-catalog-1.png'
import catalog2 from '../../assets/img/banner-catalog-2.png'

import NavDark from '../../components/navbar/nav-dark'
import CategoryOne from '../../components/category/category-one'
import CoursesSlider from '../../components/courses/courses-slider'
import Review from '../../components/review/page'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

export default function IndexOne() {
  return (
    <>
    <NavDark/> 

    <div className="hero_banner home-1 position-relative">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-12">
                    <div className="hero-caption text-center mb-5">
                        <div className="d-block mb-2">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <div className="trustpilot-img"><img src={pilot} className="img-fluid" width="150" alt='trustpilot'/></div>
                                <div className="trustpilot-rats d-flex align-items-center justify-content-center gap-2">
                                    <span className="text-dark fw-semibold">4.8</span>
                                    <span className="text-muted">(3213 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <h1 className="big-header-capt cl_2 mb-0">Start Learning Today, Succeed Tomorrow</h1>
                    </div>
                    
                    <div className="hero-search">
                        <form className="search-form shadow-sm">
                            <div className="form-group flex-fill">
                                <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                <i className="ico bi bi-search"></i>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-main"><i className="bi bi-send-fill rotate-45"></i></button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className="position-absolute start-0 bottom-0"><img src={catalog1} className="img-fluid" width="400" alt='catalog1'/></div>
        <div className="position-absolute end-0 bottom-0"><img src={catalog2} className="img-fluid" width="400" alt='catalog2'/></div>
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
            <CategoryOne/>
        </div>
    </section>

    <section className="border-top">
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
    </>
  )
}
