import { Link } from 'react-router-dom'

import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import FooterDark from '../../../components/footer/footer-dark'

export default function Settings() {
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
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Settings</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card border">
                                    <div className="card-header bg-transparent border-bottom">
                                        <h3 className="card-header-title">Settings</h3>
                                    </div>

                                    <div className="card-body">

                                        <h5 className="card-header-title">Notifications Settings</h5>
                                        <p className="mb-2 mt-3">Choose type of notifications you want to receive</p>
                                        <div className="form-check form-switch form-check-md mb-3">
                                            <input className="form-check-input" type="checkbox" id="notificaton1" defaultChecked/>
                                            <label className="form-check-label" htmlFor="notificaton1">Notify me via email when logging in</label>
                                        </div>
                                        <div className="form-check form-switch form-check-md mb-3">
                                            <input className="form-check-input" type="checkbox" id="notificaton2"/>
                                            <label className="form-check-label" htmlFor="notificaton2">Send SMS confirmation for all online payments</label>
                                        </div>
                                        <div className="form-check form-switch form-check-md mb-3">
                                            <input className="form-check-input" type="checkbox" id="notificaton3" defaultChecked/>
                                            <label className="form-check-label" htmlFor="notificaton3">Check which device(s) access your account</label>
                                        </div>
                                        <div className="form-check form-switch form-check-md mb-3">
                                            <input className="form-check-input" type="checkbox" id="notificaton4"/>
                                            <label className="form-check-label" htmlFor="notificaton4">Show your profile publicly</label>
                                        </div>

                                        <div className="d-sm-flex justify-content-end gap-2">
                                            <button type="button" className="btn btn-md btn-main">Save changes</button>
                                            <Link to="#" className="btn btn-md btn-outline-dark">Cancel</Link>
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
