import { Link, useLocation } from 'react-router-dom'
import user from '../../assets/img/avatar-3.jpg'


export default function Sidebar() {
    const location = useLocation();
    const current = location.pathname
  return (
    <>
        <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-3">
            <div className="d-flex w-100">
                <a className="d-lg-none btn btn-md btn-outline-dark rounded-pill w-100" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i className="bi bi-ui-checks-grid me-2"></i>Dashboard Menu
                </a>
            </div>
        </div>
        <div className="offcanvas offcanvas-start offcanvas-collapse side-filter" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header d-lg-none border-bottom">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pt-4 pt-lg-0 p-lg-0 overlio">
                
                <div className="dashboard-navbar card p-3 pt-4 border">
            
                    <div className="author-info-wwrap">
                        <div className="avatar-box d-flex justify-content-center mb-2"><div className="square--120 circle shadow-sm border border-3"><img src={user} className="img-fluid circle" alt="Avatar"/></div></div>
                        <div className="author-caps text-center mb-4">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h5 className="fw-medium m-0">Adam L. Markram</h5><span className="verified text-green ms-2"><i className="bi bi-patch-check-fill"></i></span>
                                </div>
                                <div className="d-flex align-items-center justify-content-center gap-1">
                                    <span className="rating-star"><i className="bi bi-star-fill text-warning"></i></span>
                                    <span className="fw-semibold text-dark">4.9</span>
                                    <span className="text-muted text-mid">(2.15k Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                            <div className="d-flex flex-column gap-1">
                                <h6 className="text-dark lh-1 fw-semibold m-0">42,570</h6>
                                <span className="text-muted-2 m-0">Students</span>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <h6 className="text-dark lh-1 fw-semibold m-0">46+</h6>
                                <span className="text-muted-2 m-0">Courses</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-navigation">
                        <ul id="side-menu">
                            <li><Link to="/instructor-dashboard" className={current === '/instructor-dashboard' ? 'active' :''}><i className="bi bi-ui-radios-grid"></i>Dashboard</Link></li>
                            <li><Link to="/instructor-courses" className={current === '/instructor-courses' ? 'active' :''}><i className="bi bi-basket2"></i>Courses</Link></li>
                            <li><Link to="/instructor-create-course" className={current === '/instructor-create-course' ? 'active' :''}><i className="bi bi-patch-plus"></i>Create Course</Link></li>
                            <li><Link to="/instructor-earning" className={current === '/instructor-earning' ? 'active' :''}><i className="bi bi-coin"></i>Earning</Link></li>
                            <li><Link to="/instructor-students" className={current === '/instructor-students' ? 'active' :''}><i className="bi bi-people"></i>Students</Link></li>
                            <li><Link to="/instructor-orders" className={current === '/instructor-orders' ? 'active' :''}><i className="bi bi-bag-check"></i>My Orders</Link></li>
                            <li><Link to="/instructor-reviews" className={current === '/instructor-reviews' ? 'active' :''}><i className="bi bi-star-half"></i>Reviews</Link></li>
                            <li><Link to="/instructor-payout" className={current === '/instructor-payout' ? 'active' :''}><i className="bi bi-wallet2"></i>Payout</Link></li>
                            <li><Link to="#"><i className="bi bi-question-octagon"></i>Help & Support</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}
