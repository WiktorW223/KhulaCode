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

interface Courses{
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

export default function CoursesSliderTwo() {
  return (
    <>
        <div className="row">
            <div className="col-xl-12 col-lg-12">	
                <div className="arrow_slide four_slide arrow_middle">
                    <TinySlider settings={settings}>
                        {coursesData.map((item:Courses,index:number)=>{
                            return(
                                <div className="singles_items" key={index}>
                                    <div className="education_block_grid border">
                                        <div className="education-thumb position-relative">
											<div className="save-course position-absolute top-0 end-0 me-3 mt-3">
												<Link to="#" className="bookmark-button"><i className="bi bi-suit-heart"></i></Link>
											</div>
											<Link to={`/course-detail/${item.id}`}><img src={item.image} className="img-fluid" alt=""/></Link>
											<div className="course-hours position-absolute top-0 start-0 ms-3 mt-3">
												<span className="badge bg-dark rounded-pill"><i className="bi bi-clock-history me-1"></i>17h 30m</span>
											</div>
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
                                        
                                        <div className="education-footer border-0 p-3 pt-2">
											<Link to="#" className="btn btn-md btn-outline-gray border-2 rounded-pill w-100">Enrolled Now<i className="bi bi-arrow-right ms-2"></i></Link>
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
