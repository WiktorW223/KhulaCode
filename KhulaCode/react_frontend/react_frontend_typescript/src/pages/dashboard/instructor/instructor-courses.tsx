import { Link } from 'react-router-dom'

import InstructorNavbar from '../../../components/instructor-dashboard/instructor-navbar'
import Sidebar from '../../../components/instructor-dashboard/sidebar'
import FooterDark from '../../../components/footer/footer-dark'

import { courseData } from '../../../data/instructor'

interface CoursesData{
    id: number;
    image: string;
    name: string;
    lectures: number;
    completed: number;
    enrolled: number;
    status: string;
    price: number;
}

export default function InstructorCourses() {
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
                                        <li className="breadcrumb-item active" aria-current="page">Courses</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card border bg-transparent rounded-3">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center justify-content-between w-100">
                                            <h4 className="mb-2 mb-sm-0">My All Courses</h4>
                                        </div>
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
                                                            <option value="1">Sort By</option>
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
                    
                                        <div className="table-responsive border-0 rounded-3">
                                            <table className="table align-middle p-4 mb-0">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col" className="border-0 rounded-start">Course Title</th>
                                                        <th scope="col" className="border-0">Enrolled</th>
                                                        <th scope="col" className="border-0">Status</th>
                                                        <th scope="col" className="border-0">Price</th>
                                                        <th scope="col" className="border-0 rounded-end">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {courseData.map((item:CoursesData,index:number)=>( 
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <div className="w-15">
                                                                        <img src={item.image} className="img-fluid rounded" alt=""/>
                                                                    </div>
                                                                    <div className="courses-info">
                                                                        <h6 className="mb-0 fw-semibold table-responsive-title">	
                                                                            <Link to="#">{item.name}</Link>
                                                                        </h6>
                                                                        <div className="d-flex gap-2">
                                                                            <p className="mb-0 text-muted-2 me-1"><i className="bi bi-camera-video me-1"></i>{item.lectures} lectures</p>
                                                                            <p className="mb-0 text-muted-2"><i className="bi bi-check-circle-fill text-success me-1"></i>{item.completed} Completed</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </td>
                                                            <td><span className="text-muted-2">{item.enrolled}</span></td>
                                                            {item.status === 'Live' && <td><span className="badge bg-light-green text-green">Live</span></td>}
                                                            {item.status === 'Rejected' && <td><span className="badge bg-light-red text-red">Rejected</span></td>}
                                                            {item.status === 'Disable' && <td><span className="badge bg-light text-secondary">Disable</span></td>}
                                                            <td><span className="text-muted-2">${item.price}</span></td>
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
