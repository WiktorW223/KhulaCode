import NavDark from '../../components/navbar/nav-dark'
import Footer from '../../components/footer/footer'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import { getAccessToken } from '../../lib/tokenService'

interface FAqData {
    data: {
        title: string;
        desc: string;
        site: string;
    }[];
}

const faqOne: FAqData[] = [
    {
        data: [
            { title: 'Scratch', desc: 'Create games, animations, and interactive stories using drag-and-drop blocks.', site: 'https://scratch.mit.edu/' },
            { title: 'Kodable Typing', desc: 'A vacation-themed typing adventure that builds real keyboarding skills.', site: 'https://www.kodable.com/typing' },
        ],
    },
    {
        data: [
            { title: 'Code.org', desc: 'Guided coding lessons with Minecraft, Disney, and puzzle-style activities. Heavy focus on Artificial Intelligence.', site: 'https://code.org/en-US' },
            { title: 'Lightbot', desc: 'A puzzle game that teaches sequencing, loops, and conditionals without requiring much typing.', site: 'https://www.lightbot.lu/#/welcome' },
        ],
    },
]

const faqTwo: FAqData[] = [
    {
        data: [
            { title: 'Tynker', desc: 'A structured progression from block coding to Python and JavaScript, including game creation and Minecraft projects.', site: 'https://www.tynker.com/dashboard/student/?obd=1' },
            { title: 'Microsoft MakeCode Arcade', desc: 'Build retro-style games using blocks or text-based code. An intermediate version of Scratch.', site: 'https://arcade.makecode.com/#' },
        ],
    },
    {
        data: [
            { title: 'Code Combat', desc: 'Students play through an RPG adventure while writing actual Python or JavaScript code.', site: 'https://codecombat.com/play' },
            { title: 'Code.org App Lab', desc: 'Introduces app development with more advanced programming concepts while remaining beginner-friendly. Requires sign-up.', site: 'https://code.org/en-US/tools/app-lab' },
        ],
    },
]

const faqThree: FAqData[] = [
    {
        data: [
            { title: 'Python', desc: 'One of the best first text-based languages. Used in games, websites, AI, automation, and data science.', site: 'https://www.learnpython.org/en/Hello%2C_World%21' },
            { title: 'Codecademy', desc: 'Interactive courses in Python, JavaScript, web development, and more for learners ready for traditional programming.', site: 'https://www.codecademy.com/' },
        ],
    },
    {
        data: [
            { title: 'Godot', desc: 'A beginner-friendly professional game engine for creating 2D and 3D games with real code. Requires download.', site: 'https://godotengine.org/' },
        ],
    },
]

const resourceGrid = (groups: FAqData[]) => (
    <div className="row g-4">
        {groups.flatMap((g) => g.data).map((el, i) => (
            <div className="col-xxl-6 col-xl-6 col-lg-6" key={i}>
                <div className="single-group card border-0 shadow-sm rounded-3 p-4" style={{ height: '100%' }}>
                    <div className="d-flex align-items-start gap-3">
                        <span className="square--50 circle bg-light-main flex-shrink-0 fs-5"><i className="bi bi-journal-code text-main"></i></span>
                        <div>
                            <h5 className="mb-1">{el.title}</h5>
                            <p className="text-muted mb-3">{el.desc}</p>
                            <a href={el.site} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light-main rounded-pill px-3">Visit site<i className="bi bi-box-arrow-up-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

export default function Faq() {
  const access = getAccessToken()
  return (
    <>
        {access ? <StudentNavbar /> : <NavDark />}

        <section className="page-title" style={{ background: 'linear-gradient(135deg, var(--maincolor) 0%, var(--navcolor) 100%)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-white">Additional Coding Resources</h1>
                            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)' }}>Hand-picked sites and tools to keep exploring code beyond Lwazi's lessons.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row align-items-center justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-12">
                        <ul className="nav nav-tabs simple smalls scroll-tab align-items-center justify-content-center border-0 mb-4" id="courseTab" role="tablist">
                            <li className="nav-item ms-0" role="presentation">
                                <a className="nav-link active" id="pills-general-tab" data-bs-toggle="pill" href="#pills-general" role="tab" aria-controls="pills-general" aria-selected="true">Beginner</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-payment-tab" data-bs-toggle="pill" href="#pills-payment" role="tab" aria-controls="pills-payment" aria-selected="false" tabIndex={-1}>Intermediate</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-instructor-tab" data-bs-toggle="pill" href="#pills-instructor" role="tab" aria-controls="pills-instructor" aria-selected="false" tabIndex={-1}>Advanced</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-12">
                        <div className="tab-content" id="courseTabContent">
                            <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab" tabIndex={0}>
                                {resourceGrid(faqOne)}
                            </div>
                            <div className="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab" tabIndex={0}>
                                {resourceGrid(faqTwo)}
                            </div>
                            <div className="tab-pane fade" id="pills-instructor" role="tabpanel" aria-labelledby="pills-instructor-tab" tabIndex={0}>
                                {resourceGrid(faqThree)}
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
