import { Link } from 'react-router-dom'
import user from '../../assets/img/avatar-3.jpg'

export default function CourseDetail({border}:{border:boolean}) {
  return (
        <div className={`single_instructor ${border ? 'border' : ''}`}>
            <div className="single_instructor_thumb">
                <Link to="#"><img src={user} className="img-fluid" alt=""/></Link>
            </div>
            <div className="single_instructor_caption">
                <h4><Link to="#">Adam K. Marck</Link></h4>
                <ul className="instructor_info">
                    <li><i className="bi bi-camera-reels"></i>72 Videos</li>
                    <li><i className="bi bi-collection-play"></i>102 Lectures</li>
                    <li><i className="bi bi-mortarboard"></i>15+ Year Exp.</li>
                </ul>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                <ul className="social_info">
                    <li><Link to="#"><i className="bi bi-facebook"></i></Link></li>
                    <li><Link to="#"><i className="bi bi-linkedin"></i></Link></li>
                    <li><Link to="#"><i className="bi bi-twitter"></i></Link></li>
                    <li><Link to="#"><i className="bi bi-behance"></i></Link></li>
                    <li><Link to="#"><i className="bi bi-youtube"></i></Link></li>
                </ul>
            </div>
        </div>
  )
}
