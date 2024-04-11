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
    <p>"Ready to cultivate success? Log in and let's grow together with Farmer Solutions!"</p>
</div>
<div className="login-right">
    <input type="text" className="input"placeholder='Username' />
    <input type="text" className="input"placeholder='Password' />
   <NavLink to="/user-panel" style={{color:"#fff",textDecoration:"none"}}> <button className='cssbuttons-io-button'>  Login <MdOutlineNotStarted className='icon'/> </button></NavLink>
</div>

           </div>
        </div>
        </>
    )
}

export default Login;