import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import { Link } from 'react-router-dom'
import FooterDark from '../../../components/footer/footer-dark'

export default function DeleteAccount() {
  return (
    <>
        <InstructorNavbar/>

        <section className="bg-gredient p-0">
            <div className="container-fluid px-0">
                <div className="ht-200"></div>
            </div>
        </section>   

        <section className="pt-4">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-3">
                        <Sidebar/>						
                    </div>	
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Delete Account</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                
                                <div className="card border rounded-3 mb-0">
                                    <div className="card-header border-bottom">
                                        <h3 className="card-header-title mb-0">Deactivate Account</h3>
                                    </div>
                                    <div className="card-body">
                                        <h5>Why are you deleting your account?</h5>
                                        
                                        <div className="reason-group d-flex flex-column gap-4 mt-4 mb-5">
                                            
                                            <div className="d-flex align-items-start gap-2">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" value="" name="reason" id="reason1"/>
                                                        <label className="form-check-label" htmlFor="reason1"></label>
                                                    </div>
                                                </div>
                                                <div className="caps">
                                                    <h6 className="text-dark mb-0">I no longer need the account</h6>
                                                    <span className="text-muted">I’ve finished my courses or no longer plan to use the platform.</span>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex align-items-start gap-2">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" value="" name="reason" id="reason2"/>
                                                        <label className="form-check-label" htmlFor="reason2"></label>
                                                    </div>
                                                </div>
                                                <div className="caps">
                                                    <h6 className="text-dark mb-0">I’m not satisfied with the content</h6>
                                                    <span className="text-muted">The courses or learning materials didn’t meet my expectations.</span>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex align-items-start gap-2">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" value="" name="reason" id="reason3"/>
                                                        <label className="form-check-label" htmlFor="reason3"></label>
                                                    </div>
                                                </div>
                                                <div className="caps">
                                                    <h6 className="text-dark mb-0">I’m having technical issues</h6>
                                                    <span className="text-muted">I faced bugs, errors, or performance issues while using the site.</span>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex align-items-start gap-2">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" value="" name="reason" id="reason4"/>
                                                        <label className="form-check-label" htmlFor="reason4"></label>
                                                    </div>
                                                </div>
                                                <div className="caps">
                                                    <h6 className="text-dark mb-0">I’m concerned about privacy or data</h6>
                                                    <span className="text-muted">I’m not comfortable with how my data is handled.</span>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex align-items-start gap-2">
                                                <div className="check-box">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" value="" name="reason" id="reason5"/>
                                                        <label className="form-check-label" htmlFor="reason5"></label>
                                                    </div>
                                                </div>
                                                <div className="caps">
                                                    <h6 className="text-dark mb-0">I found an alternative platform</h6>
                                                    <span className="text-muted">I’ve decided to use a different learning platform instead.</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="d-flex align-items-center gap-2">
                                            <Link to="#" className="btn btn-light-green mb-2 mb-sm-0">Keep my account</Link>
                                            <Link to="#" className="btn btn-danger mb-0">Delete my account</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterDark/>
    </>
  )
}
