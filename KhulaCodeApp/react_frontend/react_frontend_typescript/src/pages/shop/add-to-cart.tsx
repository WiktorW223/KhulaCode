import NavDark from '../../components/navbar/nav-dark'
import { Link } from 'react-router-dom'
import { cartData } from '../../data/shop'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

interface CartData{
    id: number;
    image: string;
    title: string;
    date: string;
    price: string;
}

export default function AddToCart() {
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
                                    <li className="breadcrumb-item active" aria-current="page">Add to Cart</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Add To Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                            <table className="table add_to_cart">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartData.map((item:CartData,index:number)=>( 
                                        <tr key={index}>
                                            <td><div className="tb_course_thumb"><img src={item.image} className="img-fluid" alt="" /></div></td>
                                            <th>{item.title}<span className="tb_date text-muted">{item.date}</span></th>
                                            <td><span className="wish_price theme-cl">{item.price}</span></td>
                                            <td><input type="number" className="form-control qty" step="1"  title="Qty" size={4} placeholder="1"/></td>
                                            <td><Link to="#" className="btn btn-remove">Remove</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="checkout-coupon d-flex align-items-center justify-content-between flex-wrap gap-2 mt-3">
                            <div className="checkout_coupon_flex">
                                <form className="form-inline d-flex align-items-center justify-content-start gap-2">
                                    <input className="form-control w-50" type="search" placeholder="Coupon Code" />
                                    <button type="button" className="btn btn-main">Apply Coupon</button>
                                </form>
                            </div>
                            <div className="ckt_last">
                                <form className="form-inline d-flex align-items-center justify-content-start gap-2">
                                    <button type="button" className="btn btn-dark">Empty cart</button>
                                    <button type="button" className="btn btn-main disabled">Update Cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="cart_totals checkout">
                            <h4>Billing Summary</h4>
                            <div className="cart-wrap">
                                <ul className="cart_list">
                                    <li>Base price<strong>$140.00</strong></li>
                                    <li>Discount<strong>$10.00</strong></li>
                                    <li>CGST<strong>$10.00</strong></li>
                                    <li>SGST<strong>$10.00</strong></li>
                                </ul>
                                <div className="flex_cart">
                                    <div className="flex_cart_1">Total Cost</div>
                                    <div className="flex_cart_2">$170.00</div>
                                </div>
                                <button type="button" className="btn btn-main w-100">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop/>
        
        <FooterDark/>
    </>
  )
}
