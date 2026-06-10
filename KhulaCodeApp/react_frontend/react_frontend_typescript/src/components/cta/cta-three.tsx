import bg from '../../assets/img/tag-bg.jpg'

export default function CtaThree() {
  return (
    <section className="bg-cover" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}} data-overlay="5">
        <div className="container position-relative">
            <div className="row align-items-center justify-content-between g-4">
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                    <div className="caption-block">
                        <h2 className="display-3 text-light m-0">Hello!</h2>
                        <h3 className="display-4 text-light">Become Tutor Today</h3>
                        <p className=" text-light">We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.</p>
                        <div className="benifit-wraps mb-4">
                            <ul className="p-0 m-0 row g-4">
                                <li className="col-sm-6 fs-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6  text-light">Monthly Test Practis</span>
                                    </div>
                                </li>
                                <li className="col-sm-6 fs-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6  text-light">Offline Classes</span>
                                    </div>
                                </li>
                                
                                <li className="col-sm-6 fs-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6  text-light">Best Connectivity</span>
                                    </div>
                                </li>
                                <li className="col-sm-6 fs-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6  text-light">Get Certificate</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="card p-4 rounded-3 form-block">
                        <div className="d-block mb-4">
                            <h2>Fill the below form & join</h2>
                            <p className="text-muted-2">Discover What Learners Around the World Are Saying About.</p>
                        </div>
                        <form className="row g-3">
                        
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Your Email"/>
                            </div>
                            
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Subject"/>
                            </div>
                            
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Phone No."/>
                            </div>
                            
                            <div className="form-group col-md-12">
                                <textarea className="form-control" placeholder="Message"></textarea>
                            </div>
                            
                            <div className="form-group col-md-12">
                                <button type="button" className="btn btn-primary w-100">Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
