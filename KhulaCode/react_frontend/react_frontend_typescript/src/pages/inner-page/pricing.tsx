import NavDark from '../../components/navbar/nav-dark'
import PricingOne from '../../components/pricing/pricing-one'
import FaqTwo from '../../components/faq/faq-two'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

import { brandImg } from '../../data/data'

export default function Pricing() {
  return (
    <>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-light">Affordable Pricing Packages</h1>
                            <p className="text-light">Reference giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="pt-5">
            <div className="container">
                <PricingOne/>
            </div>
        </section>

        <section className="bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="text-center">
                            <h6 className="fw-semibold">200+ Trusted & Verified Partner in The World.</h6>
                        </div>
                    </div>
                </div>
                
                <div className="row row-cols-3 row-cols-xl-6 row-cols-lg-5 row-cols-md-4 g-4 justify-content-center">
                    {brandImg.map((item:string,index:number)=>( 
                        <div className="col" key={index}>
                            <div className="single-brand text-center px-3 px-lg-4">
                                <img src={item} className="img-fluid" alt="Brand Name"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="sec-heading center">
                            <p>FAQ's</p>
                            <h2>Frequently asked questions</h2>
                        </div>
                    </div>
                </div>
                <FaqTwo/>
            </div>
        </section>
        <FooterTop/>
        <Footer/>
    </>
  )
}
