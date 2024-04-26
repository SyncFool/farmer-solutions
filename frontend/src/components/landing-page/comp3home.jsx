
import "../../assets/css/comp3home.css"
import { FcCloseUpMode } from "react-icons/fc";

const Comp3home=()=>{
    return (
        <>
        <div className="comp3home1">
        <div className="com3home1-subheading"><center><FcCloseUpMode/> किसानों के लिए</center></div>
        <div className="comp3home-heading"><center>हम क्या प्रदान करते हैं</center></div>
        <div className="comp3home-picture"> 
            <div className="comp3home-pic">
                <div><img src="/assets/images/fertilizer & seed.png"/></div>
                <div className="comp3home-pic-content"><center>खाद एवं बीज</center></div>
            </div>
            <div className="comp3home-pic">
                <div><img src="/assets/images/farm labor.png"/></div>
                <div className="comp3home-pic-content"><center>खेत मजदूर</center></div>
            </div>
            <div className="comp3home-pic">
                <div><img src="/assets/images/Transportation.png"/></div>
                <div className="comp3home-pic-content"><center>परिवहन एवं उपकरण</center></div>
            </div>
            <div className="comp3home-pic">
                <div className="comp3home-pic-content"></div>
            </div>
            
            </div>
            </div>

        </>
    )
}
export default Comp3home;
