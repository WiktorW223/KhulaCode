import NavDark from '../../components/navbar/nav-dark'
import FooterDark from '../../components/footer/footer-dark'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import { getAccessToken } from '../../lib/tokenService'

export default function Privacy() {
  const access = getAccessToken()
  return (
    <>
        {access ? <StudentNavbar /> : <NavDark />}

        <section className="page-title" style={{ background: 'linear-gradient(135deg, var(--maincolor) 0%, var(--navcolor) 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-white">Privacy Policy</h1>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>Last updated: June 28 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <p className="fs-5 text-muted">KhulaCode is an educational platform that teaches children the basics of coding in isiXhosa. We care about the privacy of the children, parents, guardians, and teachers who use it. This policy explains what we collect, how we use it, and your choices.</p>

                        <h5 className="mt-5 mb-2">Who this is for</h5>
                        <p className="text-muted">KhulaCode is designed for children and is meant to be used with the involvement of a parent, guardian, or teacher. We encourage adults to review this policy and to help set up and supervise children's accounts.</p>

                        <h5 className="mt-5 mb-2">Information we collect</h5>
                        <p className="text-muted mb-2">We deliberately keep this to a minimum. When an account is created, we collect:</p>
                        <ul className="text-muted">
                            <li>First name and last name</li>
                            <li>A username and password (passwords are stored <strong>securely hashed</strong> — never in plain text)</li>
                        </ul>
                        <p className="text-muted mb-2">As a learner uses KhulaCode, we also record:</p>
                        <ul className="text-muted">
                            <li>Learning progress (which videos and activities are completed)</li>
                            <li>Experience points (XP) and rank</li>
                        </ul>

                        <h5 className="mt-5 mb-2">What we do not collect</h5>
                        <ul className="text-muted">
                            <li>We do <strong>not</strong> require or collect email addresses or phone numbers.</li>
                            <li>We do <strong>not</strong> collect payment information.</li>
                            <li>We do not knowingly collect any information beyond what's described above.</li>
                        </ul>

                        <h5 className="mt-5 mb-2">How we use information</h5>
                        <p className="text-muted mb-2">We use it only to:</p>
                        <ul className="text-muted">
                            <li>Create and secure accounts</li>
                            <li>Save and display each learner's progress, XP, and rank</li>
                            <li>Let teachers see the progress of students in their class</li>
                            <li>Improve KhulaCode's lessons and experience</li>
                        </ul>
                        <p className="text-muted">We do <strong>not</strong> sell or rent personal information, and we do <strong>not</strong> show third-party advertising to children.</p>

                        <h5 className="mt-5 mb-2">Who can see a learner's information</h5>
                        <ul className="text-muted">
                            <li>The learner themselves.</li>
                            <li>Their teacher — who can view student progress and may reset a student's password to help them regain access.</li>
                            <li>KhulaCode administrators, only as needed to operate the service.</li>
                        </ul>

                        <h5 className="mt-5 mb-2">Keeping information safe</h5>
                        <p className="text-muted">Passwords are stored hashed, and we take reasonable technical measures to protect account information. No system is perfectly secure, but we work to safeguard the data entrusted to us.</p>

                        <h5 className="mt-5 mb-2">Parental and guardian rights</h5>
                        <p className="text-muted">Parents, guardians, and teachers may ask to review, correct, or delete a child's account and data. To make a request, contact us below.</p>

                        <h5 className="mt-5 mb-2">Data retention</h5>
                        <p className="text-muted">We keep account and progress information while the account is active. When an account is deleted, its personal information is removed from our active systems.</p>

                        <h5 className="mt-5 mb-2">Changes to this policy</h5>
                        <p className="text-muted">We may update this policy from time to time and will post the new version here with an updated date.</p>

                        <h5 className="mt-5 mb-2">Contact</h5>
                        <p className="text-muted mb-0">Questions about this policy or a child's information? Contact us at <a href="mailto:khulacode0@gmail.com" className="fw-semibold" style={{ color: 'var(--maincolor)' }}>khulacode0@gmail.com</a>.</p>
                    </div>
                </div>
            </div>
        </section>

        <FooterDark />
    </>
  )
}
