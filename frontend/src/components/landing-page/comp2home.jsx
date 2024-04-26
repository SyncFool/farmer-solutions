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
            <div className="sec2-right1"><FcCloseUpMode />किसान के बारे में</div>
            <div className="sec2-right2">किसान एवं कृषि</div>
            <div className="sec2-right-content">कृषि में सामूहिक विकास के लिए सुव्यवस्थित उपकरणों, सहयोगी संसाधनों और आवश्यक सुविधाओं के साथ किसानों को सशक्त बनाना। दक्षता और सशक्तिकरण के साथ खेती में क्रांति लाते हुए, हमारा मंच कृषि समुदाय के भीतर नवाचार और कनेक्टिविटी को बढ़ावा देता है।</div>
            <div className="sec2-right4-main">
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><FaNutritionix />
</div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">फसल पोषण एवं खाद</div>
                    <div className="sec2-right-content">यह प्लेटफ़ॉर्म किसानों को फसल पोषण को अनुकूलित करने, बीज और उर्वरक भी उपलब्ध कराने में मदद करने के लिए संसाधन और मार्गदर्शन प्रदान करता है।</div>
                </div>
            </div>
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><GiFarmer />
</div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">खेत एवं उपकरण</div>
                    <div className="sec2-right-content">किसानों को अपने संचालन का प्रबंधन करने और खेती के लिए आवश्यक उपकरण प्रदान करके किसानों के दैनिक कार्यों को सरल बनाने की सुविधा।</div>
                </div>
            </div>
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><GiWheat />
</div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">कृषि एवं खाद्य</div>
                    <div className="sec2-right-content">कनेक्शन की सुविधा और व्यापक दर्शकों तक पहुंच प्रदान करके किसानों को अपने विपणन का विस्तार करने के लिए सशक्त बनाना।</div>
                </div>
            </div>
            <div className="sec2-right4">
                <div className="sec2-right4-icon"><FaPeopleGroup/></div>
                <div className="sec2-right4-content">
                    <div className="sec2-right4-heading">फसलें एवं श्रम</div>
                    <div className="sec2-right-content">विभिन्न कृषि कार्यों में सहायता के लिए श्रमिकों को काम पर रखने और किसानों को कुशल श्रमिकों से जोड़ने की प्रक्रिया को सरल बनाता है।</div>
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