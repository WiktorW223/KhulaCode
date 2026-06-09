import NavDark from '../../components/navbar/nav-dark'
import { Link } from 'react-router-dom'
import SidebarOne from '../../components/sidebar/sidebar-one'
import { coursesData } from '../../data/data'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

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

export default function ListWidthSidebar() {
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
                                    <li className="breadcrumb-item active" aria-current="page">Courses List Layout</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Courses List Layout</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-12">	
                        <SidebarOne/>
                    </div>	
                    
                    <div className="col-xxl-9 col-lg-8 col-12">
                        <div className="row align-items-center g-3 mb-3">
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-12">
                                We found <strong>142</strong> courses for you
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                <div className="filter_wraps">
                                    <div className="position-relative">
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
                    
                        
                        <div className="row g-xl-3 g-4 mb-5">
                            {coursesData.slice(0,9).map((item:CoursesData,index:number)=>(
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
									<div className="card border p-2">
										<div className="row g-0">
											<div className="col-md-5 overflow-hidden">
												<img src={item.image} className="img-fluid rounded-2" alt="Card image"/>
												<div className="position-absolute start-0 top-0 mt-3 ms-3">
													<div className="label text-light bg-green rounded-end"><span>Free</span></div>
												</div>
											</div>
											<div className="col-md-7">
												<div className="card-body">
													<div className="d-flex justify-content-between align-items-center mb-2">
														<Link to="#" className="badge text-main bg-light-main mb-2 mb-sm-0">Development</Link>
														<div>
															<span className="h6 me-2"><i className="fas fa-star text-warning me-1"></i>{item.rating}</span>
															<Link to="#" className="text-danger"><i className="bi bi-heart"></i></Link>
														</div>
													</div>
						
													<h5 className="card-title"><Link to="#">{item.title}</Link></h5>
													<p className="text-truncate-2 d-none d-lg-block">Explore our curated collection of courses designed to enhance your web design and development skills. From mastering HTML and CSS to advanced JavaScript techniques.</p>
						
													<ul className="list-inline mb-3">
														<li className="list-inline-item text-muted mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2"></i>21h 56m</li>
														<li className="list-inline-item text-muted mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2"></i>{item.lectures} lectures</li>
														<li className="list-inline-item text-muted"><i className="fas fa-signal text-success me-2"></i>Intermediate</li>
													</ul>
						
													<div className="d-flex justify-content-between align-items-center">
														<div className="d-flex align-items-center">
															<div className="avatar">
																<img className="img-fluid circle w-8" src={item.autherImg} alt="avatar"/>
															</div>
															<p className="mb-0 ms-2"><Link to="#" className="h6 fw-normal">{item.autherName}</Link></p>
														</div>
														<div className="btn-wraps">
															<Link to="#" className="btn btn-md btn-dark">View more</Link>    
														</div>                  
													</div>
												</div>
											</div>
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
        <Footer/>
    </>
  )
}
