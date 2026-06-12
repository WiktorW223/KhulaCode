import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BrandLogo from '../../assets/img/newlogo.png'
import { useApi } from '../../lib/useApi'
import { clearTokens, getAccessToken } from '../../lib/tokenService'


export default function StudentNavbar({refreshKey}:{refreshKey?:boolean}) {
    type recent={
        unit:number,
        order:number,
        number:number
    }
    type profile=
    {
        first_name:string,
        last_name:string,
        xp:Number,
        tag:string,
        img:string
    }
    const {makeRequest} = useApi()
    const access = getAccessToken()
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const [toggle, setToggle] = useState<boolean>(false)
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const location = useLocation();
    const [recentLesson,setRecentLesson] = useState<recent|null>(null)
    const [profileData,setProfileData] = useState<profile|null>(null)
    const [completedCourse,setCompletedCourse] = useState(false)
    const current = location.pathname
    

    
    const handleClick = ()=>
    {
    clearTokens()
    window.location.href="/"
    }
    
    useEffect(()=>{
        if(access)
        {makeRequest("get-info/0/")
            .then((res=>res.json()))
            .then((data)=>
            {
                setProfileData(data.profile_data)
                console.log(data)
            })
}
    },[])
    
    useEffect(()=>{
        const  getRecent = async()=>
       {
        if (access)   
        {const res = await makeRequest("get-last/")
           if(!res.ok)
           {
               console.log("error")
               return
           }
           const data = await res.json()
           if(data.message==="all lessons completed")
           {
            setCompletedCourse(true)
            return
           }
           console.log(data)
           setRecentLesson(data)
}
       }
       getRecent()
   }
   ,[refreshKey])
    
    
    useEffect(() => {
        window.scrollTo(0,0);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
         const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', handleScroll);

         return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <>
        <div className={`header header-light ${isSticky ? 'header-fixed' : ''}`}>
            <div className="container">
                <nav id="navigation" className={`${isMobile ? 'navigation navigation-portrait' : 'navigation navigation-landscape'}`}>
                    <div className="nav-header">
                    <Link className="nav-brand" to="/">
                            <img src={BrandLogo} className="brand-logo-img" alt="KhulaCode" />
                        </Link>
                        <div className="nav-toggle" onClick={()=>setToggle(!toggle)}></div>
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                    <div className="btn-group account-drop">
                                        <button type="button" className="btn btn-order-by-filt border-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={profileData?.img} className="avater-img" alt=""/>
                                        </button>
                                        <div className="dropdown-menu pull-right animated flipInX box-shadow-sm">
                                            <div className="dropdown-header py-3 border-bottom">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="avatar-flex">
                                                        <div className="square--50 circle"><img src={profileData?.img} className="img-fluid circle" alt=""/></div>
                                                    </div>
                                                    <div className="caps d-flex flex-column gap-1">
                                                        <h6 className="fw-semibold m-0">{profileData?.first_name} {profileData?.last_name}</h6>
                                                        <span className="text-mid text-muted-2">{profileData?.tag}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-body">
                                                <ul>
                                                    <li><Link to="/student-dashboard" className={current === '/student-dashboard' ? 'active' : ''}><i className="bi bi-ui-radios-grid me-2"></i>TESTTT</Link></li>
                                                    <li><Link to="/student-all-courses" className={current === '/student-all-courses' ? 'active' : ''}><i className="bi bi-play-circle me-2"></i>All Courses</Link></li>
                                                    <li><Link to="/student-subscription" className={current === '/student-subscription' ? 'active' : ''}><i className="bi bi-basket2 me-2"></i>My Subscription</Link></li>
                                                    <li><Link to="/student-course-resume" className={current === '/student-course-resume' ? 'active' : ''}><i className="bi bi-patch-plus me-2"></i>Course Resume</Link></li>
                                                    <li><Link to="/student-wishlist" className={current === '/student-wishlist' ? 'active' : ''}><i className="bi bi-wallet2 me-2"></i>Wishlist</Link></li>
                                                    <li><Link to="/student-payment-info" className={current === '/student-payment-info' ? 'active' : ''}><i className="bi bi-star-half me-2"></i>Payment Info</Link></li>
                                                    <li><Link to="#"><i className="bi bi-question-octagon me-2"></i>Help & Support</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`nav-menus-wrapper ${toggle ? 'nav-menus-wrapper-open' : ''}`}> 
                        <span className="nav-menus-wrapper-close-button" onClick={()=>setToggle(!toggle)}>✕</span>
                        <ul className="nav-menu">
                            <li className={`${['/','/home-2','/home-3','/home-4','/home-5','/home-6','/home-7','/home-8','/home-9','/home-10','/home-11','/home-12','/home-13'].includes(current) ? 'active' : ''}`}><Link to="/">Home</Link>
                                
                                    {/* <li className={current === '/' ? 'active' : ''}><Link to="/">Home Layout 01</Link></li> */}
                                    {/* <li className={current === '/home-2' ? 'active' : ''}><Link to="/home-2">Home Layout 02</Link></li>
                                    <li className={current === '/home-3' ? 'active' : ''}><Link to="/home-3">Home Layout 03</Link></li>
                                    <li className={current === '/home-4' ? 'active' : ''}><Link to="/home-4">Home Layout 04</Link></li>
                                    <li className={current === '/home-5' ? 'active' : ''}><Link to="/home-5">Home Layout 05</Link></li>
                                    <li className={current === '/home-6' ? 'active' : ''}><Link to="/home-6">Home Layout 06</Link></li> */}
                                    {/* <li className={current === '/home-7' ? 'active' : ''}><Link to="/home-7">Home Layout 07</Link></li> */}
                                    {/* <li className={current === '/home-8' ? 'active' : ''}><Link to="/home-8">Home Layout 08</Link></li>
                                    <li className={current === '/home-9' ? 'active' : ''}><Link to="/home-9">Home Layout 09</Link></li>
                                    <li className={current === '/home-10' ? 'active' : ''}><Link to="/home-10">Home Layout 10</Link></li>
                                    <li className={current === '/home-11' ? 'active' : ''}><Link to="/home-11">Home Layout 11</Link></li>
                                    <li className={current === '/home-12' ? 'active' : ''}><Link to="/home-12">Home Layout 12</Link></li>
                                    <li className={current === '/home-13' ? 'active' : ''}><Link to="/home-13">Home Layout 13</Link></li> */}
                             
                            </li>
                            
                            
                            <li className={`${['/student-dashboard','/student-all-courses','/student-course-resume'].includes(current) ? 'active' : ''}`}><Link to="/student-dashboard">Dashboard</Link></li>
                            <li className={`${['/about-us'].includes(current) ? 'active' : ''}`}><Link to="/about-us">About Us</Link></li>
                            <li className={`${['/additional-resources'].includes(current) ? 'active' : ''}`}><Link to="/additional-resources">Additional Resources</Link></li>
                            {/* <li className={`${['/grid-with-sidebar','/grid-with-sidebar-2','/grid-with-sidebar-3','/list-with-sidebar','/full-width-course','/full-width-course-2','/full-width-course-3','/full-width-course-4','/detail','/detail-2','/detail-3','/detail-4','/detail-5','/detail-6','/find-instructor','/instructor-detail'].includes(current) ? 'active' : ''}`}><Link to="#">Courses<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${['/grid-with-sidebar','/grid-with-sidebar-2','/grid-with-sidebar-3'].includes(current) ? 'active' : ''}`}><Link to="#">Courses Grid Sidebar<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={current === '/grid-with-sidebar' ? 'active' : ''}><Link to="/grid-with-sidebar">Sidebar grid 1</Link></li>
                                            <li className={current === '/grid-with-sidebar-2' ? 'active' : ''}><Link to="/grid-with-sidebar-2">Sidebar grid 2</Link></li>
                                            <li className={current === '/grid-with-sidebar-3' ? 'active' : ''}><Link to="/grid-with-sidebar-3">Sidebar grid 3</Link></li>
                                        </ul>
                                    </li>
                                    <li className={current === '/list-with-sidebar' ? 'active' : ''}><Link to="/list-with-sidebar">List Layout with Sidebar</Link></li>
                                    <li className={`${['/full-width-course','/full-width-course-2','/full-width-course-3','/full-width-course-4'].includes(current) ? 'active' : ''}`}><Link to="#">Courses Grid Full Width<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={current === '/full-width-course' ? 'active' : ''}><Link to="/full-width-course">Courses grid 1</Link></li>
                                            <li className={current === '/full-width-course-2' ? 'active' : ''}><Link to="/full-width-course-2">Courses grid 2</Link></li>
                                            <li className={current === '/full-width-course-3' ? 'active' : ''}><Link to="/full-width-course-3">Courses grid 3</Link></li>
                                            <li className={current === '/full-width-course-4' ? 'active' : ''}><Link to="/full-width-course-4">Courses grid 4</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`${['/detail','/detail-2','/detail-3','/detail-4','/detail-5','/detail-6'].includes(current) ? 'active' : ''}`}><Link to="#">Courses Detail<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={current === '/detail' ? 'active' : ''}><Link to="/detail">TEST</Link></li>
                                            <li className={current === '/detail-2' ? 'active' : ''}><Link to="/detail-2">Course Detail 2</Link></li>
                                            <li className={current === '/detail-3' ? 'active' : ''}><Link to="/detail-3">Course Detail 3</Link></li>
                                            <li className={current === '/detail-4' ? 'active' : ''}><Link to="/detail-4">Course Detail 4</Link></li>
                                            <li className={current === '/detail-5' ? 'active' : ''}><Link to="/detail-5">Course Detail 5</Link></li>
                                            <li className={current === '/detail-6' ? 'active' : ''}><Link to="/detail-6">Course Detail 6</Link></li>
                                        </ul>
                                    </li>
                                    <li className={current === '/find-instructor' ? 'active' : ''}><Link to="/find-instructor">Find Instructor</Link></li>
                                    <li className={current === '/instructor-detail' ? 'active' : ''}><Link to="/instructor-detail">Instructor Detail</Link></li>
                                </ul>
                            </li> */}
                            
                            {/* <li className={`${['/about-us','/blog','/blog-detail','/pricing','/404','/register','/component','/contact','/privacy','/faq','/shop-full-width','/shop-left-sidebar','/shop-right-sidebar','/product-detail','/add-to-cart','/product-wishlist','/checkout','/shop-order'].includes(current) ? 'active' : ''}`}><Link to="#">Pages<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${['/shop-full-width','/shop-left-sidebar','/shop-right-sidebar','/product-detail','/add-to-cart','/product-wishlist','/checkout','/shop-order'].includes(current) ? 'active' : ''}`}><Link to="#">Shop Pages<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={current === '/shop-full-width' ? 'active' : ''}><Link to="/shop-full-width">Shop Full Width</Link></li>
                                            <li className={current === '/shop-left-sidebar' ? 'active' : ''}><Link to="/shop-left-sidebar">Shop Sidebar Left</Link></li>
                                            <li className={current === '/shop-right-sidebar' ? 'active' : ''}><Link to="/shop-right-sidebar">Shop Sidebar Right</Link></li>
                                            <li className={current === '/product-detail' ? 'active' : ''}><Link to="/product-detail">Shop Detail</Link></li>
                                            <li className={current === '/add-to-cart' ? 'active' : ''}><Link to="/add-to-cart">Add To Cart</Link></li>
                                            <li className={current === '/product-wishlist' ? 'active' : ''}><Link to="/product-wishlist">Wishlist</Link></li>
                                            <li className={current === '/checkout' ? 'active' : ''}><Link to="/checkout">Checkout</Link></li>
                                            <li className={current === '/shop-order' ? 'active' : ''}><Link to="/shop-order">Order</Link></li>
                                        </ul>
                                    </li>
                                    <li className={current === '/about-us' ? 'active' : ''}><Link to="/about-us">About Us</Link></li>
                                    <li className={current === '/blog' ? 'active' : ''}><Link to="/blog">Blog Style</Link></li>
                                    <li className={current === '/blog-detail' ? 'active' : ''}><Link to="/blog-detail">Blog Detail</Link></li>
                                    <li className={current === '/pricing' ? 'active' : ''}><Link to="/pricing">Pricing</Link></li>
                                    <li className={current === '/404' ? 'active' : ''}><Link to="/404">404 Page</Link></li>
                                    <li className={current === '/register' ? 'active' : ''}><Link to="/register">Register</Link></li>
                                    <li className={current === '/component' ? 'active' : ''}><Link to="/component">Elements</Link></li>
                                    <li className={current === '/contact' ? 'active' : ''}><Link to="/contact">Contact Us</Link></li>
                                    <li className={current === '/privacy' ? 'active' : ''}><Link to="/privacy">Privacy Policy</Link></li>
                                    <li className={current === '/faq' ? 'active' : ''}><Link to="/faq">FAQs</Link></li>
                                </ul>
                            </li> */}
                            
                            {/* <li className={`${['/instructor-dashboard','/instructor-courses','/instructor-create-course','/instructor-course-added','/instructor-earning','/instructor-students','/instructor-orders','/instructor-reviews','/instructor-payout','/student-dashboard','/student-all-courses','/student-subscription','/student-course-resume','/student-wishlist','/student-payment-info','/profile-edit','/settings','/delete-account'].includes(current) ? 'active' : ''}`}><Link to="#">Accounts<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${['/instructor-dashboard','/instructor-courses','/instructor-create-course','/instructor-course-added','/instructor-earning','/instructor-students','/instructor-orders','/instructor-reviews','/instructor-payout'].includes(current) ? 'active' : ''}`}><Link to="#"><i className="bi bi-person-check me-2"></i>Instructor Dashboard<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={current === '/instructor-dashboard' ? 'active' : ''}><Link to="/instructor-dashboard" className="active"><i className="bi bi-ui-radios-grid me-2"></i>Dashboard</Link></li>
                                            <li className={current === '/instructor-courses' ? 'active' : ''}><Link to="/instructor-courses"><i className="bi bi-basket2 me-2"></i>Courses</Link></li>
                                            <li className={current === '/instructor-create-course' ? 'active' : ''}><Link to="/instructor-create-course"><i className="bi bi-patch-plus me-2"></i>Create Course</Link></li>
                                            <li className={current === '/instructor-earning' ? 'active' : ''}><Link to="/instructor-earning"><i className="bi bi-coin me-2"></i>Earning</Link></li>
                                            <li className={current === '/instructor-students' ? 'active' : ''}><Link to="/instructor-students"><i className="bi bi-people me-2"></i>Students</Link></li>
                                            <li className={current === '/instructor-orders' ? 'active' : ''}><Link to="/instructor-orders"><i className="bi bi-bag-check me-2"></i>My Orders</Link></li>
                                            <li className={current === '/instructor-reviews' ? 'active' : ''}><Link to="/instructor-reviews"><i className="bi bi-star-half me-2"></i>Reviews</Link></li>
                                            <li className={current === '/instructor-payout' ? 'active' : ''}><Link to="/instructor-payout"><i className="bi bi-wallet2 me-2"></i>Payout</Link></li>
                                            <li><Link to="#"><i className="bi bi-question-octagon me-2"></i>Help & Support</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`${['/student-dashboard','/student-all-courses','/student-subscription','/student-course-resume','/student-wishlist','/student-payment-info'].includes(current) ? 'active' : ''}`}><Link to="#"><i className="bi bi-mortarboard me-2"></i>Student Dashboard<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={current === '/student-dashboard' ? 'active' : ''}><Link to="/student-dashboard"><i className="bi bi-ui-radios-grid me-2"></i>Dashboard</Link></li>
                                            <li className={current === '/student-all-courses' ? 'active' : ''}><Link to="/student-all-courses"><i className="bi bi-play-circle me-2"></i>All Courses</Link></li>
                                            <li className={current === '/student-subscription' ? 'active' : ''}><Link to="/student-subscription"><i className="bi bi-basket2 me-2"></i>My Subscription</Link></li>
                                            <li className={current === '/student-course-resume' ? 'active' : ''}><Link to="/student-course-resume"><i className="bi bi-patch-plus me-2"></i>Course Resume</Link></li>
                                            <li className={current === '/student-wishlist' ? 'active' : ''}><Link to="/student-wishlist"><i className="bi bi-wallet2 me-2"></i>Wishlist</Link></li>
                                            <li className={current === '/student-payment-info' ? 'active' : ''}><Link to="/student-payment-info"><i className="bi bi-star-half me-2"></i>Payment Info</Link></li>
                                            <li><Link to="#"><i className="bi bi-question-octagon me-2"></i>Help & Support</Link></li>
                                        </ul>
                                    </li>
                                    <li className={current === '/profile-edit' ? 'active' : ''}><Link to="/profile-edit"><i className="bi bi-person-bounding-box me-2"></i>My Profile</Link></li>
                                    <li className={current === '/settings' ? 'active' : ''}><Link to="/settings"><i className="bi bi-gear me-2"></i>Settings</Link></li>
                                    <li className={current === '/delete-account' ? 'active' : ''}><Link to="/delete-account"><i className="bi bi-trash3 me-2"></i>Delete Accounts</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                        
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li className="become-tutor">
                                <Link to={access?recentLesson?`/lesson/${recentLesson.unit}/${recentLesson.number}?item=${recentLesson.order}`:"/lesson/1/1":"/"}><i className="bi bi-play-circle"></i>Resume Lessons</Link>
                            </li>
                            <li>
                                <div className="btn-group account-drop">
                                    <button type="button" className="btn btn-order-by-filt border-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={profileData?.img} className="avater-img" alt=""/>
                                    </button>
                                    <div className="dropdown-menu pull-right animated flipInX box-shadow-sm">
                                        <div className="dropdown-header py-3 border-bottom">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="avatar-flex">
                                                    <div className="square--50 circle"><img src={profileData?.img} className="img-fluid circle" alt=""/></div>
                                                </div>
                                                <div className="caps d-flex flex-column gap-1">
                                                    <h6 className="fw-semibold m-0">{profileData?.first_name} {profileData?.last_name}</h6>
                                                    <span className="text-mid text-muted-2">{profileData?.tag}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-body">
                                            <ul>
                                                <li><Link to="/student-dashboard" className={current === '/student-dashboard' ? 'active' : ''}><i className="bi bi-ui-radios-grid me-2"></i>Dashboard</Link></li>
                                                {/* <li><Link to="/student-all-courses" className={current === '/student-all-courses' ? 'active' : ''}><i className="bi bi-play-circle me-2"></i>All Lessons</Link></li> */}
                                                <li><Link to="/student-course-resume" className={current === '/student-course-resume' ? 'active' : ''}><i className="bi bi-play-circle me-2"></i>All Lessons</Link></li>
                                                <li><Link to="/" onClick={handleClick}><i className="bi bi-box-arrow-right me-2"></i>Logout</Link></li>
                                                {/* <li><Link to="/student-wishlist" className={current === '/student-wishlist' ? 'active' : ''}><i className="bi bi-wallet2 me-2"></i>Wishlist</Link></li>
                                                <li><Link to="/student-payment-info" className={current === '/student-payment-info' ? 'active' : ''}><i className="bi bi-star-half me-2"></i>Payment Info</Link></li> */}
                                                {/* <li><Link to="#"><i className="bi bi-question-octagon me-2"></i>Help & Support</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>   

        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="registermodal">
                    <div className="position-absolute end-0 top-0 mt-3 me-3 z-1">
                        <span className="square--30 circle bg-light z-2" data-bs-dismiss="modal" aria-hidden="true"><i className="bi bi-x"></i></span>
                    </div>
                    <div className="modal-body p-4">
                        <div className="login-card">
                            
                            <div className="web-logo d-flex align-items-center justify-content-center mb-3">
                                
                                
                            </div>
                            
                            <div className="login-caps mb-3">
                                <div className="text-center">
                                    <h3 className="fw-semibold m-0">Welcome back</h3>
                                    <span>Please enter your details to sign in carefully.</span>
                                </div>
                            </div>
                            
                            <div className="social-login-wrap mb-4">
                                <div className=" d-flex align-items-center justify-content-between gap-4">
                                    <Link to="#" className="btn btn-outline-gray rounded-3 flex-fill"><i className="bi bi-apple"></i></Link>
                                    <Link to="#" className="btn btn-outline-gray rounded-3 flex-fill"><i className="bi bi-google text-red"></i></Link>
                                    <Link to="#" className="btn btn-outline-gray rounded-3 flex-fill"><i className="bi bi-twitter text-info"></i></Link>
                                </div>
                            </div>
                            
                            <div className="deider-wrap w-100 mt-3 mb-5">
                                <div className="d-block border-top position-relative">
                                    <span className="position-absolute top-50 start-50 translate-middle square--40 circle bg-white text-muted z-1">OR</span>
                                </div>
                            </div>
                            
                            <div className="login-form">
                                <form>
                                    <div className="form-group mb-4">
                                        <input type="email" className="form-control" placeholder="Enter your email.."/>
                                    </div>
                                    
                                    <div className="form-group mb-4">
                                        <div className="position-relative">
                                            <input type="password" className="form-control" placeholder="********"/>
                                            <span className="position-absolute top-50 end-0 translate-middle-y me-3"><i className="bi bi-eye text-muted"></i></span>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group mb-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="form-check">
                                                <input id="saveinfo" className="form-check-input" name="saveinfo" type="checkbox"/>
                                                <label htmlFor="saveinfo" className="form-check-label">Remember me</label>
                                            </div>
                                            <div className="forget-password"><Link to="#" className="text-decoration-underline">Forgot Password?</Link></div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <button type="button" className="btn btn-main w-100">Sign In</button>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="text-center text-muted">Don't have an account yet? <Link to="#" data-bs-toggle="modal" data-bs-target="#signup" data-bs-dismiss="modal" className="fw-semibold">Sign Up</Link></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="signup" tabIndex={-1} role="dialog" aria-labelledby="sign-up" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                <div className="modal-content" id="sign-up">
                    <div className="position-absolute end-0 top-0 mt-3 me-3 z-1">
                        <span className="square--30 circle bg-light z-2" data-bs-dismiss="modal" aria-hidden="true"><i className="bi bi-x"></i></span>
                    </div>
                    <div className="modal-body p-4">
                        <div className="login-card">
                            
                            <div className="web-logo d-flex align-items-center justify-content-center mb-3">
                                
                            </div>
                            
                            <div className="login-caps mb-4">
                                <div className="text-center">
                                    <h2 className="fw-semibold m-0">Hi! Welcome to</h2>
                                    <h3 className="fw-semibold m-0">LearnUp Online Study Center</h3>
                                </div>
                            </div>
                            
                            <div className="login-form">
                                <form>
                                    <div className="form-group mb-3">
                                        <div className="row g-3">
                                            <div className="form-group col-6"><input type="email" className="form-control" placeholder="First Name"/></div>
                                            <div className="form-group col-6"><input type="email" className="form-control" placeholder="Last Name"/></div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <input type="email" className="form-control" placeholder="Enter your email.."/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <div className="position-relative">
                                            <input type="password" className="form-control" placeholder="********"/>
                                            <span className="position-absolute top-50 end-0 translate-middle-y me-3"><i className="bi bi-eye text-muted"></i></span>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <button type="button" className="btn btn-main w-100">Sign Up</button>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <div className="text-center text-muted">Already have an account on LearnUp? <Link to="#" data-bs-toggle="modal" data-bs-target="#login" data-bs-dismiss="modal" className="fw-semibold">Log In</Link></div>
                                    </div>
                                    
                                    <div className="deider-wrap w-100 mt-4 mb-4">
                                        <div className="d-block border-top position-relative">
                                            <span className="position-absolute top-50 start-50 translate-middle square--40 circle bg-white text-muted z-1">OR</span>
                                        </div>
                                    </div>
                                    
                                    <div className="social-login-wrap">
                                        <div className=" d-flex align-items-center justify-content-between gap-4">
                                            <Link to="#" className="btn btn-md btn-gray rounded-3 border-2 flex-fill">SignUp with<i className="bi bi-apple ms-2"></i></Link>
                                            <Link to="#" className="btn btn-md btn-gray rounded-3 border-2 flex-fill">SignUp with<i className="bi bi-google text-red ms-2"></i></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
