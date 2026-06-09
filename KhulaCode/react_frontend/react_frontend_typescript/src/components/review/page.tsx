import { reviewData } from '../../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
    nav: false,
    controls:false,
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
    },
};
interface ReviewData{
    image: string;
    rating: string[];
    title: string;
    desc: string;
    name: string;
    date: string;
}

export default function Review() {
  return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-lg-12">	
                <div className="arrow_slide reviews-slide arrow_middle">
                    <TinySlider settings={settings}>
                        {reviewData.map((item:ReviewData,index:number)=>{
                            return(
                                <div className="singles_items" key={index}>
                                    <div className="card-hover p-4 rounded-3 card card-body m-0">
                                        <div className="rating-star">
                                            <div className="d-flex align-items-center gap-1 mb-2">
                                                {item.rating.map((rate,index)=>(
                                                    <span className="text-warning" key={index}><i className={rate}></i></span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="review-caption d-block mb-4">
                                            <h5 className="text-dark fw-semibold mb-0 lh-base">{item.title}</h5>
                                            <p className="text-muted-2">{item.desc}</p>
                                        </div>
                                        <div className="d-flex bg-light align-items-center justify-content-between rounded-3 p-3">
                                            <div className="revierwer-avatar d-flex align-items-center gap-2">
                                                <div className="avatar-box"><img src={item.image} className="img-fluid square--50 circle" alt="Avatar Image"/></div>
                                                <div className="reviewer-caps">
                                                    <h6 className="fw-semibold text-dark m-0">{item.name}</h6>
                                                    <p className="text-muted-2 m-0 text-mid">{item.date}</p>
                                                </div>
                                            </div>
                                            <div className="reviewer-post"><span className="badge bg-green rounded-pill">Student</span></div>
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
