import { Link } from 'react-router-dom'

import image from '../../assets/img/404.png'

import NavDark from '../../components/navbar/nav-dark'
import FooterTop from '../../components/footer/footer-top'
import Footer from '../../components/footer/footer'

export default function Error() {
  return (
    <>
		<div className="shadow-sm">
			<NavDark/>
		</div> 

		<section className="error-wrap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10">
						<div className="text-center">
							<img src={image} className="img-fluid" alt=""/>
							<p>The page you were looking for does not exist</p>
							<Link className="btn btn-main px-4" to="/">Back To Home</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
      {/* <FooterTop/> */}
      {/* <Footer/> */}
    </>
  )
}
