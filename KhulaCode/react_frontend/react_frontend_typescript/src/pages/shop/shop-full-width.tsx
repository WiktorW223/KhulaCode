import NavDark from '../../components/navbar/nav-dark'
import { shopData } from '../../data/shop'
import { Link } from 'react-router-dom'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

interface ShopData{
    id: number;
    image: string;
    title: string;
    rate: number;
    review: number;
    auther: string;
    price: number;
}

export default function ShopFullWidth() {
  return (
    <>
        <NavDark/>   

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-11">
                        <div className="pageTitle-wrap text-center mb-3">
                            <h1 className="text-light">Welcome to our Book Store</h1>
                            <p className="text-light">Reference giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>
                        
                        <div className="search-wraps">
                            <form className="search-form">
                                <div className="d-flex align-items-center justify-content-between bg-white rounded-pill p-2">
                                    <input type="text" className="form-control border-0 shadow-none" placeholder="Search book name..."/>
                                    <button className="square--50 circle border-0 btn-main" type="button"><i className="bi bi-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5">
            <div className="container">
                <div className="row">	
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row align-items-center g-3 mb-3">
                            <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12">
                                We found <strong>50</strong> books for you
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="filter_wraps d-flex align-items-center justify-content-center gap-2">
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
                        
                        <div className="row align-items-center g-xl-3 g-4 mb-5">
                            {shopData.slice(0,8).map((item:ShopData,index:number)=>( 
                                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
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
