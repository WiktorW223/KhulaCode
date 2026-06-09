import bg from '../../assets/img/banner-2.jpg'

import NavDark from '../../components/navbar/nav-dark'
import Trips from '../../components/trips'
import CategorySlider from '../../components/category/category-slider'
import CoursesSliderTwo from '../../components/courses/courses-slider-two'
import FreeCoursesSlider from '../../components/courses/free-courses-slider'
import LearningBenifit from '../../components/learning-benifit'
import Review from '../../components/review/page'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

export default function IndexTwo() {
  return (
    <>
        <NavDark/>   

        <div className="image-cover half_banner" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                        <div className="card rounded-4 p-lg-5 p-4">
                            <div className="hero-caption mb-4">
                                <h1 className="big-header-capt mb-0">The #1 Place to Grow Your Career</h1>
                                <p>Search & Study any topics, anytime. Choose from thousands of expert-led courses now.</p>
                            </div>
                            
                            <div className="hero-search">
                                <form action="get" className="search-form border border-2">
                                    <div className="form-group flex-fill">
                                        <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                        <i className="ico bi bi-search"></i>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-main"><i className="bi bi-send-fill"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

        <FooterTop/>
        <FooterDark/>
    </>
  )
}
