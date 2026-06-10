
export default function FilterModal() {
  return (
    <>
            <div className="offcanvas offcanvas-start offcanvas-collapse" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
				<div className="offcanvas-header border-bottom">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body p-4">
					
					<div className="d-flex flex-column gap-2">
			
						<div className="single-side-box card border shadow-sm rounded-3 p-3">
							<div className="d-flex flex-column gap-3">
								<div className="single-form-group">
									<div className="position-relative">
										<input type="text" className="form-control ps-5" placeholder="Search courses or tutor"/>
										<span className="position-absolute top-50 start-0 translate-middle ms-4 opacity-50"><i className="bi bi-search fs-5"></i></span>
									</div>
								</div>
								<div className="single-form-group">
									<div className="position-relative">
										<select id="c-category" className="form-control form-select">
											<option value="1">Web Designing</option>
											<option value="2">Business</option>
											<option value="3">Accounting</option>
											<option value="4">Development</option>
											<option value="5">Art & Culture</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						
						<div className="single-side-box card border shadow-sm rounded-3 p-3">
							<h6 className="fw-medium">Courses Topic</h6>
							<ul className="list-unstyled mb-1 d-flex flex-column gap-2 mt-3">
							
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="React" className="form-check-input" name="React" type="checkbox"/>
										<label htmlFor="React" className="form-check-label text-muted-2">React</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="java" className="form-check-input" name="java" type="checkbox"/>
										<label htmlFor="java" className="form-check-label text-muted-2">Java Script</label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="laravel" className="form-check-input" name="laravel" type="checkbox"/>
										<label htmlFor="laravel" className="form-check-label text-muted-2">Laravel</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="angular" className="form-check-input" name="angular" type="checkbox"/>
										<label htmlFor="angular" className="form-check-label text-muted-2">Angular</label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="html" className="form-check-input" name="html" type="checkbox"/>
										<label htmlFor="html" className="form-check-label text-muted-2">HTML5</label>
									</div>
								</li>
								
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="css" className="form-check-input" name="css" type="checkbox"/>
										<label htmlFor="css" className="form-check-label text-muted-2">CSS3</label>
									</div>
								</li>
								
							</ul>
						</div>
						
						<div className="single-side-box card border shadow-sm rounded-3 p-3">
							<h6 className="fw-medium">Top Instructors</h6>
							<ul className="list-unstyled mb-1 d-flex flex-column gap-2 mt-3">
							
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="keny" className="form-check-input" name="keny" type="checkbox"/>
										<label htmlFor="keny" className="form-check-label text-muted-2">Keny White</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="hinata" className="form-check-input" name="hinata" type="checkbox"/>
										<label htmlFor="hinata" className="form-check-label text-muted-2">Hinata Hyuga</label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="hussy" className="form-check-input" name="hussy" type="checkbox"/>
										<label htmlFor="hussy" className="form-check-label text-muted-2">Mike hussy</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="riky" className="form-check-input" name="riky" type="checkbox"/>
										<label htmlFor="riky" className="form-check-label text-muted-2">Adam Riky</label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="daniel" className="form-check-input" name="daniel" type="checkbox"/>
										<label htmlFor="daniel" className="form-check-label text-muted-2">Daniel Duck</label>
									</div>
								</li>
								
							</ul>
						</div>
						
						<div className="single-side-box card border shadow-sm rounded-3 p-3">
							<h6 className="fw-medium">Price</h6>
							<ul className="list-unstyled mb-1 d-flex flex-column gap-2 mt-3">
							
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="all" className="form-check-input" name="all" type="checkbox"/>
										<label htmlFor="all" className="form-check-label text-muted-2">All</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="free" className="form-check-input" name="free" type="checkbox"/>
										<label htmlFor="free" className="form-check-label text-muted-2">Free</label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="premium" className="form-check-input" name="premium" type="checkbox"/>
										<label htmlFor="premium" className="form-check-label text-muted-2">Premium</label>
									</div>
								</li>
								
							</ul>
						</div>
						
						<div className="single-side-box card border shadow-sm rounded-3 p-3">
							<h6 className="fw-medium">Rating</h6>
							<ul className="list-unstyled mb-1 d-flex flex-column gap-2 mt-3">
							
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="rate-5" className="form-check-input" name="rate-5" type="checkbox"/>
										<label htmlFor="rate-5" className="form-check-label text-muted-2">
											<div className="d-flex flex-row align-items-center gap-2">
												<span className="text-mid d-inline-flex align-items-start text-warning gap-1">
												  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
												</span>
												5.0
												<span className="text-muted">(1,785)</span>
										  </div>
										</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="rate-4" className="form-check-input" name="rate-4" type="checkbox"/>
										<label htmlFor="rate-4" className="form-check-label text-muted-2">
											<div className="d-flex flex-row align-items-center gap-2">
												<span className="text-mid d-inline-flex align-items-start text-warning gap-1">
												  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
												</span>
												4.0 &amp; up
												<span className="text-muted">(3,650)</span>
										  </div>
										</label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="rate-3" className="form-check-input" name="rate-3" type="checkbox"/>
										<label htmlFor="rate-3" className="form-check-label text-muted-2">
											<div className="d-flex flex-row align-items-center gap-2">
												<span className="text-mid d-inline-flex align-items-start text-warning gap-1">
												  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
												</span>
												3.0 &amp; up
												<span className="text-muted">(2,784)</span>
										  </div>
										</label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="rate-2" className="form-check-input" name="rate-2" type="checkbox"/>
										<label htmlFor="rate-2" className="form-check-label text-muted-2">
											<div className="d-flex flex-row align-items-center gap-2">
												<span className="text-mid d-inline-flex align-items-start text-warning gap-1">
												  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
												</span>
												2.5 &amp; up
												<span className="text-muted">(875)</span>
										  </div>
										</label>
									</div>
								</li>
								
							</ul>
						</div>
						
						<div className="single-side-box card border shadow-sm rounded-3 p-3">
							<h6 className="fw-medium">Lecture Duration</h6>
							<ul className="list-unstyled mb-1 d-flex flex-column gap-2 mt-3">
							
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="video-1" className="form-check-input" name="video-1" type="checkbox"/>
										<label htmlFor="video-1" className="form-check-label text-muted-2">0 - 1 Hour<span className="text-muted ms-2">(13)</span></label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="video-2" className="form-check-input" name="video-2" type="checkbox"/>
										<label htmlFor="video-2" className="form-check-label text-muted-2">1 - 2 Hour<span className="text-muted ms-2">(26)</span></label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="video-3" className="form-check-input" name="video-3" type="checkbox"/>
										<label htmlFor="video-3" className="form-check-label text-muted-2">2 - 3 Hour<span className="text-muted ms-2">(65)</span></label>
									</div>
								</li>
								
								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="video-4" className="form-check-input" name="video-4" type="checkbox"/>
										<label htmlFor="video-4" className="form-check-label text-muted-2">3 - 4 Hour<span className="text-muted ms-2">(35)</span></label>
									</div>
								</li>

								<li className="d-flex flex-row gap-2">
									<div className="form-check">
										<input id="video-5" className="form-check-input" name="video-5" type="checkbox"/>
										<label htmlFor="video-5" className="form-check-label text-muted-2">4 - 5 Hour<span className="text-muted ms-2">(17)</span></label>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>   
    </>
  )
}
