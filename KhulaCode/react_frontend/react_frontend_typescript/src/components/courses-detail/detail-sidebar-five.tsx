import { Link } from 'react-router-dom'
import user from '../../assets/img/avatar-3.jpg'

export default function DetailSidebarFive() {
  return (
    <div className="card rounded-4 border shadow-0" style={{position:'sticky', top:'90px'}}>
        <div className="card-body">
        
            <div className="ed_view_price mb-4">
                <h2 className="theme-cl mb-0">$149.200</h2>
                <div className="offer-box"><span className="old-prc">$199.20</span><span className="offer-box">25% Off</span></div>
            </div>
            
            <div className="ed_view_link d-flex align-items-center justify-content-center flex-column gap-3 mb-4 p-0">
                <Link to="#" className="btn btn-outline-main rounded-pill w-100"><i className="bi bi-basket2 me-2"></i>Add To Cart</Link>
                <Link to="#" className="btn btn-main w-100 rounded-pill">Enrolled Now</Link>
            </div>
            
            <div className="ed-view-features full-list mb-4">
                <h6 className="fw-semibold">Course Features</h6>
                <ul>
                    <li><span className="bg-light-green text-green"><i className="bi bi-eye-fill"></i></span>14.4k Students Enrolled</li>
                    <li><span className="bg-warning bg-opacity-10 text-warning"><i className="bi bi-bar-chart"></i></span>Principiante</li>
                    <li><span className="bg-info bg-opacity-10 text-info"><i className="bi bi-clock-history"></i></span>12 hour 30 min</li>
                    <li><span className="bg-light-red text-red"><i className="bi bi-trophy"></i></span>Get Certified</li>
                    <li><span className="bg-success bg-opacity-10 text-success"><i className="bi bi-clock-history"></i></span>Lifetime Access</li>
                </ul>
            </div>
            
            <div className="mentor-card">
                
                <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="mentor-thumb">
                        <div className="square--80"><img src={user} className="img-fluid circle" alt="Mentor Avatar"/></div>
                    </div>
                    <div className="mentor-caps">
                        <div className="mentor-title d-flex align-items-center">
                            <h5 className="m-0">Adnil M. Marc</h5><span className="fs-6 text-green verified-mentor ms-1"><i className="bi bi-patch-check-fill"></i></span>
                        </div>
                        <div className="mentor-expert"><span className="text-mid text-muted">Full-Stack Developer, Designer</span></div>
                        <div className="d-flex align-items-center justify-content-start gap-2 mt-1">
                            <span className="rating-star text-warning"><i className="bi bi-star-fill"></i></span>
                            <span className="overall-rating text-dark fw-semibold">4.8</span>
                            <span className="total-rating text-mid">(12.3k Reviews)</span>
                        </div>
                    </div>
                </div>
                
                <div className="mentor-basic-info">
                    <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex flex-column gap-1">
                            <h6 className="text-dark lh-1 fw-semibold m-0">42,570</h6>
                            <span className="text-muted-2 m-0">Students</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <h6 className="text-dark lh-1 fw-semibold m-0">46+</h6>
                            <span className="text-muted-2 m-0">Courses</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <h6 className="text-dark lh-1 fw-semibold m-0">12,322</h6>
                            <span className="text-muted-2 m-0">Reviews</span>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between gap-3">
                        <div className="flex-fill view-button">
                            <Link to="#" className="btn btn-md btn-outline-main border-2 rounded-pill w-100">View Profile</Link>
                        </div>
                        <div className="flex-fill follow-button">
                            <Link to="#" className="btn btn-md btn-outline-dark border-2 rounded-pill w-100">Follow</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
