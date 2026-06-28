import { Link } from "react-router-dom";
export default function ForgotPasswordInfo(){
    return(
    <div>
    <h3>If you are a student, ask your teacher to reset your password.</h3>
    <h3>If you are a teacher, please email khulacode@email.com, with your username and new password, to reset your password.</h3>
    <Link to= "/register?tab=signin">Return to Login Page</Link>
    </div>
    )
}
