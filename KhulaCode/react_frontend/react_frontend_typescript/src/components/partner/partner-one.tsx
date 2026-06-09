import { partnerImg } from '../../data/data'

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
    controls:false,
    controlsText:['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 3 },
        1200: { items: 5 },
    },
};

export default function PartnerOne() {
  return (
    <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12 col-12">
            <div className="single_brand" id="brand-slide">
                <TinySlider settings={settings}>
                    {partnerImg.map((item:string,index:number)=>( 
                        <div className="single_brands" key={index}>
                            <img src={item} className="img-fluid" alt="" />
                        </div>
                    ))}
                </TinySlider>
            </div>
        </div>
    </div>
  )
}
