import user from '../../assets/img/avatar-3.jpg'
import { Link } from 'react-router-dom'

export default function DetailSidebarFour() {
  return (
    <>
        <div className="ed_view_box style_2 overlio" style={{position:'sticky', top:'90px'}}>
            <div className="ed_author">
                <div className="ed_author_thumb">
                    <img className="img-fluid circle" src={user} alt="7.jpg"/>
                </div>
                <div className="ed_author_box">
                    <h4>Adam K. Marck</h4>
                    <span>Full-Stack Developer from Las Vegas</span>
                </div>
            </div>
            
            <div className="author-body p-3">
                <div className="ed_view_price">
                    <span className="badge bg-light-red text-red rounded-pill">25% off</span>
                    <h2 className="lh-base">$179.45</h2>
                </div>
                <div className="ed_view_features mb-4">
                    <h6 className="fw-semibold">Course Features</h6>
                    <ul>
                        <li><i className="bi bi-check-circle-fill me-2 text-green"></i>Fully Programming</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-green"></i>Help Code to Code</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-green"></i>Free Trial 7 Days</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-green"></i>Unlimited Videos</li>
                        <li><i className="bi bi-check-circle-fill me-2 text-green"></i>24x7 Support</li>
                    </ul>
                </div>
                <div className="ed_view_link d-flex align-items-center justify-content-center flex-column gap-3 m-0 p-0">
                    <Link to="#" className="btn btn-outline-main rounded-pill w-100"><i className="bi bi-basket2 me-2"></i>Add To Cart</Link>
                    <Link to="#" className="btn btn-main w-100 rounded-pill">Enrolled Now</Link>
                </div>
            </div>
        </div>	
    </>
  )
}
