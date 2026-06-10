import { Link } from 'react-router-dom'
import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

export default function ThankYou() {
  return (
    <>
        <div className="shadow-sm">
            <NavDark/>
        </div>   
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-12">
                        <div className="thankyou-wrap text-center">
                            <div className="square--90 circle bg-green text-light mx-auto mb-4"><i className="bi bi-patch-check-fill fs-1"></i></div>
                            <h2 className="text-dark">Course submission completed successfully.</h2>
                            <p>Thank you for submitting your item. We will review it shortly and notify you by email once your course has been accepted. Please ensure that your <a href="#" className="text-main">Payment and Tax information</a> is accurate and up to date.</p>
                            <Link to="/" className="btn btn-light-main mt-4 mb-5">Back to Homepage</Link>
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
