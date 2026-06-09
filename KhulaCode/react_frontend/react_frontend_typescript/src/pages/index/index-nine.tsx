import NavDark from '../../components/navbar/nav-dark'
import bg from '../../assets/img/banner-4.jpg'
import PartnerOne from '../../components/partner/partner-one'
import WorkProcess from '../../components/work-process'
import CoursesTabTwo from '../../components/courses/courses-tab-two'
import CategoryOne from '../../components/category/category-one'
import AboutFour from '../../components/about/about-four'
import AboutFive from '../../components/about/about-five'
import Review from '../../components/review/page'
import FaqTwo from '../../components/faq/faq-two'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

export default function IndexNine() {
  return (
    <>
        <NavDark/>   

        <div className="image-cover half_banner" style={{backgroundColor:`#0b2248`, backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                        <div className="card rounded-4 p-lg-5 p-4">
                            <div className="hero-caption mb-4">
                                <h1 className="big-header-capt text-dark mb-0">The #1 Place to Grow Your Career</h1>
                                <p>Search & Study any topics, anytime. Choose from thousands of expert-led courses now.</p>
                            </div>
                            
                            <div className="hero-search">
                                <form action="get" className="search-form border border-2">
                                    <div className="form-group flex-fill">
                                        <input type="text" className="form-control" placeholder="Search for courses, skills, and videos"/>
                                        <i className="ico bi bi-search"></i>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-green"><i className="bi bi-send-fill"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="partner-slider py-5 pb-0">
            <div className="container">
                <PartnerOne/>
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center">
                            <h2>Work & Process</h2>
                            <p>Working Process for Join And Benifits</p>
                        </div>
                    </div>
                </div>
                <WorkProcess/>
            </div>
        </section>

        <section className="border-top">
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

        <section className="pb-0">
            <div className="container">
                <AboutFour/>
            </div>
        </section>

        <section>
            <div className="container">
                <AboutFive/>
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
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="sec-heading center">
                            <p>FAQ's</p>
                            <h2>Frequently asked questions</h2>
                        </div>
                    </div>
                </div>
                <FaqTwo/>
            </div>
        </section>

        <FooterTop/>

        <Footer/>


    </>
  )
}
