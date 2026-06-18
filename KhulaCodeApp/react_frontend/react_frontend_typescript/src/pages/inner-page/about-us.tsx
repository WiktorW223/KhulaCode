import NavDark from '../../components/navbar/nav-dark'
import Footer from '../../components/footer/footer'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import { getAccessToken } from '../../lib/tokenService'

export default function AboutUs() {
  const access = getAccessToken()
  return (
    <>
        {access ? <StudentNavbar /> : <NavDark />}

        <section className="page-title" style={{ background: 'linear-gradient(135deg, var(--maincolor) 0%, var(--navcolor) 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-white">About KhulaCode</h1>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>Sparking a love of coding in young minds — in their own language.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 col-md-12">
                        <span className="badge bg-light-main text-main rounded-pill mb-3">Our mission</span>
                        <h2 className="mb-3">Making the basics of coding accessible to every child</h2>
                        <p className="fs-5 text-muted mb-0">KhulaCode teaches children the fundamentals of computer science — sequencing, decisions, loops, variables and more — through short animated lessons set in a Cyber Jungle, all in isiXhosa.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 text-center">
                        <img src="https://flagcdn.com/za.svg" alt="Flag of South Africa" className="img-fluid rounded-4 shadow border" style={{ maxHeight: 280 }} />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-light border-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-12 text-center">
                        <div className="sec-heading center mb-4">
                            <h2>Why we exist</h2>
                        </div>
                        <p className="fs-5 text-muted mb-0">Computer science and coding aren't accessible to many students around the world — especially in South Africa. KhulaCode was created to change that. By letting children learn the basics in their mother tongue, isiXhosa, they retain more, build confidence, and spark a genuine interest in programming.</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="card border-0 shadow-sm rounded-4 text-center">
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                                    <span className="square--40 circle bg-green text-white"><i className="bi bi-person-fill"></i></span>
                                    <h5 className="mb-0 fw-bold">Wiktor Waligora</h5>
                                </div>
                                <p className="text-muted small mb-3">Creator of KhulaCode · with thanks to <span className="fw-semibold text-dark">MaLisa Ndimba</span></p>
                                <a href="mailto:khulacode@email.com" className="fw-semibold" style={{ color: 'var(--maincolor)' }}><i className="bi bi-envelope me-2"></i>khulacode@email.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}
