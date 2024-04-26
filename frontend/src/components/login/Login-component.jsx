import { NavLink } from 'react-router-dom';
import '../../assets/css/Login.css'
import { MdOutlineNotStarted } from "react-icons/md";


const Login =()=>{
    return(
        <>
        <div className='login-page'>
           <div className="login-container">
<div className="login-left">
    <img src="./assets/images/transparent-logo2.png" alt="" height="90px" />
    <p>"सफलता हासिल करने के लिए तैयार हैं? लॉग इन करें और आइए फार्मर सॉल्यूशंस के साथ मिलकर आगे बढ़ें!"</p>
</div>
<div className="login-right">
    <input type="text" className="input"placeholder='उपयोगकर्ता नाम' />
    <input type="text" className="input"placeholder='पासवर्ड' />
   <NavLink to="/user-panel" style={{color:"#fff",textDecoration:"none"}}> <button className='cssbuttons-io-button'>  लॉग इन करें <MdOutlineNotStarted className='icon'/> </button></NavLink>
</div>

           </div>
        </div>
        </>
    )
}

export default Login;