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

export default function TeamOne() {
  return (
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="four_slide articles arrow_middle">
                <TinySlider settings={settings}>
                    {instructorsData.map((item:Instructor,index:number)=>( 
                        <div className="singles_items" key={index}>
                            <div className="team-card card rounded-4 px-4 py-5">
                                <div className="team-thumb text-center mb-3">
                                    <div className="thumb-lg mx-auto circle"><img src={item.image} className="img-fluid circle" alt="Team Image"/></div>
                                </div>
                                <div className="team-caption text-center mb-4">
                                    <h5 className="m-0">{item.name}</h5>
                                    <p className="text-muted-2 m-0">Team Manager</p>
                                </div>
                                
                                <div className="social-info">
                                    <ul className="d-flex align-items-center justify-content-center gap-2 flex-wrap p-0">
                                        <li><Link to="#" className="square--40 circle btn-gray"><i className="bi bi-facebook"></i></Link></li>
                                        <li><Link to="#" className="square--40 circle btn-gray"><i className="bi bi-twitter"></i></Link></li>
                                        <li><Link to="#" className="square--40 circle btn-gray"><i className="bi bi-linkedin"></i></Link></li>
                                        <li><Link to="#" className="square--40 circle btn-gray"><i className="bi bi-youtube"></i></Link></li>
                                    </ul>
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
