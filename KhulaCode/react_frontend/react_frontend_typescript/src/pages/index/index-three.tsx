import NavDark from '../../components/navbar/nav-dark'
import avatar1 from '../../assets/img/avatar-1.jpg'
import avatar2 from '../../assets/img/avatar-2.jpg'
import avatar3 from '../../assets/img/avatar-3.jpg'
import avatar4 from '../../assets/img/avatar-4.jpg'
import avatar5 from '../../assets/img/avatar-5.jpg'
import bg from '../../assets/img/banner-3.jpg'

import AboutOne from '../../components/about/about-one'
import CategoryOne from '../../components/category/category-one'
import CoursesSlider from '../../components/courses/courses-slider'
import FreeCoursesSlider from '../../components/courses/free-courses-slider'
import Review from '../../components/review/page'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

const images = [avatar1,avatar2,avatar3,avatar4,avatar5]

export default function IndexThree() {
  return (
    <>
        <NavDark/>

        <div className="bg-cover hero_banner position-relative" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}} data-overlay="6">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-9 col-md-12">
                        <div className="hero-caption text-center mb-5">
                            <div className="mb-3 d-flex gap-3 align-items-center justify-content-center">
                                <div className="avatar-group">
                                    {images.map((item,index)=>(
                                        <span className="avatar-single" key={index}>
                                            <img alt="avatar" src={item} className="img-fluid border thumb-sm circle"/>
                                        </span>
                                    ))}
                                </div>
                                <div className="reviews-caption">
                                    <div className="text-light fs-6 fw-medium">2.5k+ Student Enrolled</div>
                                </div>
                            </div>
                            <h1 className="big-header-capt mb-0">Master New Skills With LearnUp Expert-Led Courses</h1>
                        </div>
                        
                        <div className="hero-search modern">
                            <form action="get" className="search-form shadow-sm">
                                <div className="form-group flex-fill">
                                    <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                    <i className="ico bi bi-search"></i>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-main">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        <section>
            <div className="container">
                <AboutOne/>
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

        <section className="pt-0">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading">
                            <h2>Browse Our Free Courses</h2>
                            <p>Learn from Industry Experts and Advance Your Career with Practical Skills</p>
                        </div>
                    </div>
                </div>
                <FreeCoursesSlider/>
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
