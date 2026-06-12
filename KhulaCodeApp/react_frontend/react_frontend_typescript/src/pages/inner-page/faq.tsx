import NavDark from '../../components/navbar/nav-dark'
// import { faqFour, faqOne, faqThree, faqTwo } from '../../data/data'
import Footer from '../../components/footer/footer'
import FooterTop from '../../components/footer/footer-top'
import StudentNavbar from '../../components/student-dashboard/student-navbar'
import { getAccessToken } from '../../lib/tokenService'
interface FAqData{
     data: {
        title: string;
        desc: string;
        site:string;
    }[];
}

const faqOne = [
    {
        data : [
            {
                title:'Scratch',
                desc:'Create games, animations, and interactive stories using drag-and-drop blocks.',
                site:'https://scratch.mit.edu/'
            },
            {
                title:'Kodable Typing',
                desc:'A vacation-themed typing adventure that builds real keyboarding skills.',
                site:'https://www.kodable.com/typing'
            },
            // {
            //     title:'',
            //     desc:'A puzzle game that teaches sequencing, loops, and conditionals without requiring much typing.',
            //     site:'https://scratch.mit.edu/'
            // },
        ],
        
    },
    {
        data : [
            {
                title:'Code.org',
                desc:'Guided coding lessons with Minecraft, Disney, and puzzle-style activities. Heavy focus on Artificial Intelligence.',
                site: "https://code.org/en-US"
            },
            {
                title:'Lightbot',
                desc:'A puzzle game that teaches sequencing, loops, and conditionals without requiring much typing.',
                site:"https://www.lightbot.lu/#/welcome"
            },
            // {
            //     title:'Can I Get Certificate from a course?',
            //     desc:'Curabitur at libero nec velit facilisis blandit. Integer a elit diam. Morbi ac lacus vitae orci vulputate malesuada. Phasellus non sapien massa. Fusce efficitur, enim in lacinia sollicitudin, enim libero tempus justo, at cursus neque turpis vel nisi. Etiam facilisis lorem vel lectus posuere, sed ultrices neque euismod.'
            // },
        ],
    }
]

 const faqTwo = [
    {
        data : [
            {
                title:'Tynker',
                desc:'A structured progression from block coding to Python and JavaScript, including game creation and Minecraft projects. ',
                site:"https://www.tynker.com/dashboard/student/?obd=1"
            },
            {
                title:'Microsoft MakeCode Arcade',
                desc:'Build retro-style games using blocks or text-based code. An intermediate version of Scratch',
                site:"https://arcade.makecode.com/#"
            },
            // {
            //     title:'How do I upgrade or cancel my subscription?',
            //     desc:'Curabitur at libero nec velit facilisis blandit. Integer a elit diam. Morbi ac lacus vitae orci vulputate malesuada. Phasellus non sapien massa. Fusce efficitur, enim in lacinia sollicitudin, enim libero tempus justo, at cursus neque turpis vel nisi. Etiam facilisis lorem vel lectus posuere, sed ultrices neque euismod.'
            // },
        ],
        
    },
    {
        data : [
            {
                title:'Code Combat',
                desc:'Students play through an RPG adventure while writing actual Python or JavaScript code.',
                site:"https://codecombat.com/play"
            },
            {
                title:'Code.org App Lab',
                desc:'Introduces app development with more advanced programming concepts while remaining beginner-friendly. Requires Sign-Up.',
                site:'https://code.org/en-US/tools/app-lab'
            },
            // {
            //     title:'How can I access my billing history or invoice?',
            //     desc:'Curabitur at libero nec velit facilisis blandit. Integer a elit diam. Morbi ac lacus vitae orci vulputate malesuada. Phasellus non sapien massa. Fusce efficitur, enim in lacinia sollicitudin, enim libero tempus justo, at cursus neque turpis vel nisi. Etiam facilisis lorem vel lectus posuere, sed ultrices neque euismod.'
            // },
        ],
    }
]

 const faqThree = [
    {
        data : [
            {
                title:'Python',
                desc:'One of the best first text-based languages. Used in games, websites, AI, automation, and data science.',
                site:"https://www.learnpython.org/en/Hello%2C_World%21"
            },
            {
                title:'Codecademy',
                desc:'Interactive courses in Python, JavaScript, web development, and more for learners ready for traditional programming.',
                site:"https://www.codecademy.com/"
            },
            // {
            //     title:'Can I earn money by teaching on LearnUp?',
            //     desc:'Curabitur at libero nec velit facilisis blandit. Integer a elit diam. Morbi ac lacus vitae orci vulputate malesuada. Phasellus non sapien massa. Fusce efficitur, enim in lacinia sollicitudin, enim libero tempus justo, at cursus neque turpis vel nisi. Etiam facilisis lorem vel lectus posuere, sed ultrices neque euismod.'
            // },
        ],
        
    },
    {
        data : [
            {
                title:'Godot',
                desc:'A beginner-friendly professional game engine for creating 2D and 3D games with real code. Requires download.',
                site:"https://godotengine.org/"
            },
            // {
            //     title:'How do I communicate with enrolled students?',
            //     desc:'Curabitur at libero nec velit facilisis blandit. Integer a elit diam. Morbi ac lacus vitae orci vulputate malesuada. Phasellus non sapien massa. Fusce efficitur, enim in lacinia sollicitudin, enim libero tempus justo, at cursus neque turpis vel nisi. Etiam facilisis lorem vel lectus posuere, sed ultrices neque euismod.'
            // },
            // {
            //     title:`I'm having trouble logging in—what should I do?`,
            //     desc:'Curabitur at libero nec velit facilisis blandit. Integer a elit diam. Morbi ac lacus vitae orci vulputate malesuada. Phasellus non sapien massa. Fusce efficitur, enim in lacinia sollicitudin, enim libero tempus justo, at cursus neque turpis vel nisi. Etiam facilisis lorem vel lectus posuere, sed ultrices neque euismod.'
            // },
        ],
    }
]
export default function Faq() {
  const access = getAccessToken()
  return (
    <>
        {access?<StudentNavbar/>:<NavDark/>}

        <section className="bg-main page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="pageTitle-wrap text-center">
                            <h1 className="text-light">Additional Coding Resources</h1>
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
                                <a className="nav-link active" id="pills-general-tab" data-bs-toggle="pill" href="#pills-general" role="tab" aria-controls="pills-general" aria-selected="true">
                                    Beginner
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-payment-tab" data-bs-toggle="pill" href="#pills-payment" role="tab" aria-controls="pills-payment" aria-selected="false" tabIndex={-1}>Intermediate</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-instructor-tab" data-bs-toggle="pill" href="#pills-instructor" role="tab" aria-controls="pills-instructor" aria-selected="false" tabIndex={-1}>
                                    Advanced
                                </a>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-enrollment-tab" data-bs-toggle="pill" href="#pills-enrollment" role="tab" aria-controls="pills-enrollment" aria-selected="false" tabIndex={-1}>
                                    Enrollment
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-support-tab" data-bs-toggle="pill" href="#pills-support" role="tab" aria-controls="pills-support" aria-selected="false" tabIndex={-1}>Support</a>
                            </li> */}
                        </ul>	
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <div className="col-xl-12 col-lg-12 col-12">
                        
                        <div className="tab-content" id="courseTabContent">
                            
                            <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab" tabIndex={0}>
                                <div className="row g-4">
                                    {faqOne.map((item:FAqData,index:number)=>( 
                                        <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                                            <div className="faq-group d-flex flex-column gap-3">
                                                {item.data.map((el,index)=>( 
                                                    <div className="single-group" key={index}>
                                                        <h4>{el.title}</h4>
                                                        <p >{el.desc}</p>
                                                        <a style={{ color: "var(--maincolor)", fontWeight: "bold" }} href={el.site}> {el.title} Link</a>
                                                    </div>
                                                ))}      
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                          
                             <div className="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab" tabIndex={0}>
                                <div className="row g-4">
                                    {faqTwo.map((item:FAqData,index:number)=>( 
                                        <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                                            <div className="faq-group d-flex flex-column gap-3">
                                                {item.data.map((el,index)=>( 
                                                    <div className="single-group" key={index}>
                                                        <h4 >{el.title}</h4>
                                                        <p >{el.desc}</p>
                                                        <a style={{ color: "var(--maincolor)", fontWeight: "bold" }} href={el.site}> {el.title} Link</a>
                                                    </div>
                                                ))}      
                                            </div>
                                        </div>
                                    ))}						
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="pills-instructor" role="tabpanel" aria-labelledby="pills-instructor-tab" tabIndex={0}>
                                <div className="row g-4">
                                    {faqThree.map((item:FAqData,index:number)=>( 
                                        <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                                            <div className="faq-group d-flex flex-column gap-3">
                                                {item.data.map((el,index)=>( 
                                                    <div className="single-group" key={index}>
                                                        <h4 >{el.title}</h4>
                                                        <p >{el.desc}</p>
                                                        <a style={{ color: "var(--maincolor)", fontWeight: "bold" }} href={el.site}> {el.title} Link</a>
                                                    </div>
                                                ))}      
                                            </div>
                                        </div>
                                    ))}							
                                </div>
                            </div>
                            
                      

                    
                            {/* <div className="tab-pane fade" id="pills-enrollment" role="tabpanel" aria-labelledby="pills-enrollment-tab" tabIndex={0}>
                                <div className="row g-4">
                                    {faqOne.map((item:FAqData,index:number)=>( 
                                        <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                                            <div className="faq-group d-flex flex-column gap-3">
                                                {item.data.map((el,index)=>( 
                                                    <div className="single-group" key={index}>
                                                        <h4 className="text-dark">{el.title}</h4>
                                                        <p className="text-muted">{el.desc}</p>
                                                    </div>
                                                ))}      
                                            </div>
                                        </div>
                                    ))}					
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="pills-support" role="tabpanel" aria-labelledby="pills-support-tab" tabIndex={0}>
                                <div className="row g-4">
                                    {faqFour.map((item:FAqData,index:number)=>( 
                                        <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                                            <div className="faq-group d-flex flex-column gap-3">
                                                {item.data.map((el,index)=>( 
                                                    <div className="single-group" key={index}>
                                                        <h4 className="text-dark">{el.title}</h4>
                                                        <p className="text-muted">{el.desc}</p>
                                                    </div>
                                                ))}      
                                            </div>
                                        </div>
                                    ))}							
                                </div>
                            </div> */}
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
