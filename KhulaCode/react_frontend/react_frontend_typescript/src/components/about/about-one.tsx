import aboutImg from '../../assets/img/hero-img-5.png'
import { Link } from 'react-router-dom'

export default function AboutOne() {
    const data:string[] = ["Wide Range of Courses","Cost-Effective","Global Networking","Get Certificate"]
  return (
    <div className="row g-4 align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="benifit-oflearning">
                <div className="d-block mb-4">
                    <h2>Why Choose LearnUp Online Platform for Grow My Career</h2>
                    <p className="text-muted">We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.</p>
                    <p className="text-muted">You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs.</p>
                </div>
                
                <div className="benifit-wraps mb-4">
                    <ul className="p-0 m-0 row g-4">
                        {data.map((item:string,index:number)=>(
                            <li className="col-sm-6 fs-5" key={index}>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="icons"><i className="bi bi-patch-check-fill text-green"></i></span><span className="fs-6">{item}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="#" className="btn btn-main rounded-pill px-5">Create an Account</Link>
            </div>
            
        </div>
        
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="facts-img">
                <img src={aboutImg} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}
