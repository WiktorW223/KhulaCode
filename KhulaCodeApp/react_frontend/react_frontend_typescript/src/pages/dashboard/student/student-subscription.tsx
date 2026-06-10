import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import bg from '../../../assets/img/student-bg.jpg'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { Link } from 'react-router-dom'
import FooterDark from '../../../components/footer/footer-dark'

export default function StudentSubscription() {
  return (
    <>
        <StudentNavbar/>

        <section className="bg-cover p-0" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}} data-overlay="4">
            <div className="container-fluid px-0">
                <div className="ht-250"></div>
            </div>
        </section>   

        <section className="pt-4">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-3">
                        <StudentAdminSidebar/>						
                    </div>	
                    
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Student Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">My Subscription</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card border">
                                    <div className="card-header d-lg-flex justify-content-between align-items-center flex-wrap gap-1">
                                        <div className="mb-3 mb-lg-0">
                                            <h3 className="text-dark mb-0">My Subscriptions</h3>
                                            <p className="mb-0">Here is list of package/product that you have subscribed.</p>
                                        </div>
                                        <div>
                                            <Link to="/pricing" className="btn btn-light-red btn-sm rounded-2">Upgrade Now — Go Pro $49</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="card-body">
                                        <div className="border-bottom pt-0 pb-5">
                                            <div className="row mb-4">
                                                <div className="col-lg-6 col-md-8 col-7 mb-2 mb-lg-0">
                                                    <span className="d-block">
                                                        <span className="h4">Monthly</span>
                                                        <span className="badge bg-green ms-2">Active</span>
                                                    </span>
                                                    <p className="mb-0 fs-6">Subscription ID: #LNR236582</p>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-5 mb-2 mb-lg-0">
                                                    <span>Auto Renewal</span>
                                                    <div className="form-check form-switch">
                                                        <input type="checkbox" className="form-check-input" id="customSwitch1" />
                                                        <label className="form-check-label" htmlFor="customSwitch1"></label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-12 col-12 d-lg-flex align-items-start justify-content-end">
                                                    <Link to="#" className="btn btn-light-main btn-sm">Change Plan</Link>
                                                </div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Started On</span>
                                                    <h6 className="text-dark mb-0">10 May 2025</h6>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Price</span>
                                                    <h6 className="text-dark mb-0">Monthly</h6>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Access</span>
                                                    <h6 className="text-dark mb-0">Access All Courses</h6>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Billing Date</span>
                                                    <h6 className="text-dark mb-0">Next Billing on 09 May 2026</h6>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="pt-5">
                                            <div className="row mb-4">
                                                <div className="col mb-2 mb-lg-0">
                                                    <span className="d-block">
                                                        <span className="h4">Free Plan</span>
                                                        <span className="badge bg-red ms-2">Expired</span>
                                                    </span>
                                                    <p className="mb-0 fs-6">Subscription ID: #LNR2568742</p>
                                                </div>
                                                <div className="col-auto">
                                                    <Link to="#" className="btn btn-gray btn-sm disabled rounded-2">Disabled</Link>
                                                </div>
                                            </div>
                                        
                                            <div className="row">
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Started On</span>
                                                    <h6 className="text-dark mb-0">16 Aug 2024</h6>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Price</span>
                                                    <h6 className="text-dark mb-0">Free - Trial a Month</h6>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Access</span>
                                                    <h6 className="text-dark mb-0">Access All Courses</h6>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
                                                    <span className="text-muted fs-6">Billing Date</span>
                                                    <h6 className="text-dark mb-0">Next Billing on A5 Aug 2025</h6>
                                                </div>
                                            </div>
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
