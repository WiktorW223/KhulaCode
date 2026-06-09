import image from '../../assets/img/custom-img-5.png'
import { Link } from 'react-router-dom'

export default function FaqOne() {
  return (
    <div className="row align-items-center justify-content-center gx-xl-5 gx-lg-5 g-4">
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <div className="facts-img">
                <img src={image} className="img-fluid" alt="" />
            </div>
        </div>
        
        <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="supporting-wraps">
                <div className="supporting-wraps">
                    <div className="d-block mb-4">
                        <h2 className="display-5 fw-normal">Explore Our History & <br/>Core Value</h2>
                        <p className="text-muted-2">You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs.</p>
                    </div>
                
                    <div id="supportingExample" className="accordion supporting">

                        <div className="card border shadow-0 mb-3">
                            <div id="headingOne" className="card-header">
                                <h6 className="mb-0 accordion_title"><Link to="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="d-block position-relative text-dark fw-semibold collapsible-link py-2">Free Vs Premium Courses</Link></h6>
                            </div>
                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#supportingExample" className="collapse show">
                                <div className="card-body txt-muted p-3">
                                    We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.
                                </div>
                            </div>
                        </div>

                        <div className="card border shadow-0 mb-3">
                            <div id="headingTwo" className="card-header">
                                <h6 className="mb-0 accordion_title"><Link to="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark fw-semibold collapsible-link py-2">Advance in Membership Plan?</Link></h6>
                            </div>
                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#supportingExample" className="collapse">
                                <div className="card-body txt-muted p-3">
                                    We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.
                                </div>
                            </div>
                        </div>

                        <div className="card border shadow-0 mb-3">
                            <div id="headingThree" className="card-header">
                                <h6 className="mb-0 accordion_title"><Link to="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark fw-semibold collapsible-link py-2">High Value Supporting</Link></h6>
                            </div>
                            <div id="collapseThree" aria-labelledby="headingThree" data-parent="#supportingExample" className="collapse">
                                <div className="card-body txt-muted p-3">
                                    We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
