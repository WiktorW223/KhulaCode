import { categoryOne } from '../../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
    nav: true,
    mouseDrag: true,
    loop: true,
    autoplay: true,
    rewind: true,
    autoplayButtonOutput: false,
    speed: 400,
    autoplayTimeout: 3000,
    controls:false,
    navPosition: "bottom",
    controlsText:['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 5 },
    },
    
};

interface CategoryData{
    icon: string;
    title: string;
    count: number;
}

export default function CategorySlider() {
  return (
<div className="row">
    <div className="col-xl-12 col-lg-12 col-lg-12">	
        <div className="arrow_slide categories-slide arrow_middle">
            <TinySlider settings={settings}>
                {categoryOne.map((item:CategoryData,index:number)=>{
                    return(
                        <div className="singles_items mt-2" key={index}>
                            <div className="card-hover style-2 p-4 rounded-3 card card-body d-flex flex-column gap-3 m-0">
                                <div className="icon-wraps">
                                    <span className="icon-slap fs-1"><i className={item.icon}></i></span>
                                </div>
                                <div>
                                    <h4 className="text-dark fw-normal mb-0 lh-base">{item.title}</h4>
                                    <span className="text-muted-2">
                                        <span className="fw-semibold me-1">{item.count}</span>Courses
                                    </span>
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
