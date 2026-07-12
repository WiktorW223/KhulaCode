import { Link } from 'react-router-dom'
import { getAccessToken } from '../../lib/tokenService'
import ReactPlayer from 'react-player'
import tricone from '../../assets/img/tricone-slide.png'
import lwaziHero from '../../assets/img/lwaziJungle.png'
import lwaziPortrait from '../../assets/img/lwaziwhitebackground.png'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import NavDark from '../../components/navbar/nav-dark'
import FooterDark from '../../components/footer/footer-dark'
import SectionWave from '../../components/section-wave'
import demoVid from '../../assets/videos/demo.mp4'
import { useState } from 'react'

const journey = [
  { unit: 'Unit 0', title: 'Intro to Computers', desc: 'Get comfortable with computers. Xhosa voiceover, no coding yet.', icon: 'bi-pc-display', intro: true },
  { unit: 'Unit 1', title: 'Sequencing Sector', desc: 'Putting steps in the right order.', icon: 'bi-list-ol' },
  { unit: 'Unit 2', title: 'Decision Divide', desc: 'Making choices with if and else.', icon: 'bi-signpost-split' },
  { unit: 'Unit 3', title: 'Looping Lands', desc: 'Repeating steps with loops.', icon: 'bi-arrow-repeat' },
  { unit: 'Unit 4', title: 'Variable Valley', desc: 'Storing and using values.', icon: 'bi-box-seam' },
  { unit: 'Unit 5', title: 'Challenges Arena', desc: 'Put everything together in one final adventure.', icon: 'bi-trophy' },
]

const reasons = [
  { icon: 'bi-translate', title: 'Taught in Xhosa', desc: "Coding concepts in a child's home language — not just English." },
  { icon: 'bi-film', title: 'Story-driven videos', desc: 'Lwazi turns abstract ideas into an adventure kids want to follow.' },
  { icon: 'bi-check2-circle', title: 'Learn, then check', desc: 'Every video is followed by questions that lock the concept in.' },
  { icon: 'bi-emoji-smile', title: 'Built for beginners', desc: 'No jargon and no prior experience — just the basics, step by step.' },
]

export default function IndexSeven() {
  const access = getAccessToken()
  const bar = access ? <StudentNavbar /> : <NavDark />
  const startLink = access ? '/lesson/0/1' : '/register'
  const startLabel = access ? 'Continue learning' : 'Sign up to start learning'
  const [showDemoVid,setShowDemoVid] = useState(false)

  return (
    <>
        {bar}

        <div className="hero_banner home-3 position-relative py-5" style={{ minHeight: 'auto' }}>
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="hero-caption mb-2">
                            <div className="d-block mb-3">
                                <div className="d-inline-flex align-items-center justify-content-start bg-white rounded-pill py-1 px-2 pe-3 gap-2">
                                    <div className="new label bg-green rounded-pill">New</div>
                                    <div className="capstion">
                                    <span className="text-dark">Coding basics, made for kids</span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="big-header-capt text-dark mb-2">Funda ukubhala ikhowudi</h1>
                            <p className="fs-5 text-dark mb-0">KhulaCode teaches children the <strong>basics of coding</strong> in isiXhosa. Join Lwazi on an adventure through the Cyber Jungle's five coding biomes — starting with a friendly intro to computers, no experience needed.</p>
                        </div>

                        <div className="d-block mt-4">
                            <div className="d-flex align-items-center justify-content-start flex-wrap gap-3">
                                <div className="join-buttons">
                                    <Link to={startLink} className="btn btn-main rounded-pill px-4">
                                        <i className={`bi ${access ? 'bi-play-circle' : 'bi-person-plus'} me-2`}></i>{startLabel}
                                    </Link>
                                </div>
                                <div className="join-buttons d-flex align-items-center justify-content-start gap-2">
                                    <Link onClick = {()=>setShowDemoVid(true)} id="play-video" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="video-play-button" to=""><span></span></Link>
                                    <Link onClick = {()=>setShowDemoVid(true)} to="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="fw-semibold">How It Works?</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="hero-image text-center">
                            <img src={lwaziHero} alt="Lwazi, your coding guide" className="img-fluid rounded-4 shadow-lg" style={{ maxHeight: 460 }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute start-0 end-0 bottom-0"><img src={tricone} className="img-fluid"/></div>
        </div>

        <section className="py-4">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading mb-4">
                            <h2>Lwazi's Coding Journey</h2>
                            <p>Six areas, one adventure that teaches the basics of coding. Start with the fundamentals and code your way to the Challenges Arena.</p>
                        </div>
                    </div>
                </div>
                <div className="lwazi-roadmap">
                    {journey.map((stop) => (
                        <div className={`stop ${stop.intro ? 'intro' : ''}`} key={stop.unit}>
                            <div className="node"><i className={`bi ${stop.icon}`}></i></div>
                            <div className="text-muted small mb-1">{stop.unit}{stop.intro ? ' · Start here' : ''}</div>
                            <h5 className="mb-1">{stop.title}</h5>
                            <p className="text-muted mb-0">{stop.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <SectionWave top="var(--bodybg)" bottom="#ffffff" />

        <section className="bg-white py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center mb-4">
                            <h2>Why KhulaCode is different</h2>
                            <p>Most coding sites teach in English, with no story and no way to check understanding. We do the opposite.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 justify-content-center">
                    {reasons.map((reason) => (
                        <div className="col-lg-5 col-md-6" key={reason.title}>
                            <div className="d-flex align-items-start gap-3">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-4 flex-shrink-0 bg-green" style={{ width: 56, height: 56 }}>
                                    <i className={`bi ${reason.icon} fs-4 text-white`}></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">{reason.title}</h5>
                                    <p className="text-muted mb-0">{reason.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <SectionWave top="#ffffff" bottom="var(--bodybg)" />

        <section className="py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="sec-heading center mb-4">
                            <h2>How it works</h2>
                            <p>A simple loop that keeps young coders moving forward.</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-3 col-md-12 text-center">
                        <img src={lwaziPortrait} alt="Lwazi" className="img-fluid rounded-circle shadow-sm" style={{ maxWidth: 180, border: '4px solid var(--greencolor)', backgroundColor: '#fff' }} />
                        <p className="fw-semibold mt-3 mb-0">"Molo! I'm Lwazi — let's learn together."</p>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="flow-steps">
                            <div className="flow-step">
                                <div className="flow-num">1</div>
                                <h6 className="mb-2">Watch the video</h6>
                                <p className="small text-muted mb-0">Follow Lwazi's animated lesson (or the Xhosa-voiced intro in Unit 0).</p>
                            </div>
                            <div className="flow-step">
                                <div className="flow-num">2</div>
                                <h6 className="mb-2">Answer questions</h6>
                                <p className="small text-muted mb-0">Quick questions check that the concept really stuck.</p>
                            </div>
                            <div className="flow-step">
                                <div className="flow-num">3</div>
                                <h6 className="mb-2">Unlock the next world</h6>
                                <p className="small text-muted mb-0">Move on to the next sector and keep the adventure going.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SectionWave top="var(--bodybg)" bottom="var(--footerbg)" />

        <FooterDark/>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={()=>setShowDemoVid(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                    {showDemoVid&&<ReactPlayer
                    src={demoVid}
                    playing={true}
                    controls
                    width="100%"
                    height="450px"
                    />}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
