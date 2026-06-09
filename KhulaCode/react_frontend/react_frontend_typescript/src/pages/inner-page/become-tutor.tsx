import { Link } from 'react-router-dom'

import bg from '../../assets/img/19664.jpg'

import NavDark from '../../components/navbar/nav-dark'
import PartnerOne from '../../components/partner/partner-one'
import CounterOne from '../../components/counter-one'
import Review from '../../components/review/page'
import AboutFour from '../../components/about/about-four'
import AboutFive from '../../components/about/about-five'
import CtaThree from '../../components/cta/cta-three'
import BlogOne from '../../components/blog/blog-one'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

import { aboutTwo } from '../../data/data'

interface AboutData{
    image: string;
    title: string;
    desc: string;
}

export default function BecomeTutor() {
  return (
    <>
        <NavDark/>

        <div className="bg-cover hero_banner home-3" style={{backgroundImage:`url(${bg})`}} data-overlay="4">
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="d-block mb-3">
                                <div className="d-inline-flex align-items-center justify-content-start bg-transparents rounded-pill py-1 px-2 pe-3 gap-2">
                                    <div className="new label bg-green rounded-pill">20% off</div>
                                    <div className="capstion">
                                        <span className="text-light">Join LearnUp Today!</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="big-header-capt text-light mb-0">Become a LearnUp Instructor</h1>
                            <p className="text-light">Turn your passion into purpose by becoming a LearnUp instructor. Create and sell courses, reach learners worldwide, and grow your personal brand while making a real impact in education.</p>
                        </div>
                        
                        <div className="d-block mt-4">
                            <div className="d-flex align-items-center justify-content-start gap-3">
                                <div className="join-buttons"><Link to="#" className="btn btn-dark rounded-pill">Enrolled Today Now</Link></div>
                                <div className="join-buttons d-flex align-items-center justify-content-start gap-2">
                                    <Link id="play-video" className="video-play-button" to="#"><span></span></Link>
                                    <Link to="#" id="play-video" className="fw-semibold text-light">How It Works?</Link>
                                </div>
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
                            <h2>We’ll help you become the best version of yourself</h2>
                            <p>Fuel your growth—discover what you're truly capable of.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center gx-xl-5 g-4">
                    {aboutTwo.map((item:AboutData,index:number)=>( 
                        <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                            <div className="prc-wraps">
                                <div className="prc-icons text-center mb-3">
                                    <img src={item.image} className="img-fluid w-30" alt="Open an Account"/>
                                </div>
                                <div className="prc-caption text-center">
                                    <h4>{item.title}</h4>
                                    <p className="text-muted-2">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <CounterOne/>

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
