import logo from '../../assets/img/logo.svg'
import { footerCat, footerHelp, footerLink1 } from '../../data/data'
import { Link } from 'react-router-dom'

interface FooterLink{
	name: string;
    link: string;
}

export default function Footer() {
  return (
            <footer className="light-footer">
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-3">
								<div className="footer-widget">
									<img src={logo} className="img-footer" alt="" />
									<div className="footer-add">
										<address className="mb-4 lh-base">4967  Sardis Sta, Victoria 8007, Montreal<br/>United State</address>
										<div className="d-flex align-items-center call-now gap-2 mb-3">
											<div className="square--30 circle bg-light-main text-main"><i className="bi bi-telephone"></i></div>
											<div className="fs-6 fw-semibold">+1 246-345-0695</div>
										</div>
										<div className="d-flex align-items-center call-now gap-2">
											<div className="square--30 circle bg-light-main text-main"><i className="bi bi-envelope"></i></div>
											<div className="fs-6 fw-semibold">support@learnup.com</div>
										</div>
									</div>
								</div>
							</div>		
							<div className="col-lg-2 col-md-3">
								<div className="footer-widget">
									<h4 className="widget-title">Navigations</h4>
									<ul className="footer-menu">
                                        {footerLink1.map((item:FooterLink,index:number)=>(
										    <li key={index}><Link to={item.link}>{item.name}</Link></li>
                                        ))}
									</ul>
								</div>
							</div>
									
							<div className="col-lg-2 col-md-3">
								<div className="footer-widget">
									<h4 className="widget-title">New Categories</h4>
									<ul className="footer-menu">
                                        {footerCat.map((item:string,index:number)=>( 
										    <li key={index}><Link to="#">{item}</Link></li>
                                        ))}
									</ul>
								</div>
							</div>
							
							<div className="col-lg-2 col-md-3">
								<div className="footer-widget">
									<h4 className="widget-title">Help & Support</h4>
									<ul className="footer-menu">
                                        {footerHelp.map((item:string,index:number)=>( 
										    <li key={index}><Link to="#">{item}</Link></li>
                                        ))}
									</ul>
								</div>
							</div>
							
							<div className="col-lg-3 col-md-12">
								<div className="footer-widget">
									<h4 className="widget-title">Download Apps</h4>
									<Link to="#" className="other-store-link">
										<div className="other-store-app">
											<div className="os-app-icon"><i className="bi bi-google-play"></i></div>
											<div className="os-app-caps">Google Play<span>Get It Now</span></div>
										</div>
									</Link>
									<Link to="#" className="other-store-link">
										<div className="other-store-app">
											<div className="os-app-icon"><i className="bi bi-apple"></i></div>
											<div className="os-app-caps">App Store<span>Now it Available</span></div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row align-items-center g-3">
							
							<div className="col-lg-6 col-md-6">
								<p className="mb-0">© {new Date().getFullYear()} LearnUp. Designd & Develop with <i className="bi bi-heart-fill text-danger"></i> by <Link to="https://shreethemes.in/"> Shreethemes</Link>.</p>
							</div>
							
							<div className="col-lg-6 col-md-6 text-md-end">
								<ul className="footer-bottom-social">
									<li><Link to="#"><i className="ti-facebook"></i></Link></li>
									<li><Link to="#"><i className="ti-twitter"></i></Link></li>
									<li><Link to="#"><i className="ti-instagram"></i></Link></li>
									<li><Link to="#"><i className="ti-linkedin"></i></Link></li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			</footer>
  )
}
