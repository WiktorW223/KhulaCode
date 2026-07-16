import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000/KhulaCode/"

type helloString = {
msg:string;
};

function App(){
const [message,setMessage] = useState<string>("Loading...");
useEffect(() =>{
    async function getMessage() {
        try{
            const res = await fetch(`${API_BASE_URL}test/`);

            const jsonRes:helloString = await res.json();
            setMessage(jsonRes.msg);
        }
        catch(error){
            setMessage("error with displaying msg");
            console.error(error);
        }
    }


getMessage();
},[]);



return(
<div>
<p>{message}</p>
</div>
);
}
export default App;




/*
import payment1 from '../../assets/img/mastercard.png'
import payment2 from '../../assets/img/paypal.png'
import payment3 from '../../assets/img/visa.png'

import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'


export default function Checkout() {
     const [selected, setSelected] = useState("payment1");
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
                                    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">Checkout</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                    
                        <div className="cart_totals checkout mb-4">
                            <h4>Billing info</h4>
                            <div className="row g-3">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                                                    
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Town/City</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>State/Country</label>
                                        <select id="country" className="form-control form-select">
                                            <option value="">&nbsp;</option>
                                            <option value="1">United State</option>
                                            <option value="2">United Kingdom</option>
                                            <option value="3">India</option>
                                            <option value="3">China</option>
                                            <option value="3">Canada</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Zip/Postal Code</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="sm-add-ship">
                                        <input id="aa-4" className="form-check-input" name="aa-4" type="checkbox"/>
                                        <label htmlFor="aa-4" className="form-check-label">Skip to a different address?</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="cart_totals checkout">
                            <h4>Select Payment Methode</h4>
                           <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <label className={`choose_payment_mt ${selected === "payment1" ? "active" : ""}`} style={{ cursor: "pointer", display: "block", textAlign: "center" }}>
                                    <input type="radio" name="payment" value="payment3" checked={selected === "payment1"} onChange={() => setSelected("payment1")} style={{ display: "none" }} />
                                        <img src={payment1} alt="Payment 1  " className="img-fluid"/>
                                    </label>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <label className={`choose_payment_mt ${selected === "payment2" ? "active" : ""}`} style={{ cursor: "pointer", display: "block", textAlign: "center" }}>
                                    <input type="radio" name="payment" value="payment3" checked={selected === "payment2"} onChange={() => setSelected("payment2")} style={{ display: "none" }} />
                                        <img src={payment2} alt="Payment 2" className="img-fluid"/>
                                    </label>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <label className={`choose_payment_mt ${selected === "payment3" ? "active" : ""}`} style={{ cursor: "pointer", display: "block", textAlign: "center" }}>
                                    <input type="radio" name="payment" value="payment3" checked={selected === "payment3"} onChange={() => setSelected("payment3")} style={{ display: "none" }} />
                                        <img src={payment3} alt="Payment 3" className="img-fluid"/>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="row g-3">
                                
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <label>Card Number</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-7 col-md-7">
                                    <div className="form-group">
                                        <label>Card Holder</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-3">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="text" className="form-control" placeholder="mm/dd/yyyy"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-2 col-md-2">
                                    <div className="form-group">
                                        <label>CVC</label>
                                        <input type="text" className="form-control" placeholder="cvc"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-dark full-width">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="cart_totals checkout">
                            <h4>Order Summary</h4>
                            <div className="cart-wrap">
                                <ul className="cart_list">
                                    <li>Base price<strong className="fw-semibold text-muted">$140.00</strong></li>
                                    <li>Discount<strong className="fw-semibold text-muted">$10.00</strong></li>
                                    <li>CGST<strong className="fw-semibold text-muted">$10.00</strong></li>
                                    <li>SGST<strong className="fw-semibold text-muted">$10.00</strong></li>
                                </ul>
                                <div className="flex_cart">
                                    <div className="flex_cart_1">Total Cost</div>
                                    <div className="flex_cart_2 text-green">$170.00</div>
                                </div>
                                <button type="button" className="btn btn-main w-100">Proceed To Checkout<i className="bi bi-arrow-right ms-2"></i></button>
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
*/