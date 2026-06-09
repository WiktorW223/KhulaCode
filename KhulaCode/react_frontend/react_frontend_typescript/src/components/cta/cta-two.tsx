import bg from '../../assets/img/subscribe-bg.png'
import image from '../../assets/img/subscribe-shapes.png'
import { Link } from 'react-router-dom'

export default function CtaTwo() {
  return (
        <section className="bg-cover newsletter bg-main position-relative" style={{backgroundImage:`url(${bg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
                        <div className="text-start">
                            <div className="subscribe-caption d-block mb-4">
                                <div className="d-flex align-items-center mb-1"><span  className="label bg-warning rounded-pill text-dark"><i className="bi bi-patch-check me-2"></i>Get Certificate</span></div>
                                <h2 className="fs-1 lh-base text-light">Advance Your Learning with LearnUp's Quality Certification</h2>
                                <p className="text-light opacity-75">Subscribe our newsletter & get latest news and updation!</p>
                            </div>
                            <div className="d-block join-block">
                                <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                    <Link to="#" className="btn mid btn-whites rounded-pill px-4">Get Started Today<i className="bi bi-send ms-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute end-0 bottom-0 d-none d-lg-block"><img src={image} className="img-fluid" width="500" alt="Image"/></div>
        </section>
  )
}
