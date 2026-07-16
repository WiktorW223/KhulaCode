import { Route, Routes } from "react-router-dom"
import ScrollToTop from "./components/scroll-to-top"
// my imports
import ForgotPassword from "./pages/auth/forgot-password"
import ResetPassword from "./pages/auth/reset-password"
import ProtectedRoute from "./components/ProtectedRoute"
import Detail5 from "./pages/courses/detail/detail-5"
import ForgotPasswordInfo from "./pages/inner-page/forgot-password-info"

import IndexSeven from "./pages/index/index-seven"




//import AddToCart from "./pages/shop/add-to-cart"

import AboutUs from "./pages/inner-page/about-us"
//import Pricing from "./pages/inner-page/pricing"
import Error from "./pages/inner-page/error"
import Register from "./pages/inner-page/register"
import Component from "./pages/inner-page/component"
import Contact from "./pages/inner-page/contact"
import Privacy from "./pages/inner-page/privacy"
import AdditionalResources from "./pages/inner-page/faq"
import InstructorCreateCourse from "./pages/dashboard/instructor/instructor-create-course"
import InstructorStudents from "./pages/dashboard/instructor/instructor-students"
import StudentDashboard from "./pages/dashboard/student/student-dashboard"

import StudentCourseResume from "./pages/dashboard/student/student-course-resume"
import StudentWishlist from "./pages/dashboard/student/student-wishlist"


function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<IndexOne />} /> */}
        {/*<Route path="/home-2" element={<IndexTwo/>} />
        <Route path="/home-3" element={<IndexThree/>} />
        <Route path="/home-4" element={<IndexFour/>} />
        <Route path="/home-5" element={<IndexFive/>} />
        <Route path="/home-6" element={<IndexSix/>} />*/}
        <Route path="/" element={<IndexSeven/>} />
        {/*<Route path="/home-8" element={<IndexEight/>} />
        <Route path="/home-9" element={<IndexNine/>} />
        <Route path="/home-10" element={<IndexTen/>} />
        <Route path="/home-11" element={<NewHome1/>} />
        <Route path="/home-12" element={<NewHome2/>} />
        <Route path="/home-13" element={<NewHome3/>} />*/}
        
        {/* <Route path="/grid-with-sidebar" element={<GridWithSidebar/>} />
        <Route path="/grid-with-sidebar-2" element={<GridWithSidebar2/>} />
        <Route path="/grid-with-sidebar-3" element={<GridWithSidebar3/>} />
        <Route path="/list-with-sidebar" element={<ListWidthSidebar/>} />
        <Route path="/full-width-course" element={<FullWidthCourse/>} />
        <Route path="/full-width-course-2" element={<FullWidthCourse2/>} />
        <Route path="/full-width-course-3" element={<FullWidthCourse3/>} />
        <Route path="/full-width-course-4" element={<FullWidthCourse4/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/detail-2" element={<Detail2/>} />
        <Route path="/course-detail" element={<Detail2/>} />
        <Route path="/course-detail/:id" element={<Detail2/>} />
        <Route path="/detail-3" element={<Detail3/>} />
        <Route path="/detail-4" element={<Detail4/>} />
        <Route path="/detail-5/" element={<Detail5/>} /> */}
        <Route path="/lesson/:unit/:lessonNumber" element={<ProtectedRoute><Detail5/></ProtectedRoute>} />
        {/* <Route path="/detail-6" element={<Detail6/>} />
        <Route path="/find-instructor" element={<FindInstructor/>} />
        <Route path="/instructor-detail" element={<InstructorDetail/>} />
        <Route path="/instructor-detail/:id" element={<InstructorDetail/>} />
        <Route path="/shop-full-width" element={<ShopFullWidth/>} />
        <Route path="/shop-left-sidebar" element={<ShopLeftSidebar/>} />
        <Route path="/shop-right-sidebar" element={<ShopRightSidebar/>} />
        <Route path="/product-detail" element={<ProductDetail/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} /> */}
        {/*<Route path="/add-to-cart" element={<AddToCart/>} />*/}
        {/* <Route path="/product-wishlist" element={<ProductWishlist/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/shop-order" element={<ShopOrder/>} />
        
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog-detail" element={<BlogDetail/>} />
        <Route path="/blog-detail/:id" element={<BlogDetail/>} /> */}
        {/*<Route path="/pricing" element={<Pricing/>} />*/}
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/404" element={<Error/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/component" element={<Component/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/additional-resources" element={<AdditionalResources/>} />
         {/*<Route path="/instructor-dashboard" element={<InstructorDashboard/>} />
        <Route path="/instructor-courses" element={<InstructorCourses/>} />*/}
        <Route path="/instructor-create-course" element={<InstructorCreateCourse/>} />
        {/* <Route path="/instructor-earning" element={<InstructorEarning/>} />  */}
        <Route path="/instructor-students" element={<InstructorStudents/>} />
        {/* <Route path="/instructor-orders" element={<InstructorOrders/>} />
        <Route path="/instructor-reviews" element={<InstructorReviews/>} />
        <Route path="/instructor-payout" element={<InstructorPayout/>} /> */}
        <Route path="/student-dashboard" element={<ProtectedRoute><StudentDashboard/></ProtectedRoute>} />
        {/* <Route path="/student-all-courses" element={<StudentAllCourses/>} />
        <Route path="/student-subscription" element={<StudentSubscription/>} /> */}
        <Route path="/student-course-resume" element={<ProtectedRoute><StudentCourseResume/></ProtectedRoute>} />
        <Route path="/student-wishlist" element={<StudentWishlist/>} />
        {/* <Route path="/student-payment-info" element={<StudentPaymentInfo/>} />
        <Route path="/profile-edit" element={<ProfileEdit/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/delete-account" element={<DeleteAccount/>} />
        <Route path="/become-tutor" element={<BecomeTutor/>} />
        <Route path="/thank-you" element={<ThankYou/>} /> */}

        {/* my routes */}
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password/:userId/:token" element={<ResetPassword/>}/>
        <Route path = "/forgot-password-info" element={<ForgotPasswordInfo/>}/>
        <Route path="*" element={<Error/> } />
      </Routes>
      <ScrollToTop/>
    </>
  )
}

export default App
