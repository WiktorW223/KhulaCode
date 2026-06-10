import image from '../../assets/img/courses-4.jpg'
import { Link } from 'react-router-dom'

export default function DetailSidebarTwo() {
    const feature:string[] = [
        'Fully Programming','Help Code to Code','Free Trial 7 Days','Unlimited Videos','24x7 Support'
    ]

    const data:Data[] = [
        { icon:'bi bi-people', title:'Student Enrolled', desc:'1740' },
        { icon:'bi bi-camera-reels', title:'Lectures', desc:'10' },
        { icon:'bi bi-controller', title:'Quizzes', desc:'4' },
        { icon:'bi bi-clock-history', title:'Duration', desc:'60h 40min' },
        { icon:'bi bi-tags', title:'Skill Level', desc:'Beginner' },
        { icon:'bi bi-flag', title:'Language', desc:'English' },
        { icon:'bi bi-shield-check', title:'Certification', desc:'Yes' },
    ]

    interface Data{
        icon: string;
        title: string;
        desc: string;
    }
  return (
    <>
    <div style={{position:'sticky', top:'90px'}}>
        <div className={`ed_view_box border`}>
            <div className="courses-video">
                <div className="thumb">
                    <img className="pro_img img-fluid w100" src={image} alt="7.jpg"/>
                    <div className="overlay_icon">
                        <div className="bb-video-box">
                            <Link to="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="play-popup-video">
                                <i className="bi bi-play-fill"></i>
                            </Link>
                        </div>
                    </div>
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
                        {feature.map((item:string,index:number)=>( 
                            <li key={index}><i className="bi bi-check-circle-fill me-2 text-green"></i>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="ed_view_link d-flex align-items-center justify-content-center flex-column gap-3 m-0 p-0">
                    <Link to="#" className="btn btn-outline-main rounded-pill w-100"><i className="bi bi-basket2 me-2"></i>Add To Cart</Link>
                    <Link to="#" className="btn btn-main w-100 rounded-pill">Enrolled Now</Link>
                </div>
            </div>
            
        </div>	
        
        <div className={`edu_wraper border`}>
            <h4 className="edu_title">Course Features</h4>
            <ul className="edu_list right">
                {data.map((item:Data,index:number)=>( 
                    <li key={index}><span className="info-title"><i className={item.icon}></i>{item.title}</span><span className="text-dark right">{item.desc}</span></li>
                ))}
            </ul>
        </div>
    </div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                        <iframe src="https://www.youtube.com/embed/S_CGed6E610"  width='100%' height="450px" style={{marginBottom: 0, display: 'block'}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
