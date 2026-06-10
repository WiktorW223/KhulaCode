import { useState } from 'react'

export default function PricingOne() {
    const [month, setMonth] = useState<boolean>(false);

    const handleChange = (e:any) => {
        setMonth(e.target.checked);
        
    }
  return (
    <>
        <div className="row align-items-center justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="billing-toggle">
                    <span className="fw-semibold">Monthly</span>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="billingSwitch" onClick={(e)=>handleChange(e)}/>
                    </div>
                    <span className="fw-semibold">Yearly <span className="badge badge-sm bg-green rounded-pill">Save 20%</span></span>
                </div>
            </div>
        </div>
        
        <div className="row g-3">
        
            <div className="col-lg-4 col-md-4">
                <div className="card border rounded-3 p-3">
                    <div className="card-header border-0 p-3 bg-light rounded-2">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div>
                                <h5 className="mb-1">Basic</h5>
                                <div className="badge text-bg-dark mb-0 rounded-pill">Most popular</div>
                            </div>
                            {month === false && 
                                <div><h4 className="card-price text-success fs-2 mb-0">$19<span className="text-dark fw-normal fs-6">/mo</span></h4></div>
                            }
                            {month === true && 
                                <div><h4 className="card-price text-success fs-2 mb-0">$190<span className="text-dark fw-normal fs-6">/year</span></h4></div>
                            }
                        </div>
                    </div>

                    <div className="position-relative my-3 text-center">
                        <hr/>
                        <p className="small position-absolute text-muted top-50 start-50 translate-middle bg-body px-3">All plans included</p>
                    </div>

                    <div className="card-body pt-0">
                        <ul className="list-unstyled mt-2 mb-0">
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Up to 03 users monthly</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Access free courses</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Online Classess</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Unlimited Storage</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-x-octagon-fill text-danger me-2"></i>Offline Classess</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-x-octagon-fill text-danger me-2"></i>Create Projects</li>
                            <li className="h6 fw-light"><i className="bi bi-x-octagon-fill text-danger me-2"></i>24/7 dedicated Support</li>
                        </ul>
                    </div>
                    <div className="card-footer text-center bg-white p-3 border-0">
                        <button type="button" className="btn btn-gray rounded-pill w-100">Get Started</button>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-4">
                <div className="card border rounded-3 p-3">
                    <div className="card-header border-0 p-3 bg-light rounded-2">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div>
                                <h5 className="mb-1">Standard</h5>
                                <div className="badge bg-red mb-0 rounded-pill">Recommended</div>
                            </div>
                            {month === false && 
                                <div><h4 className="card-price text-success fs-2 mb-0">$99<span className="text-dark fw-normal fs-6">/mo</span></h4></div>
                            }
                            {month === true && 
                                <div><h4 className="card-price text-success fs-2 mb-0">$299<span className="text-dark fw-normal fs-6">/year</span></h4></div>
                            }
                        </div>
                    </div>

                    <div className="position-relative my-3 text-center">
                        <hr/>
                        <p className="small position-absolute text-muted top-50 start-50 translate-middle bg-body px-3">All plans included</p>
                    </div>

                    <div className="card-body pt-0">
                        <ul className="list-unstyled mt-2 mb-0">
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Up to 05 users monthly</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Access free courses</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Online Classess</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Unlimited Storage</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Offline Classess</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-x-octagon-fill text-danger me-2"></i>Create Projects</li>
                            <li className="h6 fw-light"><i className="bi bi-x-octagon-fill text-danger me-2"></i>24/7 dedicated Support</li>
                        </ul>
                    </div>
                    <div className="card-footer text-center bg-white p-3 border-0">
                        <button type="button" className="btn btn-main rounded-pill w-100">Get Started</button>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-4">
                <div className="card border rounded-3 p-3">
                    <div className="card-header border-0 p-3 bg-light rounded-2">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <div>
                                <h5 className="mb-1">Professional</h5>
                                <div className="badge text-bg-dark mb-0 rounded-pill">Best Value</div>
                            </div>
                            {month === false && 
                                <div><h4 className="card-price text-success fs-2 mb-0">$149<span className="text-dark fw-normal fs-6">/mo</span></h4></div>
                            }
                            {month === true && 
                                <div><h4 className="card-price text-success fs-2 mb-0">$599<span className="text-dark fw-normal fs-6">/year</span></h4></div>
                            }
                        </div>
                    </div>

                    <div className="position-relative my-3 text-center">
                        <hr/>
                        <p className="small position-absolute text-muted top-50 start-50 translate-middle bg-body px-3">All plans included</p>
                    </div>

                    <div className="card-body pt-0">
                        <ul className="list-unstyled mt-2 mb-0">
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Up to 05 users monthly</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Access free courses</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Online Classess</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Unlimited Storage</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Offline Classess</li>
                            <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>Create Projects</li>
                            <li className="h6 fw-light"><i className="bi bi-patch-check-fill text-green me-2"></i>24/7 dedicated Support</li>
                        </ul>
                    </div>
                    <div className="card-footer text-center bg-white p-3 border-0">
                        <button type="button" className="btn btn-gray rounded-pill w-100">Get Started</button>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}
