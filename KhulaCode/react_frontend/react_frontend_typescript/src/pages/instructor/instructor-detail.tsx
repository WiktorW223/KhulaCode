import { Link, useParams } from 'react-router-dom'

import avatar from '../../assets/img/avatar-3.jpg'

import NavDark from '../../components/navbar/nav-dark'
import CourseRating from '../../components/courses-detail/course-rating'
import FooterDark from '../../components/footer/footer-dark'

import { coursesData, educationData, instructorsData, instructorsSkill } from '../../data/data'

export default function InstructorDetail() {
    const skill = ['WordPress','HTML5','Figma','Full Stack','3 More..']

    const params:any = useParams()
    
    const data:InstructorData | undefined  = instructorsData.find((item)=> item.id === parseInt(params.id))

    interface CouesesData{
        id: number;
        image: string;
        title: string;
        lectures: number;
        level: string;
        price: number;
        rating: number;
        review: string;
        autherImg: string;
        autherName: string;
        time: string;
    }

    interface Education{
        title: string;
        desc: string;
    }

    interface InstructorData{
        id: number;
        image: string;
        name: string;
        roal: string;
        company: string;
        skill: string[];
        rate: string;
        review: string;
    }
  return (
    <>
        <NavDark/>

        <section className="bg-gredient p-0">
            <div className="container-fluid px-0">
                <div className="ht-200"></div>
            </div>
        </section>  

        <section className="bg-light pt-4">
            <div className="container">
                <div className="row gx-xl-4">
                    <div className="col-lg-3">
                        <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-3" style={{position:'sticky', top:'90px'}}>
                            <div className="d-flex w-100">
                                <a className="d-lg-none btn btn-md btn-outline-dark rounded-pill w-100" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    <i className="bi bi-ui-checks-grid me-2"></i>View Instructor
                                </a>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-start offcanvas-collapse side-filter"  tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header d-lg-none border-bottom">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body pt-4 pt-lg-0 p-lg-0 overlio">
                                
                                <div className="dashboard-navbar card p-3 pt-4 border">
                            
                                    <div className="author-info-wwrap">
                                        <div className="avatar-box d-flex justify-content-center mb-2"><div className="square--120 circle shadow-sm border border-3"><img src={data && data.image ? data.image : avatar} className="img-fluid circle" alt="Avatar"/></div></div>
                                        <div className="author-caps text-center mb-3">
                                            <div className="d-flex flex-column gap-1">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <h5 className="fw-semibold m-0">{data && data.name ? data.name : 'Adam L. Markram'}</h5><span className="verified text-green ms-2"><i className="bi bi-patch-check-fill"></i></span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center"><span className="text-muted">{data && data.roal ? data.roal : 'Front-End Developer'}</span></div>
                                                <div className="d-flex align-items-center justify-content-center gap-1">
                                                    <span className="rating-star"><i className="bi bi-star-fill text-warning"></i></span>
                                                    <span className="fw-semibold text-dark">{data && data.rate ? data.rate : '4.9'}</span>
                                                    <span className="text-muted text-mid">(2.15k Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="viewer_header d-flex align-items-centerc justify-content-center mb-4">
                                            <ul className="badge_info">
                                                <li className="started"><i className="ti-rocket"></i></li>
                                                <li className="medium"><i className="ti-cup"></i></li>
                                                <li className="platinum"><i className="ti-thumb-up"></i></li>
                                                <li className="elite unlock"><i className="ti-medall"></i></li>
                                                <li className="power unlock"><i className="ti-crown"></i></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="d-flex flex-column gap-1">
                                                <h6 className="text-dark lh-1 fw-semibold m-0">42,570</h6>
                                                <span className="text-muted-2 m-0">Students</span>
                                            </div>
                                            <div className="d-flex flex-column gap-2">
                                                <h6 className="text-dark lh-1 fw-semibold m-0">46+</h6>
                                                <span className="text-muted-2 m-0">Courses</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="skill-wraps mb-4">
                                        <h5>Skills</h5>
                                        <div className="gap-2 d-flex flex-wrap">
                                            {skill.map((item:string,index:number)=>( 
                                                <Link to="#" className="badge badge-sm badge-outline rounded-pill" key={index}>{item}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="skill-wraps mb-4">
                                        <h5 className="mb-2">Education</h5>
                                        {educationData.map((item:Education,index:number)=>( 
                                            <div className="d-flex align-items-center mb-3" key={index}>
                                                <span className="square--40 bg-light rounded-3 text-muted"><i className="fas fa-graduation-cap"></i></span>
                                                <div className="ms-3">
                                                    <h6 className="mb-0 text-dark">{item.title}</h6>
                                                    <p className="mb-0 small">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                        
                                        <div className="d-flex align-items-center flex-column gap-2">
                                            <Link to="#" className="btn btn-md btn-outline-main rounded-2 w-100">Send Message</Link>
                                            <Link to="#" className="btn btn-md btn-main rounded-2 w-100">Book a Free Trial</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>							
                        
                    </div>	
                    
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                <div className="card mb-4">
                                    <div className="card-body p-4">
                                        <h4>About</h4>
                                        <p>A globally recognized designer with over 7 years of hands-on experience in UX, product design, and brand strategy. I’ve guided aspiring creatives into high-impact roles across the US, Europe, Japan, and India—empowering them to launch fulfilling careers and build a personal brand that stands out. My mission? To spark the next generation of design leaders—supercharging their creativity, securing top-tier opportunities, and amplifying their voice in the design world through unforgettable, purpose-driven projects.</p>
                                        
                                        <p>My design expertise has helped companies across the US, Europe, and Japan unlock over $150M in revenue. I specialize in Web3, artificial intelligence, and edtech—where innovation meets design with real business impact.</p>
                                    </div>
                                </div>
                                
                                <div className="card mb-4">
                                    <div className="card-body p-4">
                                        <h4>Skills</h4>
                                        <div className="gap-2 d-flex flex-wrap">
                                            {instructorsSkill.map((item:string,index:number)=>( 
                                                <span className="badge badge-gray rounded-pill" key={index}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-4">
                                    <div className="card-body p-4">
                                        <h4>Courses</h4>
                                        <div className="row justify-content-center gx-3 gy-4 mb-4">
                                            {coursesData.slice(0,6).map((item:CouesesData,index:number)=>(
                                                <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                                    <div className="education_block_grid border">
                                                        <div className="education-thumb position-relative">
                                                            <div className="save-course position-absolute top-0 end-0 me-3 mt-3">
                                                                <Link to="#" className="bookmark-button"><i className="bi bi-suit-heart"></i></Link>
                                                            </div>
                                                            <Link to={`/course-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
                                                        </div>
                                                        
                                                        <div className="education-body p-3">
                                                            <div className="education-title">
                                                                <h4 className="fs-6 fw-medium"><Link to={`/course-detail/${item.id}`}>{item.title}</Link></h4>
                                                            </div>
                                                            
                                                            <div className="cources-info">
                                                                <ul>
                                                                    <li><i className="bi bi-camera-reels"></i>{item.lectures} Lectures</li>
                                                                    <li><i className="bi bi-bar-chart"></i>{item.level}</li>
                                                                    <li><i className="bi bi-coin"></i>${item.price}</li>
                                                                    <li><i className="bi bi-star-fill text-warning"></i><span className="overall-rates text-dark fw-medium ms-1">{item.rating}</span><span className="total-reviews">({item.review})</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="education-footer p-3">
                                                            <div className="education_block_author">
                                                                <Link to="#" className="d-flex align-items-center justify-content-start gap-2">
                                                                    <span className="square--30"><img src={item.autherImg} className="img-fluid circle" alt="Author"/></span>
                                                                    <span className="text-dark fw-medium">{item.autherName}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="enrolled-link"><Link to="#" className="main-link fw-medium">Enrolled Now<i className="bi bi-arrow-right ms-2"></i></Link></div>
                                                        </div>
                                                    </div>	
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-12">
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-md btn-light-main rounded-pill">Load More Courses</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card mb-4">
                                    <CourseRating border={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

        <FooterDark/>
    </>
  )
}
