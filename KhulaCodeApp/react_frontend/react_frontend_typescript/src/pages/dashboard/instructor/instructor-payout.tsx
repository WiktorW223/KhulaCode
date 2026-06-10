import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import { Link } from 'react-router-dom'
import { payoutData } from '../../../data/instructor'
import FooterDark from '../../../components/footer/footer-dark'

interface PayoutData{
    name: string;
    amount: string;
    status: string;
    date: string;
}

export default function InstructorPayout() {
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
                                        <li className="breadcrumb-item"><Link to="#">Instructor Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payout</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card border bg-transparent rounded-3">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center justify-content-between w-100">
                                            <h4 className="mb-2 mb-sm-0">Payouts</h4>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive border-0 rounded-3">
                                            <table className="table align-middle p-4 mb-0">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col" className="border-0 rounded-start">Payout</th>
                                                        <th scope="col" className="border-0">Amount</th>
                                                        <th scope="col" className="border-0">Status</th>
                                                        <th scope="col" className="border-0">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {payoutData.map((item:PayoutData,index:number)=>( 
                                                        <tr key={index}>
                                                            <td>
                                                                <h6 className="mb-0"><Link to="#">{item.name}</Link></h6>
                                                            </td>
                                                            <td><span className="text-muted-2">{item.amount}</span></td>
                                                            {item.status === 'Paid' && 
                                                                <td><span className="badge bg-light-green text-green">Paid</span></td>
                                                            }
                                                            {item.status === 'Cancelled' && 
                                                                <td><span className="badge bg-light-red text-red">Cancelled</span></td>
                                                            }
                                                            <td>
                                                                <span className="text-muted">{item.date}</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-3">
                                            <p className="mb-0 text-center text-sm-start text-muted">Showing 1 to 8 of 20 entries</p>
                                            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                                                <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                                    <li className="page-item mb-0"><Link className="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left"></i></Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">1</Link></li>
                                                    <li className="page-item mb-0 active"><Link className="page-link" to="#">2</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">3</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">4</Link></li>
                                                    <li className="page-item mb-0"><Link className="page-link" to="#">5</Link></li>
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
    </>
  )
}
