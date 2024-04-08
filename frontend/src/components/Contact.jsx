import "../assets/css/Contact.css";

const Contact = ()=>{
    return (
           <div className="main">
           <div className="bgImg">
            <div className="imgTxt">
            <div>
            <a  className="an" href="/Home">
              <p>Home</p>
               </a>
               </div>
                <div>.</div>
                <div>Contact</div>
            </div>

            <div className="imgTxt1">
             Contact
            </div>
           </div>
          <div className="info">
            <div className="infobg1  ab">
             <div><img src="../../public/assets/images/location-logo.png"/></div>
             <div>
                <div className="ef">Our Location</div>
                <div className="cd">Ramveer Nagar Mathura</div>
             </div>
            </div>

            <div className="infobg2  ab">
            <div><img src="../../public/assets/images/call-logo.png"/></div>
             <div>
                <div className="ef">Hotline</div>
                <div className="cd">+91 8006441903 </div>
             </div>
            </div>

            <div className="infobg3  ab" >
            <div><img src="../../public/assets/images/email-logo.png"/></div>
             <div>
                <div className="ef">Email Address</div>
                <div className="cd">support@farmersolutions.com</div>
             </div>   
            </div>
          </div>
          <div className="map">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113181.71309521794!2d77.50347437817783!3d27.564728345607023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fcb5e9a2309%3A0x9868374c5faaf3ce!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712507504552!5m2!1sen!2sin" ></iframe>
             </div> 
<div className="contactlast">
    <div className="contact-info">
        <div className="cd"><h2>Ready to Work with us</h2></div>
        <div className="details">
            <input className="pl ef" type="text" placeholder="Your name" />
            <input className="pl ef" type="text" placeholder="Email Address" />
            <input className="pl ef" type="text" placeholder="Phone Number" />
            <input className="pl ef" type="text" placeholder="Service" />
            <textarea className="msgbox ef" placeholder="Write your message"></textarea>
            <div className="checkbox-container">
                <input type="checkbox" id="save-info" className="check" />
                <label htmlFor="save-info" className="checkbox-label ef">Save my name and email in this browser for the next time I comment</label>
            </div>
        </div>
        <div class="btn">
        <button type="button" class="btn btn-success">Submit</button></div>
    </div>
    <div className="cropimg">
        <img src="../../public/assets/images/comp-2-img.jpg" />
    </div>
</div>

           </div>
    )
}
export default Contact;