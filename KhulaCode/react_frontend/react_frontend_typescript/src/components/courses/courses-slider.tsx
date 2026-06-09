import { coursesData } from '../../data/data'
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

interface CoursesData{
    id: number;
    image: string;
    title: string;
    lectures: number;
    level: string;
    price: number;
    rating: number;
    review: string;
    autherImg: string;
    autherName: string;
    time: string;
}

export default function CoursesSlider() {
  return (
    <>
        <div className="row">
            <div className="col-xl-12 col-lg-12">	
                <div className="arrow_slide four_slide arrow_middle">
                    <TinySlider settings={settings}>
                        {coursesData.map((item:CoursesData,index:number)=>{
                            return(
                                <div className="singles_items" key={index}>
                                    <div className="education_block_grid border">
                                        <div className="education-thumb position-relative">
                                            <div className="save-course position-absolute top-0 end-0 me-3 mt-3">
                                                <Link to="#" className="bookmark-button"><i className="bi bi-suit-heart"></i></Link>
                                            </div>
                                            <Link to={`/course-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
                                        </div>
                                        
                                        <div className="education-body p-3">
                                            <div className="education-title">
                                                <h4 className="fs-6 fw-medium"><Link to={`/course-detail/${item.id}`}>{item.title}</Link></h4>
                                            </div>
                                            
                                            <div className="cources-info">
                                                <ul>
                                                    <li><i className="bi bi-camera-reels"></i>{item.lectures} Lectures</li>
                                                    <li><i className="bi bi-bar-chart"></i>{item.level}</li>
                                                    <li><i className="bi bi-coin"></i>${item.price}</li>
                                                    <li><i className="bi bi-star-fill text-warning"></i><span className="overall-rates text-dark fw-medium ms-1">{item.rating}</span><span className="total-reviews">({item.review})</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="education-footer p-3">
                                            <div className="education_block_author">
                                                <Link to="#" className="d-flex align-items-center justify-content-start gap-2">
                                                    <span className="square--30"><img src={item.autherImg} className="img-fluid circle" alt="Author"/></span>
                                                    <span className="text-dark fw-medium">{item.autherName}</span>
                                                </Link>
                                            </div>
                                            <div className="enrolled-link"><Link to="#" className="main-link fw-medium">Enrolled Now<i className="bi bi-arrow-right ms-2"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>   
    </>
  )
}
