import { Link } from 'react-router-dom'
import bg from '../../assets/img/become-bg.png'
import image from '../../assets/img/2.png'

export default function CtaOne() {
  return (
        <section className="py-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="bg-cover bg-main rounded-4 position-relative" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}}>
                            <div className="row align-items-start">
                                <div className="col-xxl-6 col-xl-7 col-lg-9">
                                    <div className="py-5 px-md-5 px-4">
                                        <div className="become-content d-block mb-4">
                                            <h2 className="text-light">Join LearnUp Membership & Get Certificate!</h2>
                                            <p className="text-light fs-6 opacity-75">Connect with Experienced Professionals Who Are Passionate About Teaching</p>
                                        </div>
                                        <div className="btn-block">
                                            <Link to="#" className="btn btn-lg btn-dark rounded-pill px-5">Become a Tutor</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute end-0 bottom-0 d-lg-block d-none">
                                <img src={image} className="img-fluid" width="470" alt="Image"/>								
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
