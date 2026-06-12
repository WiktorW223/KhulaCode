import { Link } from 'react-router-dom'

const exploreLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'About Us', link: '/about-us' },
	{ name: 'Additional Resources', link: '/additional-resources' },
]

const supportLinks = [
	{ name: 'Sign up / Log in', link: '/register' },
	{ name: 'Contact', link: '/contact' },
	{ name: 'Privacy', link: '/privacy' },
]

export default function FooterDark() {
  return (
		<footer className="dark-footer pt-4">
			<div className="container">
				<div className="row g-4 pb-3">
					<div className="col-lg-5 col-md-12">
						<div className="footer-widget">
							<h4 className="widget-title mb-2">KhulaCode</h4>
							<p className="mb-0" style={{ maxWidth: 360 }}>Learn the basics of coding in Xhosa, guided by Lwazi — story-driven lessons that make computer science click for young minds.</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="footer-widget">
							<h4 className="widget-title">Explore</h4>
							<ul className="footer-menu">
								{exploreLinks.map((item, index) => (
									<li key={index}><Link to={item.link}>{item.name}</Link></li>
								))}
							</ul>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="footer-widget">
							<h4 className="widget-title">Account &amp; Support</h4>
							<ul className="footer-menu">
								{supportLinks.map((item, index) => (
									<li key={index}><Link to={item.link}>{item.name}</Link></li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom mt-2 py-2">
				<div className="container">
					<div className="row align-items-center g-2">
						<div className="col-lg-6 col-md-6">
							<p className="mb-0 small">© {new Date().getFullYear()} KhulaCode</p>
						</div>
						<div className="col-lg-6 col-md-6 text-md-end">
							<p className="mb-0 small">Made for young coders in South Africa 🌱</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}
