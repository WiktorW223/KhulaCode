import StudentNavbar from '../../../components/student-dashboard/student-navbar'
import bg from '../../../assets/img/black.png'
import StudentAdminSidebar from '../../../components/student-dashboard/student-admin-sidebar'
import { Link } from 'react-router-dom'
import FooterDark from '../../../components/footer/footer-dark'
import Circullum from '../../../components/courses-detail/circullum'

export default function StudentCourseResume() {
  return (
    <>
        <StudentNavbar/>

        <section className="bg-cover p-0" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat'}} data-overlay="4">
            <div className="container-fluid px-0">
                <div className="ht-250"></div>
            </div>
        </section>   

        <section className="pt-4">
            <div className="container">
                                    
                <div className="row gx-xl-5">
                
                    <div className="col-lg-3">
                        <StudentAdminSidebar/>						
                    </div>	
                    
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Student Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Course Resume</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                        
                        <div className="row mb-4">
                            <Circullum border={true}/>
                            {/* <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex flex-column gap-3">
                                    <div className="accordion" id="accordionExample1">
                                        <div className="accordion-item">
                                            <a className="accordion-header h3 d-flex flex-row justify-content-between align-items-center collapsible-link position-relative py-3 px-4 collapsed" data-bs-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                                <div className="fw-semibold fs-5">Laravel Lessons (Web Design Focus)</div>
                                            </a>
                                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                                                <div className="accordion-body border-top d-flex flex-column gap-3">
                                                
                                                    <div className="accordion-html border rounded-2 py-3 ps-3">
                                                        <a className="fs-6 fw-normal collapsible-link position-relative collapsed" data-bs-toggle="collapse" href="#subtitleOne" role="button" aria-expanded="true" aria-controls="subtitleOne">
                                                        <div className="d-flex flex-row gap-3 align-items-center">
                                                            <span>
                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.74701 16C5.74701 21.6626 10.3374 26.253 16 26.253C21.6626 26.253 26.253 21.6626 26.253 16C26.253 10.3374 21.6626 5.74701 16 5.74701C10.3374 5.74701 5.74701 10.3374 5.74701 16Z" fill="#E2E8F0"></path>
                                                                <path d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77486 31.0752 6.92393 29.5513 4.68629 27.3137C2.44865 25.0761 0.924799 22.2251 0.307435 19.1214C-0.309928 16.0177 0.00692538 12.8007 1.21793 9.87706C2.42893 6.95345 4.47969 4.45459 7.11088 2.69649C9.74206 0.938384 12.8355 -3.77363e-08 16 0V5.74701C13.9721 5.74701 11.9898 6.34833 10.3037 7.47495C8.61765 8.60156 7.30349 10.2029 6.52747 12.0763C5.75144 13.9498 5.5484 16.0114 5.94401 18.0003C6.33963 19.9891 7.31613 21.8161 8.75004 23.25C10.1839 24.6839 12.0109 25.6604 13.9997 26.056C15.9886 26.4516 18.0502 26.2486 19.9237 25.4725C21.7971 24.6965 23.3984 23.3824 24.5251 21.6963C25.6517 20.0102 26.253 18.0279 26.253 16H32Z" fill="#38A169"></path>
                                                                </svg>
                                                            </span>
                                                            Blade Templates
                                                        </div>
                                                        </a>
                                                        <div id="subtitleOne" className="accordion-collapse collapse show">
                                                            <div className="accordion-body mt-2 px-2 pb-0">
                                                                <ul className="d-flex flex-column gap-3 mb-0 px-0">
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-green">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Intro to Blade</span>
                                                                            <a href="#" className="badge bg-dark text-white">Play again</a>
                                                                        </div>
                                                                        <span className="text-mid text-muted">10:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-green">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Create layout file</span>
                                                                            <a href="#" className="badge bg-dark text-white">Play again</a>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:10</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-green">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Add header and footer</span>
                                                                            <a href="#" className="badge bg-dark text-white">Play again</a>
                                                                        </div>
                                                                        <span className="text-mid text-muted">08:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Use @section and @yield</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:35</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="accordion-html border rounded-2 py-3 ps-3">
                                                        <a className="fs-6 fw-normal collapsible-link position-relative collapsed" data-bs-toggle="collapse" href="#subtitleTwo" role="button" aria-expanded="false" aria-controls="subtitleTwo">
                                                        <div className="d-flex flex-row gap-3 align-items-center">
                                                            <span>
                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.74701 16C5.74701 21.6626 10.3374 26.253 16 26.253C21.6626 26.253 26.253 21.6626 26.253 16C26.253 10.3374 21.6626 5.74701 16 5.74701C10.3374 5.74701 5.74701 10.3374 5.74701 16Z" fill="#E2E8F0"></path>
                                                                <path d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77486 31.0752 6.92393 29.5513 4.68629 27.3137C2.44865 25.0761 0.924799 22.2251 0.307435 19.1214C-0.309928 16.0177 0.00692538 12.8007 1.21793 9.87706C2.42893 6.95345 4.47969 4.45459 7.11088 2.69649C9.74206 0.938384 12.8355 -3.77363e-08 16 0V5.74701C13.9721 5.74701 11.9898 6.34833 10.3037 7.47495C8.61765 8.60156 7.30349 10.2029 6.52747 12.0763C5.75144 13.9498 5.5484 16.0114 5.94401 18.0003C6.33963 19.9891 7.31613 21.8161 8.75004 23.25C10.1839 24.6839 12.0109 25.6604 13.9997 26.056C15.9886 26.4516 18.0502 26.2486 19.9237 25.4725C21.7971 24.6965 23.3984 23.3824 24.5251 21.6963C25.6517 20.0102 26.253 18.0279 26.253 16H32Z" fill="#38A169"></path>
                                                                </svg>
                                                            </span>
                                                            Design with Bootstrap
                                                        </div>
                                                        </a>
                                                        <div id="subtitleTwo" className="accordion-collapse collapse">
                                                            <div className="accordion-body mt-2 px-2 pb-0">
                                                                <ul className="d-flex flex-column gap-3 mb-0 px-0">
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-green">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Intro to Blade</span>
                                                                            <a href="#" className="badge bg-dark text-white">Play again</a>
                                                                        </div>
                                                                        <span className="text-mid text-muted">10:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-green">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Create layout file</span>
                                                                            <a href="#" className="badge bg-dark text-white">Play again</a>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:10</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-green">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Add header and footer</span>
                                                                            <a href="#" className="badge bg-dark text-white">Play again</a>
                                                                        </div>
                                                                        <span className="text-mid text-muted">08:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <a href="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </a>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Use @section and @yield</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:35</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="accordion-html border rounded-2 py-3 ps-3">
                                                        <a className="fs-6 fw-normal collapsible-link position-relative collapsed" data-bs-toggle="collapse" href="#subtitleThree" role="button" aria-expanded="false" aria-controls="subtitleThree">
                                                        <div className="d-flex flex-row gap-3 align-items-center">
                                                            <span>
                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.74701 16C5.74701 21.6626 10.3374 26.253 16 26.253C21.6626 26.253 26.253 21.6626 26.253 16C26.253 10.3374 21.6626 5.74701 16 5.74701C10.3374 5.74701 5.74701 10.3374 5.74701 16Z" fill="#E2E8F0"></path>
                                                                </svg>
                                                            </span>
                                                            JSP Page Design
                                                        </div>
                                                        </a>
                                                        <div id="subtitleThree" className="accordion-collapse collapse">
                                                            <div className="accordion-body mt-2 px-2 pb-0">
                                                                <ul className="d-flex flex-column gap-3 mb-0 px-0">
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Intro to Blade</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">10:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Create layout file</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:10</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Add header and footer</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">08:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Use @section and @yield</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:35</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="accordion-html border rounded-2 py-3 ps-3">
                                                        <a className="fs-6 fw-normal collapsible-link position-relative collapsed" data-bs-toggle="collapse" href="#subtitleFour" role="button" aria-expanded="false" aria-controls="subtitleFour">
                                                        <div className="d-flex flex-row gap-3 align-items-center">
                                                            <span>
                                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM5.74701 16C5.74701 21.6626 10.3374 26.253 16 26.253C21.6626 26.253 26.253 21.6626 26.253 16C26.253 10.3374 21.6626 5.74701 16 5.74701C10.3374 5.74701 5.74701 10.3374 5.74701 16Z" fill="#E2E8F0"></path>
                                                                </svg>
                                                            </span>
                                                            Styling with Bootstrap
                                                        </div>
                                                        </a>
                                                        <div id="subtitleFour" className="accordion-collapse collapse">
                                                            <div className="accordion-body mt-2 px-2 pb-0">
                                                                <ul className="d-flex flex-column gap-3 mb-0 px-0">
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Intro to Blade</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">10:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Create layout file</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:10</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Add header and footer</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">08:20</span>
                                                                    </li>
                                                                    <li className="d-flex flex-row justify-content-between align-items-center">
                                                                        <div className="d-flex align-items-center flex-row gap-2">
                                                                            <Link to="#" className="square--30 circle btn-light-red">
                                                                                <i className="bi bi-play-fill fs-5"></i>
                                                                            </Link>
                                                                            <span className="d-inline-block text-truncate w-shrunk">Use @section and @yield</span>
                                                                        </div>
                                                                        <span className="text-mid text-muted">05:35</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>	 */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterDark/>
    </>
  )
}
