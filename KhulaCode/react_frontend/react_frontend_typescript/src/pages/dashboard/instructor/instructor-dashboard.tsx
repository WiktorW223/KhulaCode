import { Link } from 'react-router-dom'

import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import FooterDark from '../../../components/footer/footer-dark'

import { instructorAbout, recentSellingCourses } from '../../../data/instructor'

interface AboutData{
    icon: string;
    value: string;
    title: string;
    theme: string;
}

interface SellingData{
    id: number;
    image: string;
    title: string;
    selling: number;
    amount: string;
    time: string;
}

export default function InstructorDashboard() {
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
                                        <li className="breadcrumb-item"><Link to="#">Instructor Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row gy-3 mb-4">
                            {instructorAbout.map((item:AboutData,index:number)=>( 
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="card rounded-3 border px-3 py-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className={`square--60 circle bg-light-${item.theme} fs-3`}><i className={item.icon}></i></div>
                                            <div className="d-flex flex-column gap-1">
                                                <h2 className="fw-semibold m-0">{item.value}</h2><span className="text-muted">{item.title}</span>
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                            ))}
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card border bg-transparent rounded-3">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center justify-content-between w-100">
                                            <h4 className="mb-2 mb-sm-0">Recent Selling Courses</h4>
                                            <Link to="#" className="btns text-muted mb-0">View All</Link>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="table-responsive border-0 rounded-3">
                                            <table className="table align-middle p-4 mb-0">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col" className="border-0 rounded-start">Course Name</th>
                                                        <th scope="col" className="border-0">Selling</th>
                                                        <th scope="col" className="border-0">Amount</th>
                                                        <th scope="col" className="border-0">Period</th>
                                                        <th scope="col" className="border-0 rounded-end">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {recentSellingCourses.map((item:SellingData,index:number)=>( 
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="w-15">
                                                                        <img src={item.image} className="img-fluid rounded" alt=""/>
                                                                    </div>
                                                                    <h6 className="mb-0 fw-semibold ms-2 table-responsive-title">	
                                                                        <Link to="#">{item.title}</Link>
                                                                    </h6>
                                                                </div>
                                                            </td>
                                                            <td><span className="text-muted-2">{item.selling}</span></td>
                                                            <td><span className="text-muted-2">{item.amount}</span></td>
                                                            <td>
                                                                <span className="badge bg-light-green text-green">{item.time}</span>
                                                            </td>
                                                            <td>
                                                                <Link to="#" className="btn btn-sm btn-gray me-1 mb-0"><i className="bi bi-pencil-square"></i></Link>
                                                                <button className="btn btn-sm btn-light-red mb-0"><i className="bi bi-trash3"></i></button>
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
