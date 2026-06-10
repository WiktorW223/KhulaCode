import bg from '../../assets/img/subscribe-bg.png'
export default function FooterTop() {
  return (
        <section className="bg-cover newsletter bg-main" style={{backgroundImage:`url(${bg})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="text-center">
                            <div className="subscribe-caption d-block mb-4">
                                <h2 className="text-light">Join Thousand of Happy Students!</h2>
                                <p className="text-light opacity-75">Subscribe our newsletter & get latest news and updation!</p>
                            </div>
                            <form className="subscribe-form">
                                <div className="form-group">
                                    <input type="email" className="form-control rounded-pill" placeholder="Your Email Address" required/>
                                    <input type="submit" className="btn btn-dark rounded-pill" value="Get Started"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
