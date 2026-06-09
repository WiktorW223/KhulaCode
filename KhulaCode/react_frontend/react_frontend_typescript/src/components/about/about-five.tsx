import about1 from '../../assets/img/custom-img-1.png'
import { Link } from 'react-router-dom'

interface Data{
    title: string;
    desc: string;
}

const data:Data[] = [
    {
        title:'Wide Range of Courses',
        desc:'Choose from thousands of subjects and skills.'
    },
    {
        title:'Cost-Effective',
        desc:'Often more affordable than traditional classroom learning.'
    },
    {
        title:'Global Networking',
        desc:'Connect with learners and instructors from around the world.'
    },
]

export default function AboutFive() {
  return (
    <div className="row align-items-center justify-content-center gx-xl-5 gx-lg-5 g-4">
        <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="history-Wraping">
                <div className="d-block mb-4">
                    <h2 className="display-5 fw-normal">Explore Our History & <br/>Core Value</h2>
                    <p className="text-muted-2">You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs.</p>
                </div>
                
                <div className="benifit-wraps mb-4">
                    <div className="d-flex flex-column gap-4">
                        {data.map((item:Data, index:number)=>(
                            <div className="d-flex align-items-center justify-content-start gap-3" key={index}>
                                <div className="icons"><span className="square--50 circle bg-light-green fs-5"><i className="bi bi-patch-check-fill text-green"></i></span></div>
                                <div className="caps">
                                    <h5>{item.title}</h5>
                                    <p className="text-muted-2 m-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="#" className="btn btn-dark rounded-pill px-5">Get Membership</Link>
            </div>
        </div>
        
        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 order-lg-2">
            <div className="facts-img">
                <img src={about1} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}
