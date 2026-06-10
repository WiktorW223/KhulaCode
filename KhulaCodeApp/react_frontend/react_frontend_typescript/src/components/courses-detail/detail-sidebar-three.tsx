import user from '../../assets/img/avatar-3.jpg'
import { Link } from 'react-router-dom'

export default function DetailSidebarThree() {
  return (
    <div className="ed_view_box style_3" style={{position:'sticky', top:'90px'}}>
    
        <div className="sm">
            <div className="thumb">
                <img className="img-fluid ht-300 w-100 object-fit" src={user} alt="7.jpg"/>
            </div>
        </div>

        <div className="author-body px-4 py-3">
            <div className="ed_view_price p-0">
                <span className="badge bg-light-red text-red rounded-pill">25% off</span>
                <h2 className="lh-base">$179.45</h2>
            </div>
            <div className="ed-view-features half-list mb-4">
                <h6 className="fw-semibold">Course Features</h6>
                <ul>
                    <li><span><i className="bi bi-eye-fill"></i></span>3k Students View</li>
                    <li><span><i className="bi bi-clock-history"></i></span>2 hour 30 min</li>
                    <li><span><i className="bi bi-bar-chart"></i></span>Principiante</li>
                    <li><span><i className="bi bi-trophy"></i></span>04 Certified</li>
                </ul>
            </div>
            <div className="ed_view_link d-flex align-items-center justify-content-center flex-column gap-3 m-0 p-0">
                <Link to="#" className="btn btn-outline-main rounded-pill w-100"><i className="bi bi-basket2 me-2"></i>Add To Cart</Link>
                <Link to="#" className="btn btn-main w-100 rounded-pill">Enrolled Now</Link>
            </div>
        </div>
        
    </div>
  )
}
