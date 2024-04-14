
import "../../assets/css/comp3home.css"
import { FcCloseUpMode } from "react-icons/fc";

const Comp3home=()=>{
    return (
        <>
        <div className="comp3home1">
        <div className="com3home1-subheading"><center><FcCloseUpMode/> About Farmer Solution</center></div>
        <div className="comp3home-heading"><center>What We Provide</center></div>
        <div className="comp3home-picture">
            <div className="comp3home-pic">
                <div><img src="/assets/images/fertilizer & seed.png"/></div>
                <div className="comp3home-pic-content"><center>Fertilizer & Seed</center></div>
            </div>
            <div className="comp3home-pic">
                <div><img src="/assets/images/farm labor.png"/></div>
                <div className="comp3home-pic-content"><center>Farm Labour</center></div>
            </div>
            <div className="comp3home-pic">
                <div><img src="/assets/images/Transportation.png"/></div>
                <div className="comp3home-pic-content"><center>Transportation & Tools</center></div>
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
