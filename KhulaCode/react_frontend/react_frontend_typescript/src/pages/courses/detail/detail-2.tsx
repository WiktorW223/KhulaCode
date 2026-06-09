import NavDark from '../../../components/navbar/nav-dark'
import bg from '../../../assets/img/detail-bg.jpg'
import ReviewForm from '../../../components/courses-detail/review-form'
import CoursesOverview from '../../../components/courses-detail/courses-overview'
import Circullum from '../../../components/courses-detail/circullum'
import DetailRating from '../../../components/courses-detail/detail-rating'
import CourseDetail from '../../../components/courses-detail/course-detail'
import CourseRating from '../../../components/courses-detail/course-rating'
import DetailSidebarTwo from '../../../components/courses-detail/detail-sidebar-two'
import FooterTop from '../../../components/footer/footer-top'
import FooterDark from '../../../components/footer/footer-dark'

export default function Detail2() {
  return (
    <>
        <NavDark/>

        <div className="image-cover ed_detail_head lg theme-ov" style={{backgroundColor:'#f4f4f4', backgroundImage:`url(${bg})`}} data-overlay="7">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-10">
                        <div className="ed_detail_wrap light">
                            <div className="course-type d-flex align-items-center gap-2 mb-1">
                                <span className="badge bg-green rounded-pill">Beginner</span>
                                <span className="badge bg-red rounded-pill"><i className="bi bi-tags me-1"></i>Pro</span>
                            </div>
                            <div className="ed_header_caption">
                                <h2 className="ed_title">Ruby on Rails Program</h2>
                                <ul>
                                    <li><i className="bi bi-calendar-check"></i>10 - 20 weeks</li>
                                    <li><i className="bi bi-camera-video"></i>102 Lectures</li>
                                    <li><i className="bi bi-people"></i>502 Student Enrolled</li>
                                </ul>
                            </div>
                            <div className="ed_header_short">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            
                            <div className="ed_rate_info">
                                <div className="d-flex align-items-center justify-content-start gap-2">
                                    <div className="star_info text-md d-flex align-items-center gap-1">
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                    </div>
                                    <div className="review_counter d-flex align-items-center gap-1">
                                        <strong className="high fw-bold text-light">4.9</strong><span className="text-mid text-light">(2.24k Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        	<section>
			    <div className="container">
					<div className="row">
					
						<div className="col-xl-8 col-lg-8 col-md-12 pe-xl-4">
                            <CoursesOverview border={true}/>

                            <Circullum border={true}/>

                            <DetailRating border={true}/>

                            <CourseDetail border={true}/>

                            <CourseRating border={true}/>

                            <ReviewForm border={true}/>
						</div>
						
						<div className="col-xl-4 col-lg-4 col-md-12">
							<DetailSidebarTwo />
						</div>
					</div>
				</div>
			</section>

            <FooterTop/>
            
            <FooterDark/>
    </>
  )
}
