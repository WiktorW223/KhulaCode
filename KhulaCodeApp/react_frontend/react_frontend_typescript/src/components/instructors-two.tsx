import { instructorsData } from '../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { Link } from 'react-router-dom';

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

export default function InstructorsTwo() {
  return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-lg-12">	
                <div className="arrow_slide four_slide arrow_middle">
                    <TinySlider settings={settings}>
                        {instructorsData.map((item:Instructor,index:number)=>{
                            return( 
                                <div className="singles_items" key={index}>
                                    <div className="card rounded-4 border">
                                        <div className="p-2 d-flex flex-column gap-3">
                                            <Link to="#!">
                                                <img src={item.image} alt="mentor 2" className="img-fluid w-100 rounded-4"/>
                                            </Link>
                                            <div className="d-flex flex-column gap-4">
                                                <div className="d-flex flex-column gap-2">
                                                    <div className="tutor-head-info">
                                                        <div className="d-flex align-items-center gap-2">
                                                            <h5 className="mb-0"><Link to={`/instructor-detail/${item.id}`} className="text-reset">{item.name}</Link></h5>
                                                            <span className="verified-tutor">
                                                                <i className="bi bi-patch-check-fill text-green"></i>
                                                            </span>
                                                        </div>
                                                        <span className="text-muted-2">{item.roal}</span>
                                                    </div>

                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="caps-employers text-mid text-muted"><span>@{item.company}</span></div>
                                                        <div className="cap-expe text-mid text-muted"><span>2yrs Exp.</span></div>
                                                        <div className="d-flex gap-1 align-items-center lh-1">
                                                            <i className="bi bi-star-fill text-warning"></i>
                                                            <span className="fw-bold text-dark">{item.rate}</span>
                                                            <span className="text-mid text-muted">({item.review} Reviews)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row justify-content-between align-items-center">
                                                    <div>
                                                        <span className="text-md">Starting from</span>
                                                        <div className="d-flex flex-row gap-1 align-items-center">
                                                            <h4 className="mb-1">$89.0</h4>
                                                            <span className="fs-6">/ Mo</span>
                                                        </div>
                                                    </div>
                                                    <div className="caps-button">
                                                        <Link to="#!" className="btn btn-sm btn-outline-dark px-3" data-bs-toggle="modal" data-bs-target="#signupModal">Book a Free Trial</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
  )
}
