import NavDark from '../../components/navbar/nav-dark'
import Footer from '../../components/footer/footer'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import { getAccessToken } from '../../lib/tokenService'

export default function Contact() {
  const access = getAccessToken()
  return (
    <>
        {access ? <StudentNavbar /> : <NavDark />}

        <section className="page-title" style={{ background: 'linear-gradient(135deg, var(--maincolor) 0%, var(--navcolor) 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-white">Get in Touch</h1>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>Questions, ideas, or feedback? We'd love to hear from you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8 col-md-7">
                        <div className="card border-0 shadow-sm rounded-4">

                            <div className="card-header bg-transparent border-bottom">
                                <h4 className="card-title mb-0">Send us a message</h4>
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
                                            <button className="btn btn-main rounded-pill px-5" type="button">Submit Request</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <div className="contact-info">
                                    <h4>Get in touch</h4>
                                    <p className="text-muted">Reach out and we'll get back to you as soon as we can.</p>

                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="icons">
                                            <div className="square--50 rounded-3 bg-light-main"><i className="bi bi-pin-map-fill text-main"></i></div>
                                        </div>
                                        <div className="caps-content">
                                            <h5 className="cn-info-title mb-0">Where we are</h5>
                                            <p className="text-muted lh-base">Cape Town,<br/>South Africa</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="icons">
                                            <div className="square--50 rounded-3 bg-light-main"><i className="bi bi-envelope-open text-main"></i></div>
                                        </div>
                                        <div className="caps-content">
                                            <h5 className="cn-info-title mb-0">Email us</h5>
                                            <p className="text-muted lh-base"><a href="mailto:khulacode@email.com" style={{ color: 'var(--maincolor)' }}>khulacode@email.com</a></p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start gap-3">
                                        <div className="icons">
                                            <div className="square--50 rounded-3 bg-light-main"><i className="bi bi-clock-history text-main"></i></div>
                                        </div>
                                        <div className="caps-content">
                                            <h5 className="cn-info-title mb-0">Response time</h5>
                                            <p className="text-muted lh-base">We usually reply within a few days.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}
