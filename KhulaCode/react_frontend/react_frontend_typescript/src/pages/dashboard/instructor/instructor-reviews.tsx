import { Link } from 'react-router-dom'

import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import FooterDark from '../../../components/footer/footer-dark'
import { reviewData } from '../../../data/instructor'

interface ReviewData{
    image: string;
    name: string;
    time: string;
    title: string;
    desc: string;
    review: string[];
}

export default function InstructorReviews() {
  return (
    <>
        <InstructorNavbar/>

        <section className="bg-gredient p-0">
            <div className="container-fluid px-0">
                <div className="ht-200"></div>
            </div>
        </section>   

        <section className="pt-4">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-3">
                        <Sidebar/>						
                    </div>	
                    
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Instructor Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Reviews</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                
                                <div className="card border bg-transparent rounded-3">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center justify-content-between w-100">
                                            <h4 className="mb-2 mb-sm-0">Student Reviews</h4>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        
                                        <div className="card-body mt-2 mt-sm-4">
                                            {reviewData.map((item:ReviewData,index:number)=>( 
                                                <div key={index}>
                                                    <div className="d-sm-flex">
                                                        <img className="img-fluid square--80 circle float-start me-3" src={item.image} alt="avatar"/>
                                                        <div>
                                                            <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                                                                <div>
                                                                    <h5 className="m-0">{item.name}</h5>
                                                                    <span className="me-3 text-muted small">{item.time} </span>
                                                                </div>
                                                                <ul className="list-inline mb-0">
                                                                    {item.review.map((el,index)=>( 
                                                                        <li className="list-inline-item me-0" key={index}><i className={el}></i></li>
                                                                    ))}
                                                                </ul>	
                                                            </div>
                                                            <h6><span className="fw-light">Review on:</span> {item.title}</h6>
                                                            <p>{item.desc}</p>
                                                            <div className="text-end">
                                                                <Link to="#" className="btn btn-sm btn-gray rounded-pill px-3 mb-0" >
                                                                    Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-footer bg-white py-3">
                                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                                            <p className="mb-0 text-center text-sm-start text-muted">Showing 1 to 8 of 20 entries</p>
                                            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                                                <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                                    <li className="page-item mb-0"><Link className="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left"></i></Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">1</Link></li>
                                                    <li className="page-item mb-0 active"><Link className="page-link" to="#">2</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">3</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">4</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">5</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#"><i className="fas fa-angle-right"></i></Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
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
