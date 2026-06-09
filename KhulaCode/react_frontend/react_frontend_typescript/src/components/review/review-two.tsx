import { reviewData } from '../../data/data'

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
    item:1
};

interface ReviewData{
    image: string;
    rating: string[];
    title: string;
    desc: string;
    name: string;
    date: string;
}

export default function ReviewTwo() {
  return (
    <div className="row justify-content-center">
        <div className="col-xxl-7 col-xl-8 col-lg-10 col-lg-12">
            <div className="arrow_slide arrow_middle" id="testimonials_style">
                <TinySlider settings={settings}>
                    {reviewData.map((item:ReviewData,index:number)=>( 
                        <div className="single-item" key={index}>
                            <div className="single-reviews-wraps">
                                <div className="reviewer-thumb text-center mb-3">
                                    <div className="mx-auto square--90 circle position-relative mb-3">
                                        <img src={item.image} className="img-fluid circle" alt="Avatar"/>
                                        <span></span>
                                    </div>
                                    <div className="text-center">
                                        <h6 className="mb-0">{item.name}</h6>
                                        <p className="text-muted-2 m-0">Student</p>
                                    </div>
                                </div>
                                <div className="review-content text-center">
                                    <div className="rating-star d-flex align-items-center justify-content-center text-mid gap-1 mb-2">
                                        {item.rating.map((rate:string,index:number)=>( 
                                            <span className="text-warning" key={index}><i className={rate}></i></span>
                                        ))}
                                    </div>
                                    <div className="caption">
                                        <h5 className="text-dark">{item.title}</h5>
                                        <p className="fs-6 text-muted-2">{item.desc}</p>
                                    </div>
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
