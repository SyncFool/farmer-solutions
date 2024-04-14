import React from "react";
import '../assets/css/Footer.css';
 
const Footer=()=>{
    return (
      <div className="footer">
       <div className="sb_footer section_padding">
        <div className="sb_footer-links">
         <div className="sb_footer-links-div">
            <h2>Farmer Solution</h2>
           <p>Agriculture is the noblest  of all alchemy</p>
             {/* <div className="socialMedia">
                <p><img src={fb} alt=""/></p>
                <p><img src={insta} alt=""/></p>
             </div> */}
        </div>
 
        <div className="sb_footer-links-div">
        <h2>Links</h2>
        <a  className="anchor"href="/aboutUs">
        <p>About Us</p>
        </a>
        <a  className="anchor"href="/contactUs">
        <p>Contact Us</p>
        </a>
        <a  className="anchor"href="/FAQ">
        <p>FAQS</p>
        </a>
        </div>

        <div className="sb_footer-links-div">
            <h2>Explore</h2>
            <a className="anchor" href="/terms&conditions">
            <p>Terms & Conditions</p>
            </a>
            <a className="anchor" href="/privacyPolicy">
            <p>Privacy Policy</p>
            </a>
        </div> 

        <div className="sb_footer-links-div">
            <h2>Services</h2>
            <a className="anchor" href="/seeds & fertilizer">
            <p>Seeds & Fertilizer</p>
            </a>
            <a  className="anchor"href="/expert labor">
            <p>Expert Labor</p>
            </a>
            <a className="anchor" href="/transportation">
            <p>Transportation</p>
            </a>
            <a className="anchor" href="/farmEquipments">
            <p>Farm Equipments</p>
            </a>
            
        </div>  
        </div>
        <hr className="hra"></hr>
        <div className="sb_footer-copyright">
            <center>  © Copyrights Farmer Solutions {new Date().getFullYear()} . All right reserved</center>
        </div>
       </div>
      </div>  
    )
}
export default Footer;