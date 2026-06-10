import { Link } from 'react-router-dom'

import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import FooterDark from '../../components/footer/footer-dark'

export default function Component() {
  return (
    <>
        <NavDark/>

        <section className="bg-gredient page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="breadcrumb m-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb simple light">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">All Elements</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="pageTitle-wrap">
                            <h1 className="text-light">All Elements</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 className="mb-3">Tabs Style 01</h4>
                        <div className="tab-wraps mb-4">
                            <ul className="nav nav-tabs customize-tab tabs_creative mb-3" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tab-wraps">
                            <ul className="nav nav-tabs simple mb-3" id="newTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home1-tab" data-bs-toggle="tab" href="#home1" role="tab" aria-controls="home1" aria-selected="true">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile1-tab" data-bs-toggle="tab" href="#profile1" role="tab" aria-controls="profile1" aria-selected="false">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact1-tab" data-bs-toggle="tab" href="#contact1" role="tab" aria-controls="contact1" aria-selected="false">Contact</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="newTabContent">
                                <div className="tab-pane fade show active" id="home1" role="tabpanel" aria-labelledby="home1-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile1-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <div className="tab-pane fade" id="contact1" role="tabpanel" aria-labelledby="contact1-tab">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 className="mb-3">Accordion Examples</h4>
                        <div className="accordion d-flex flex-column gap-3" id="faqSeconda">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive" aria-expanded="true" aria-controls="faqFive">
                                        Is there a discount for yearly billing?
                                    </button>
                                </h2>
                                <div id="faqFive" className="accordion-collapse collapse show" data-bs-parent="#faqSeconda">
                                    <div className="accordion-body">
                                    Each plan provides access to a different level of features such as course materials, downloadable resources, instructor support, and certification. Please refer to the comparison table above for full details.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSix" aria-expanded="false" aria-controls="faqSix">
                                        Can I use one subscription for multiple users?
                                    </button>
                                </h2>
                                <div id="faqSix" className="accordion-collapse collapse" data-bs-parent="#faqSeconda">
                                    <div className="accordion-body">
                                    Each subscription is valid for a single user. For team or classroom access, please contact us about our group plans.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqSeven" aria-expanded="false" aria-controls="faqSeven">
                                        What payment methods do you accept?
                                    </button>
                                </h2>
                                <div id="faqSeven" className="accordion-collapse collapse" data-bs-parent="#faqSeconda">
                                    <div className="accordion-body">
                                    We accept all major credit/debit cards, PayPal, and UPI. For enterprise customers, invoice billing can also be arranged.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqEight" aria-expanded="false" aria-controls="faqEight">
                                        Do you offer refunds?
                                    </button>
                                </h2>
                                <div id="faqEight" className="accordion-collapse collapse" data-bs-parent="#faqSeconda">
                                    <div className="accordion-body">
                                    Yes, we have a 7-day money-back guarantee. If you're not satisfied, you can request a full refund within the first week of your subscription.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row mb-5">
                
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Typography</h4>
                        <h1>Heading One</h1>
                        <h2>Heading Two</h2>
                        <h3>Heading Three</h3>
                        <h4>Heading Four</h4>
                        <h5>Heading Five</h5>
                        <h6>Heading Six</h6>
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Buttons</h4>
                        <button type="submit" className="btn btn-main me-1">Simple button</button>
                        {/* normal white button (below)*/}
                        <button type="submit" className="btn btn-light-main me-1">Simple button</button>
                        <button type="submit" className="btn btn-gray me-1">Simple button</button>
                        <button type="submit" className="btn btn-main btn-md me-1">Midium Button</button>
                        <button type="submit" className="btn btn-light-main rounded-pill btn-lg me-1">Large Button</button>
                        <button type="submit" className="btn btn-light-green me-1 mt-1">Large Button</button>
                        {/* green button */}
                        <button type="submit" className="btn btn-green me-1">Large Button</button>
                        <button type="submit" className="btn btn-light-red me-1">Large Button</button>
                        {/* normal red button */}
                        <button type="submit" className="btn btn-red me-1">Large Button</button>
                        <button type="submit" className="btn btn-outline-dark me-1">Outline Button</button>
                    </div>
                    
                </div>

                <div className="row mb-5">
                
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Shadow & Simple Inputbox</h4>
                        
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                            
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control simple"/>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Course Search</label>
                            <div className="d-flex position-relative">
                                <input type="text" className="form-control ps-5" placeholder="Search Courses..."/>
                                <span className="position-absolute top-50 start-0 translate-middle-y ms-3"><i className="bi bi-search text-muted"></i></span>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label>Select 2</label>
                            <select className="form-control form-select" id="country">
                                <option value="india">India</option>
                                <option value="usa">United State</option>
                                <option value="uk">United Kingdom</option>
                                <option value="australia">Australia</option>
                                <option value="brazil">Brazil</option>
                                <option value="shrilanka">Shrilanka</option>
                            </select>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Checkbox & Radio buttons</h4>
                        <ul className="no-ul-list">
                            <li>
                                <input id="a-1" className="form-check-input me-1" name="a-1" type="checkbox"/>
                                <label htmlFor="a-1" className="form-check-label">Air Condition</label>
                            </li>
                            <li>
                                <input id="a-2" className="form-check-input me-1" name="a-2" type="checkbox"/>
                                <label htmlFor="a-2" className="form-check-label">Bedding</label>
                            </li>
                            
                        </ul>
                        
                        <ul className="no-ul-list">
                            <li>
                                <input id="a-p" className="form-check-input me-1" name="a-p" type="radio"/>
                                <label htmlFor="a-p" className="form-check-label">Air Condition</label>
                            </li>
                            <li>
                                <input id="a-c" className="form-check-input me-1" name="a-c" type="radio"/>
                                <label htmlFor="a-c" className="form-check-label">Bedding</label>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12 col-md-12">
                        <h4>Lists Style</h4>
                    </div>
                    
                    <div className="col-lg-4 col-md-4">
                        <ul className="lists lists-1">
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                        </ul>	
                    </div>
                    
                    <div className="col-lg-4 col-md-4">
                        <ul className="lists lists-2">
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4 col-md-4">
                        <ul className="lists lists-3">
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                            <li>A simple light alert</li>
                        </ul>
                    </div>
                </div>					
            </div>
        </section>
        <FooterTop/>
        <FooterDark/>
    </>
  )
}
