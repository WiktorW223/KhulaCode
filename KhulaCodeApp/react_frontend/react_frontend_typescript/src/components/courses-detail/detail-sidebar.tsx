import image from '../../assets/img/avatar-3.jpg'
import { Link } from 'react-router-dom'

export default function DetailSidebar({border}:{border:boolean}) {
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
    <div style={{position:'sticky', top:'90px'}}>
        <div className={`ed_view_box style_2 ${border ? 'border' : ''}`}>
            <div className="ed_author">
                <div className="ed_author_thumb">
                    <img className="img-fluid circle" src={image} alt="7.jpg"/>
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
        
        <div className={`edu_wraper ${border ? 'border' : ''}`}>
            <h4 className="edu_title">Course Features</h4>
            <ul className="edu_list right">
                {data.map((item:Data,index:number)=>( 
                    <li key={index}><span className="info-title"><i className={item.icon}></i>{item.title}</span><span className="text-dark right">{item.desc}</span></li>
                ))}
            </ul>
        </div>
    </div>
  )
}
