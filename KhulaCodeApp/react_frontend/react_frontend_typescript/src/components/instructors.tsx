import { instructorsData } from '../data/data'
import { Link } from 'react-router-dom'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
    nav: false,
    mouseDrag: true,
    loop: true,
    autoplay: true,
    rewind: true,
    autoplayButtonOutput: false,
    speed: 400,
    autoplayTimeout: 3000,
    controlsText:['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
    },
};

interface Instructor{
    id: number;
    image: string;
    name: string;
    roal: string;
    company: string;
    skill: string[];
    rate: string;
    review: string;
}

export default function Instructors() {
  return (
    <div className="row">
        <div className="col-xl-12 col-lg-12 col-lg-12">	
            <div className="arrow_slide four_slide arrow_middle">
                <TinySlider settings={settings}>
                    {instructorsData.map((item:Instructor,index:number)=>(
                        <div className="singles_items" key={index}>
                            <div className="tutor-card card border rounded-3 px-3 py-4 pt-5">
                                <div className="position-absolute end-0 top-0 mt-3 me-3"><span className="badge bg-light-pro text-pro fw-semibold text-uppercase">Pro</span></div>								
                                <div className="tutor-thumb d-flex align-items-center justify-content-center mb-2">
                                    <div className="square--90"><img src={item.image} className="img-fluid circle" alt="Tutor"/></div>
                                </div>
                                
                                <div className="d-flex flex-column gap-1 mb-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h6 className="fw-semibold lh-0 m-0">{item.name}</h6>
                                    </div>
                                    <div className="d-block text-center"><span className="text-muted">{item.roal}</span></div>
                                    <div className="d-flex align-items-center justify-content-center gap-1">
                                        <span className="rating-star"><i className="bi bi-star-fill text-warning"></i></span>
                                        <span className="fw-semibold text-dark">{item.rate}</span>
                                        <span className="text-muted text-mid">({item.review}k Reviews)</span>
                                    </div>
                                </div>
                                
                                <div className="tutor-thumb d-flex align-items-center justify-content-center">
                                    <Link to={`/instructor-detail/${item.id}`} className="btn btn-md btn-gray rounded-pill w-100">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>
            </div>
        </div>
    </div>
  )
}
