import { Link } from 'react-router-dom'
import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import bg from '../../../assets/img/student-bg.jpg'
import card1 from '../../../assets/img/card-1.png'
import card2 from '../../../assets/img/card-2.png'
import card3 from '../../../assets/img/card-3.png'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { cartData, paymentData } from '../../../data/student'
import FooterDark from '../../../components/footer/footer-dark'

interface CartData{
    image: string;
    title: string;
    time: string;
}

interface PaymentData{
    date: string;
    name: string;
    image: string;
    cardNo: string;
    status: string;
    value: string;
}

export default function StudentPaymentInfo() {
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
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Student Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payment Info</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row mb-4">
                    
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="card border">
                                
                                    <div className="card-header">
                                        <h4 className="text-dark mb-0">Payment Methods</h4>
                                        <span>Set your primary account</span>
                                    </div>
                                    
                                    <div className="card-body">
                                    
                                        <ul className="list-group list-group-flush">
                                            {cartData.map((item:CartData,index:number)=>( 
                                                <li className="list-group-item px-0 pb-2" key={index}>
                                                    <div className="d-flex justify-content-between">
                                                    
                                                        <div className="d-flex align-items-center">
                                                            <img src={item.image} alt="card" className="w-15 me-3"/>
                                                            <div>
                                                                <h5 className="text-dark fs-6 mb-0">{item.title}</h5>
                                                                <p className="text-muted mb-0">{item.time}</p>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="d-flex align-items-center">
                                                            <span className="dropdown dropstart">
                                                                <a className="btn-link text-muted" href="#" role="button" id={String(index)} data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="bi bi-three-dots-vertical"></i>
                                                                </a>
                                                                <span className="dropdown-menu" aria-labelledby={String(index)}>
                                                                    <Link className="dropdown-item" to="#">
                                                                        <i className="bi bi-patch-check me-1"></i>
                                                                        Make it Primary
                                                                    </Link>
                                                                    <span className="dropdown-header"><i className="bi bi-gear-wide me-1"></i>Setting</span>
                                                                    <Link className="dropdown-item" to="#">
                                                                        <i className="bi bi-pencil-square bi bi-gear-wide me-1"></i>
                                                                        Edit
                                                                    </Link>
                                                                    <Link className="dropdown-item" to="#">
                                                                        <i className="bi bi-trash3 me-1"></i>
                                                                        Remove
                                                                    </Link>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="#" className="btn btn-outline-main btn-md mt-3" data-bs-toggle="modal" data-bs-target="#paymentModal">Add Payment Method</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card bg-transparent border rounded-3">
                                    <div className="card-header bg-transparent border-bottom">
                                        <h4 className="mb-2 mb-sm-0">Billing history</h4>
                                    </div>

                                    <div className="card-body">
                                        <div className="row g-3 align-items-center justify-content-between mb-4">
                                            <div className="col-md-7">
                                                <form className="rounded position-relative">
                                                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
                                                    <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                                                        <i className="bi bi-search text-muted opacity-75 fs-6 "></i>
                                                    </button>
                                                </form>
                                            </div>

                                            <div className="col-md-3">
                                                <form>
                                                    <div className="position-relative">
                                                        <select id="sorting" className="form-control form-select">
                                                            <option value="1">Free</option>
                                                            <option value="2">Most Popular</option>
                                                            <option value="3">Most Viewed</option>
                                                            <option value="4">Newest</option>
                                                            <option value="5">Trending</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="table-responsive border-0">
                                            <table className="table align-middle p-4 mb-0">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col" className="border-0 rounded-start">Date</th>
                                                        <th scope="col" className="border-0">Course Name</th>
                                                        <th scope="col" className="border-0">Payment Method</th>
                                                        <th scope="col" className="border-0">Status</th>
                                                        <th scope="col" className="border-0">Total</th>
                                                        <th scope="col" className="border-0 rounded-end">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {paymentData.map((item:PaymentData,index:number)=>( 
                                                        <tr key={index}>
                                                            <td>{item.date}</td>

                                                            <td>
                                                                <h6 className="mt-2 mt-lg-0 mb-0"><Link to="#">{item.name}</Link></h6>
                                                            </td>

                                                            <td><img src={item.image} className="w-12" alt=""/><span className="ms-2">{item.cardNo}</span></td>

                                                            <td>
                                                                {item.status === 'Paid' && <span className="badge bg-success bg-opacity-10 text-success">Paid</span> }
                                                                {item.status === 'Pending' && <span className="badge bg-info bg-opacity-10 text-info">Pending</span> }
                                                                {item.status === 'Cancel' && <span className="badge bg-danger bg-opacity-10 text-danger">Cancel</span> }
                                                            </td>
                                                            
                                                            <td>{item.value}</td>

                                                            <td>
                                                                <Link to="#" className="square--40 circle btn-light-main" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Download" data-bs-original-title="Download"><i className="bi bi-download"></i></Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                                            <p className="mb-0 text-center text-muted">Showing 1 to 10 of 25 entries</p>
                                            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                                                <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                                    <li className="page-item mb-0"><Link className="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left"></i></Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">1</Link></li>
                                                    <li className="page-item mb-0 active"><Link className="page-link" to="#">2</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">3</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">4</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#"><i className="fas fa-angle-right"></i></Link></li>
                                                </ul>
                                            </nav>
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

        <div className="modal fade" id="paymentModal" tabIndex={-1} role="dialog" aria-labelledby="paymentModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                
                    <div className="modal-header bg-dark align-items-center d-flex">
                        <h4 className="modal-title text-light fs-6" id="paymentModalLabel">Add New Payment Method</h4>
                        <a href="#" className="text-light" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-circle"></i></a>
                    </div>
                    
                    <div className="modal-body p-4">
                    
                        <form className="row g-3 mb-4 needs-validation" noValidate>
                        
                            <div className="mb-3 col-12 col-md-12 mb-4">
                                <h5 className="text-dark fs-6 mb-1">Choose Card Type</h5>
                                <div className="d-inline-flex gap-4">
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input type="radio" id="mastercard" name="paymentcard" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="mastercard"><img src={card1} className="w-12" alt="card" /></label>
                                    </div>
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input type="radio" id="visacard" name="paymentcard" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="visacard"><img src={card2} className="w-12" alt="card" /></label>
                                    </div>

                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input type="radio" id="americanexpress" name="paymentcard" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="americanexpress"><img src={card3} className="w-12" alt="card" /></label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-3 col-12 col-md-6">
                                <label htmlFor="nameoncard" className="form-label">Card Holder</label>
                                <input type="text" className="form-control"  placeholder="Name"/>
                            </div>
                            
                            <div className="mb-3 col-12 col-md-3">
                                <div className="form-group">
                                    <label className="form-label">Month</label>
                                    <select className="form-control select form-select">
                                        <option value="">Month</option>
                                        <option value="Jan">Jan</option>
                                        <option value="Feb">Feb</option>
                                        <option value="Mar">Mar</option>
                                        <option value="Apr">Apr</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="Aug">Aug</option>
                                        <option value="Sep">Sep</option>
                                        <option value="Oct">Oct</option>
                                        <option value="Nov">Nov</option>
                                        <option value="Dec">Dec</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="mb-3 col-12 col-md-3">
                                <label className="form-label">Year</label>
                                <select className="form-control select form-select">
                                    <option value="">Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2027">2027</option>
                                </select>
                            </div>
                            
                            <div className="mb-3 col-md-8 col-12">
                                <label className="form-label">Card Number</label>
                                <input className="form-control" type="text"/>
                            </div>
                            
                            <div className="col-md-4 col-12">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="digit-mask">
                                        CVV Code
                                        <i className="bi bi-patch-question ms-1" data-bs-toggle="tooltip" data-placement="top" title="A 3 - digit number, typically printed on the back of a card."></i>
                                    </label>
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                            
                            <div className="col-md-12 col-12">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <button className="btn btn-main" type="button">Save & Add New Card</button>
                                    <button className="btn btn-gray" type="button" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
