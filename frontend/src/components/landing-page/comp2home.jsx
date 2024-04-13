import "../../assets/css/comp2home.css"
import { FcCloseUpMode } from "react-icons/fc";
import { FaNutritionix } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { GiWheat } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";





 const Comp2home=()=>{
    return (
        <>
        <div className="section-2">
            <div className="sec2-right">
            {/* <img src="/assets/images/comp-3-img.jpg"/> */}
            <div className="sec2-right1"><FcCloseUpMode /> About Farmer</div>
            <div className="sec2-right2">Farmer & Agriculture</div>
            <div className="sec2-right-content"> Empowering farmers with streamlined tools, collaborative resources, and essential facilities for collective growth in agriculture. Revolutionizing farming with efficiency and empowerment, our platform fosters innovation and connectivity within the agricultural community.</div>
            <div className="sec2-right4-main">
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><FaNutritionix />
</div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">Crop Nutrition & fertilizer</div>
                    <div className="sec2-right-content">Platform offers resources and guidance to help farmers optimize crop nutrition , provide seeds and fertilizer also.</div>
                </div>
            </div>
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><GiFarmer />
</div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">Farm & Tool</div>
                    <div className="sec2-right-content">Farmers to  manage their operation & Simplifies daily tasks for farmers by providing them  tools needed for farming.</div>
                </div>
            </div>
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><GiWheat />
</div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">Agriculture & Food</div>
                    <div className="sec2-right-content">Empower  farmers to expand their marketing by facilitating connections and providing access to a wider audience.</div>
                </div>
            </div>
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><FaPeopleGroup/></div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">Crops & Labour</div>
                    <div className="sec2-right-content">Simplifies the process of hiring workers and connecting farmers with skilled labor to support various farming tasks.</div>
                </div>
            </div>
               

            </div>
            </div>
            <div className="sec2-left">
                <div className="sec2-left-base" ><img src="/assets/images/comp-3-img.jpg"/>
                <div className="sec2-left-upper"><img src="/assets/images/tractor-img.jpg"/></div>
                </div>
            </div>
            
        </div>
        </>
    )
 }
 export default Comp2home;