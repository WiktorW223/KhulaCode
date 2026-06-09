import about from '../assets/img/hero-img-2.png'
import { Link } from 'react-router-dom'

export default function LearningBenifit() {

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
  return (
    <div className="row align-items-center justify-content-center g-4 gx-lg-5">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="benifit-oflearning">
                <div className="d-block mb-4">
                    <h2>Benifit of online learning</h2>
                    <p>We’re developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.</p>
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
                <Link to="#" className="btn btn-main rounded-pill px-5">Create an Account</Link>
            </div>
        </div>
        
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="facts-img">
                <img src={about} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}
