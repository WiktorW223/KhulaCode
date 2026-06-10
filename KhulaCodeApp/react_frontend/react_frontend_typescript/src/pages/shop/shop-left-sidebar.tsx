import { Link } from 'react-router-dom'

import NavDark from '../../components/navbar/nav-dark'
import InstructorSidebar from '../../components/instructor-sidebar'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

import { shopData } from '../../data/shop'

interface ShopData{
    id: number;
    image: string;
    title: string;
    rate: number;
    review: number;
    auther: string;
    price: number;
}

export default function ShopLeftSidebar() {
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
                                    <li className="breadcrumb-item"><Link to="#">Store</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Book Store</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Book Store with Sidebar</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="py-5">
            <div className="container">
                <div className="row">
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
                            {shopData.map((item:ShopData,index:number)=>( 
                                <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6" key={index}>
                                    <div className="card shadow-sm">
                                        <div className="position-relative">
                                            <img src={item.image} className="img-fluid" alt="Book Name"/>
                                            <div className="card-img-overlay d-flex z-index-0 p-3">
                                                <div className="position-absolute end-0 top-0 me-3 mt-3">
                                                    <Link to="#" className="square--40 circle btn-dark" data-bs-toggle="tooltip" data-bs-title="Add To Basket"><i className="bi bi-basket2"></i></Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body px-3">
                                            <h6 className="card-title">
                                                <Link to={`/product-detail/${item.id}`} className="stretched-link">{item.title}</Link>
                                            </h6>
                                            <div className="d-flex align-items-center gap-1">
                                                <span className="star text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="overall-rate text-dark fw-semibold">{item.rate}</span>
                                                <span className="total-rating text-mid text-muted">({item.review} Reviews)</span>
                                            </div>
                                        </div>

                                        <div className="card-footer bg-white border-top py-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="h6 fw-light mb-0">By <span className="fw-semibold">{item.auther}</span></span>
                                                <h5 className="text-green mb-0">${item.price}</h5>
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
                                                <Link className="page-link" to="#" aria-label="Previous">
                                                    <span className="ti-arrow-left"></span>
                                                    <span className="sr-only">Previous</span>
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item active"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#"><i className="bi bi-three-dots"></i></Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">18</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#" aria-label="Next">
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
