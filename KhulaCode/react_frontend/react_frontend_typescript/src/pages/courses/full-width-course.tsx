import NavDark from '../../components/navbar/nav-dark'
import { Link } from 'react-router-dom'
import { coursesData } from '../../data/data'
import FilterModal from '../../components/sidebar/filter-modal'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

interface CoursesData{
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

export default function FullWidthCourse() {
  return (
    <>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="breadcrumb m-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb simple light">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Course</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Course Full Layout 01</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Courses Full Layout 01</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 col-lg-12 col-12">
                        <div className="row align-items-center g-3 mb-3">
                            <div className="col-xxl-9 col-xl-8 col-lg-9 col-md-6 col-sm-12 col-12">
                                We found <strong>142</strong> courses for you
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="filter_wraps d-flex align-items-center justify-content-center gap-2">
                                    <a className="btn btn-outline-dark flex-fill" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        <i className="bi bi-sliders me-2"></i>Filter
                                    </a>
                                    <div className="position-relative flex-fill">
                                        <select id="sorting" className="form-control form-select">
                                            <option value="1">Free</option>
                                            <option value="2">Most Popular</option>
                                            <option value="3">Most Viewed</option>
                                            <option value="4">Newest</option>
                                            <option value="5">Trending</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center g-xl-3 g-4 mb-5">
                            {coursesData.map((item:CoursesData,index:number)=>(
                                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={index}>
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
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <ul className="pagination d-flex align-items-center justify-content-center">
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Previous">
                                                <span className="ti-arrow-left"></span>
                                                <span className="sr-only">Previous</span>
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link to="#" className="page-link">1</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">2</Link></li>
                                            <li className="page-item active"><Link to="#" className="page-link">3</Link></li>
                                            <li className="page-item"><Link to="#" className="page-link"><i className="bi bi-three-dots"></i></Link></li>
                                            <li className="page-item"><Link to="#" className="page-link">18</Link></li>
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Next">
                                                    <span className="ti-arrow-right"></span>
                                                    <span className="sr-only">Next</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterTop/>
        <FooterDark/>
        <FilterModal/>
    </>
  )
}
