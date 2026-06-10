import { Link } from 'react-router-dom'

import { instructorsData } from '../../data/data'

import NavDark from '../../components/navbar/nav-dark'
import InstructorSidebar from '../../components/instructor-sidebar'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

interface Instructor{
    id: number;
    image: string;
    name: string;
    roal: string;
    company: string;
    skill: string[];
    rate: string;
    review: string;
}

export default function FindInstructor() {
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
                                    <li className="breadcrumb-item active" aria-current="page">Instructors</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Find Instructors</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

            <section className="py-5">
				<div className="container">
					<div className="row gx-xxl-4">
						<div className="col-xxl-3 col-lg-4 col-12">	
                            <InstructorSidebar/>
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
                                {instructorsData.map((item:Instructor,index:number)=>( 
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
                                        <div className="card border p-2">
                                            <div className="row g-0">
                                                <div className="col-md-4 overflow-hidden">
                                                    <img src={item.image} className="img-fluid rounded-2" alt="Card image"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-2">
                                                        
                                                        <h4 className="card-title d-flex align-items-center mb-0 lh-base">
                                                            <Link to={`/instructor-detail/${item.id}`}>{item.name}</Link><span className="verified text-green fs-6 ms-2"><i className="bi bi-patch-check-fill"></i></span>
                                                        </h4>
                                                        <div className="d-block mb-3">
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <span className="text-muted">{item.roal}</span>
                                                                <span className="text-muted">@{item.company}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <p className="text-truncate-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit.</p>
                                                        
                                                        <div className="gap-2 d-flex flex-wrap mb-4 mb-lg-5">
                                                            {item.skill.map((skill, index)=>(
                                                                <Link to="#" className="badge badge-outline" key={index}>{skill}</Link>
                                                            )
                                                            )}
                                                        </div>
                            
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                                <span className="text-dark fw-semibold">{item.rate}</span>
                                                                <span className="text-muted">({item.review} Reviews)</span>
                                                            </div>
                                                            <div className="botton-wrap">
                                                                <Link to={`/instructor-detail/${item.id}`} className="btn btn-md btn-outline-dark">View Profile</Link>    
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
