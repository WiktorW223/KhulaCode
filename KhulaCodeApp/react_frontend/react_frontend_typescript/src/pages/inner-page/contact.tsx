import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

export default function Contact() {
  return (
    <>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-light">Get in Touch</h1>
                            <p className="text-light">Reference giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="card border">
                            
                            <div className="card-header">
                                <h4 className="card-title">Fillup The Form</h4>
                            </div>
                            
                            <div className="card-body p-4">
                                <div className="row g-3">
                                
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <button className="btn btn-main px-5" type="button">Submit Request</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-5">
                    
                        <div className="card border">
                            
                            <div className="card-body">
                                <div className="contact-info">
                                    <h4>Get In Touch</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                    
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="icons">
                                            <div className="square--50 rounded-3 bg-light-main"><i className="bi bi-pin-map-fill text-main"></i></div>
                                        </div>
                                        <div className="caps-content">
                                            <h5 className="cn-info-title mb-0">Reach Us</h5>
                                            <p className="text-muted lh-base">2512, New Market,<br/>Eliza Road, Sincher 80 CA, Canada, USA</p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="icons">
                                            <div className="square--50 rounded-3 bg-light-main"><i className="bi bi-envelope-open text-main"></i></div>
                                        </div>
                                        <div className="caps-content">
                                            <h5 className="cn-info-title mb-0">Drop a Mail</h5>
                                            <p className="text-muted lh-base">support@learnup.com<br/>LearnUp@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="icons">
                                            <div className="square--50 rounded-3 bg-light-main"><i className="bi bi-telephone text-main"></i></div>
                                        </div>
                                        <div className="caps-content">
                                            <h5 className="cn-info-title mb-0">Call Us</h5>
                                            <p className="text-muted lh-base">(41) 123 521 458<br/>+91 235 548 7548</p>
                                        </div>
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
