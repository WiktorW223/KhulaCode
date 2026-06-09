import { useState } from 'react'
import NavDark from '../../components/navbar/nav-dark'
import book from '../../assets/img/book-2.jpg'
import { Link, useParams } from 'react-router-dom'
import { shopData } from '../../data/shop';
import FooterTop from '../../components/footer/footer-top';
import Footer from '../../components/footer/footer';

interface ShopData{
    id: number;
    image: string;
    title: string;
    rate: number;
    review: number;
    auther: string;
    price: number;
}

export default function ProductDetail() {
     const [qty, setQty] = useState<number>(1);

    const handleChange = (e:any) => {
        setQty(e.target.value);
    };
    const params:any = useParams()
    const data:ShopData | undefined = shopData.find((item)=>item.id === parseInt(params.id))
  return (
    <>
        <div className="shadow-sm">
            <NavDark/>
        </div>

        <section className="pr_detail">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row g-4">
                            <div className="col-xl-5 col-lg-5">
                                <div className="woo-single-images">
                                    <img src={data && data.image ? data.image : book} className="img-fluid rounded-4" alt="product-book-06"/>
                                </div>
                            </div>
                            
                            <div className="col-xl-7 col-lg-7">
                                <div className="woo_inner">
                                    <div className="d-flex align-items-center mb-2"><span className="badge badge-green rounded-pill">New</span></div>
                                    <h2 className="woo_product_title text-dark">{data && data.title ? data.title : 'Python Essentials for Absolute Beginners'}</h2>
                                    <div className="d-flex align-items-center gap-1 mb-3">
                                        <span className="star text-warning"><i className="bi bi-star-fill"></i></span>
                                        <span className="overall-rate text-dark fw-semibold fs-6">{data && data.rate ? data.rate : '4.9'}</span>
                                        <span className="total-rating text-muted">({data && data.review ? data.review : '475'} Reviews)</span>
                                    </div>
                                    <div className="woo_short_desc">
                                        <p>For many student teachers the prospect of facing their first classroom experience is overwhelming. This book presents a realistic view of what they will face in the classroom, but also provides them the skills they need to become reflective, professional teachers in their own right.</p>
                                    </div>
                                    <ul className="woo_info">
                                        <li><strong className="me-3">Category:</strong>Design</li>
                                        <li><strong className="me-3">SKU:</strong>#CDP0147</li>
                                    </ul>
                                    <div className="woo_price_rate mb-4">
                                        <div className="woo-price d-flex align-items-center gap-3">
                                            <h4 className="mb-0 text-muted-2 text-decoration-line-through">$199.00</h4>
                                            <h3 className="mb-0 text-main">$149.00</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="quantity-button-wrapper mb-4">
                                        <div className="addCart d-flex align-items-center flex-wrap gap-3">
                                            <input type="number" className="form-control qty" min="1" value={qty}  onChange={(e) =>handleChange(e)} placeholder=""/>
                                            <button type="submit" className="btn btn-main px-4">Add to cart</button>
                                            <Link to="#" className="fs-5" data-bs-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="bi bi-suit-heart-fill"></i></Link>
                                        </div>
                                    </div>
                                    
                                    <div className="d-block detailed-wraps">
                                        <div className="property_block_wrap_header">
                                            <ul className="nav nav-tabs customize-tab tabs_creative" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="general-tab" data-bs-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">Description</a>
                                                </li>
                                                
                                                <li className="nav-item">
                                                    <a className="nav-link" id="payment-tab" data-bs-toggle="tab" href="#payment" role="tab" aria-controls="payment" aria-selected="false">Custom Detail</a>
                                                </li>
                                                
                                                <li className="nav-item">
                                                    <a className="nav-link" id="upgrade-tab" data-bs-toggle="tab" href="#upgrade" role="tab" aria-controls="upgrade" aria-selected="false">Reviews</a>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="tab-content tabs_content_creative" id="myTabContent">
                                            
                                            <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>									
                                            </div>
                                            
                                            <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Product ID</th>
                                                                <td>#PRT123452</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Weight</th>
                                                                <td>125kg</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">SKU</th>
                                                                <td>SKL125002</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Color</th>
                                                                <td>Black</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>									
                                            </div>
                                            
                                            <div className="tab-pane fade" id="upgrade" role="tabpanel" aria-labelledby="upgrade-tab">
                                                <div className="alert alert-success" role="alert">No any reviews yet</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="sec-heading center">
                            <p>Related Product</p>
                            <h2>Hot & New Related Product</h2>
                        </div>
                    </div>
                </div>
                
                <div className="row align-items-center justify-content-center g-4">
                    {shopData.slice(0,4).map((item:ShopData,index:number)=>(
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
                                        <a href="product-detail.html" className="stretched-link">{item.title}</a>
                                    </h6>
                                    <div className="d-flex align-items-center gap-1">
                                        <span className="star text-warning"><i className="bi bi-star-fill"></i></span>
                                        <span className="overall-rate text-dark fw-semibold">{item.rate}</span>
                                        <span className="total-rating text-mid text-muted">(475 Reviews)</span>
                                    </div>
                                </div>

                                <div className="card-footer bg-white border-top py-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="h6 fw-light mb-0">By <span className="fw-semibold">Jason Reed</span></span>
                                        <h5 className="text-green mb-0">$129</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <FooterTop/>
        <Footer/>
    </>
  )
}
