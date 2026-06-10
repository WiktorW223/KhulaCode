import { coursesData } from '../../data/data'
import { Link } from 'react-router-dom'

interface Courses{
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

export default function CoursesTabTwo() {
  return (
        <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-12">	
               <ul className="nav nav-tabs simple smalls scroll-tab align-items-center justify-content-center border-0 mb-4" id="courseTab" role="tablist">
                    <li className="nav-item ms-0" role="presentation">
                        <Link className="nav-link active" id="pills-development-tab" data-bs-toggle="pill" to="#pills-development" role="tab" aria-controls="pills-development" aria-selected="true">
                            Development
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link" id="pills-design-tab" data-bs-toggle="pill" to="#pills-design" role="tab" aria-controls="pills-design" aria-selected="false" tabIndex={-1}>Design</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link" id="pills-marketing-tab" data-bs-toggle="pill" to="#pills-marketing" role="tab" aria-controls="pills-marketing" aria-selected="false" tabIndex={-1}>
                            Marketing
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link" id="pills-business-tab" data-bs-toggle="pill" to="#pills-business" role="tab" aria-controls="pills-business" aria-selected="false" tabIndex={-1}>
                            Business
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link" id="pills-accounting-tab" data-bs-toggle="pill" to="#pills-accounting" role="tab" aria-controls="pills-accounting" aria-selected="false" tabIndex={-1}>Accounting</Link>
                    </li>
                </ul>	
            </div>
            
            <div className="col-xl-12 col-lg-12 col-12">
                
                <div className="tab-content" id="courseTabContent">
                    
                    <div className="tab-pane fade show active" id="pills-development" role="tabpanel" aria-labelledby="pills-development-tab" tabIndex={0}>
                        <div className="row justify-content-center g-3">
                            {coursesData.slice(0,4).map((item:Courses,index:number)=>(
                                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
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
                    </div>
                    
                    <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab" tabIndex={0}>
                        <div className="row justify-content-center g-3">
                            
                            {coursesData.slice(2,6).map((item:Courses,index:number)=>(
                                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
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
                    </div>
                    
                    <div className="tab-pane fade" id="pills-marketing" role="tabpanel" aria-labelledby="pills-marketing-tab" tabIndex={0}>
                        <div className="row justify-content-center g-3">
                            
                            {coursesData.slice(4,8).map((item:Courses,index:number)=>(
                                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
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
                    </div>
                    
                    <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab" tabIndex={0}>
                        <div className="row justify-content-center g-3">
                            
                             {coursesData.slice(6,10).map((item:Courses,index:number)=>(
                                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
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
                    </div>
                    
                    <div className="tab-pane fade" id="pills-accounting" role="tabpanel" aria-labelledby="pills-accounting-tab" tabIndex={0}>
                        <div className="row justify-content-center g-3">
                            
                            {coursesData.slice(8,12).map((item:Courses,index:number)=>(
                                <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
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
                    </div>
                </div>
            </div>
        </div>
  )
}
