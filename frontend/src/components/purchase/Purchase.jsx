import React, { useState } from "react";
import "../../assets/css/Purchase.css";
import TopBar from "../TopBar";
import DFooter from "../DFooter";
import BreadCrumb from "../BreadCrumb";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

export default function Purchase() {
  const [activeTab, setActiveTab] = useState("seeds"); // Initialize active tab state

  // Function to handle tab click
  const handleTabClick = (tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };
  const PurchaseCardComponent = ({ productData }) => {
    const PurchaseCards = ({ item }) => {
      return (
        <>
          <div className="card purchase-card" style={{ width: "16rem" }}>
            <div className="card-image-purchase">
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                style={{ height: "120px", width: "120px" }}
              />
            </div>

            <div className="card-body">
              <div className="tagline-purchase">
                <h5 className="card-title">
                  <p style={{ width: "170px",margin:'auto' }}>{item.name}</p>
                </h5>
                <div className="rating-purchase">
                  <p className="star-purchase" style={{margin:'auto',paddingLeft:"6px" }}> {item.rating} &#9734;</p>
                </div>
              </div>
              <h5 className="card-title">₹ {item.price}</h5>
              <p className="card-text">{item.description}</p>
              <div className="action-buttons-purchase">
                <a href="#" class="btn rounded-pill btn-success">
                अधिक जानें
                </a>
                <a href="#" class="btn rounded-pill btn-outline-success">
                कार्ट में जोड़ें
                </a>
              </div>
            </div>
          </div>
        </>
      );
    };

    return (
      <>
        {productData.map((item) => (
          <PurchaseCards item={item} key={item.id} />
        ))}
      </>
    );
  };

  const [fertilizerData, setFertilizerData] = useState([
    {
      id: 1,
      name: "मैग्नीशियम सल्फेट - 5 किलो",
      image: "./assets/images/fertilizers/1.jpeg",
      rating: 4.2,
      price: 200,
      description: "मैग्नीशियम सल्फेट में पौधों के विकास के लिए आवश्यक पोषक तत्व होते हैं।",
    },
    {
      id: 2,
      name: "एनपीके उर्वरक - 10 किलो",
      image: "./assets/images/fertilizers/2.jpeg",
      rating: 4.5,
      price: 350,
      description: "एनपीके उर्वरक नाइट्रोजन, फास्फोरस, और पोटैशियम का एक संतुलित मिश्रण प्रदान करता है।",
    },
    {
      id: 3,
      name: "कार्बनिक कम्पोस्ट - 20 किलो",
      image: "./assets/images/fertilizers/3.jpeg",
      rating: 4.8,
      price: 250,
      description: "कार्बनिक कम्पोस्ट मिट्टी की उर्वरता को समृद्धि देता है और स्वस्थ पौधों के विकास को प्रोत्साहित करता है।",
    },
    {
      id: 4,
      name: "हड्डी की भोजन - 2.5 किलो",
      image: "./assets/images/fertilizers/4.jpeg",
      rating: 4.0,
      price: 150,
      description: "हड्डी की भोजन रूट विकास के लिए आवश्यक फास्फोरस का एक प्राकृतिक स्रोत है।",
    },
    {
      id: 5,
      name: "सीवीड अर्क - 1 लीटर",
      image: "./assets/images/fertilizers/5.jpeg",
      rating: 4.6,
      price: 180,
      description: "सीवीड अर्क पौधों की प्रतिरक्षा को बढ़ाता है और पोषक तत्वों को बढ़ाता है।",
    },
    {
      id: 6,
      name: "गार्डन चूना - 5 किलो",
      image: "./assets/images/fertilizers/6.jpeg",
      rating: 4.3,
      price: 120,
      description: "गार्डन चूना मिट्टी के पीएच स्तर को उच्च करता है और पौधों के सबसे अच्छे विकास के लिए एसिडिता को कम करता है।",
    },
    {
      id: 7,
      name: "वर्मीकम्पोस्ट - 15 किलो",
      image: "./assets/images/fertilizers/7.jpeg",
      rating: 4.7,
      price: 300,
      description: "वर्मीकम्पोस्ट पोषक तत्वों और मिट्टी के स्वास्थ्य के लिए गुणकारी माइक्रोऑर्गेनिज्मों से भरपूर होता है।",
    },
    {
      id: 8,
      name: "मछली का एमल्शन उर्वरक - 1 लीटर",
      image: "./assets/images/fertilizers/8.jpeg",
      rating: 4.4,
      price: 220,
      description: "मछली का एमल्शन उर्वरक नाइट्रोजन और खनिज मिट्टियों का एक प्राकृतिक स्रोत है।",
    },
    {
      id: 9,
      name: "रक्त मील - 2.5 किलो",
      image: "./assets/images/fertilizers/9.jpeg",
      rating: 4.1,
      price: 180,
      description: "रक्त मील में अधिक नाइट्रोजन होता है और प्रबल पौधों के विकास को प्रोत्साहित करता है।",
    },
    {
      id: 10,
      name: "पोटाश - 10 किलो",
      image: "./assets/images/fertilizers/10.jpeg",
      rating: 4.5,
      price: 250,
      description: "पोटाश मिट्टी को पोटैशियम से समृद्ध करता है जिससे पौधों के फूलने और फलने में सुधार होता है।",
    },
    {
      id: 11,
      name: "एप्सम सॉल्ट - 1 किलो",
      image: "./assets/images/fertilizers/11.jpeg",
      rating: 4.2,
      price: 100,
      description: "एप्सम सॉल्ट पौधों के स्वास्थ्य के लिए आवश्यक मैग्नीशियम और सल्फर प्रदान करता है।",
    },
    {
      id: 12,
      name: "तरल केल्प उर्वरक - 500 मिलीलीटर",
      image: "./assets/images/fertilizers/12.jpeg",
      rating: 4.6,
      price: 160,
      description: "तरल केल्प उर्वरक पौधों के विकास को प्रोत्साहित करता है और तनाव प्रतिरोध को बढ़ाता है।",
    },
    {
      id: 13,
      name: "रॉक फॉस्फेट - 5 किलो",
      image: "./assets/images/fertilizers/13.jpeg",
      rating: 4.3,
      price: 190,
      description: "रॉक फॉस्फेट मिट्टी और पौधों के पोषण के लिए फास्फोरस का एक प्राकृतिक स्रोत है।",
    },
    {
      id: 14,
      name: "हरा खाद्य बीज मिश्रण - 1 किलो",
      image: "./assets/images/fertilizers/14.jpeg",
      rating: 4.8,
      price: 150,
      description: "हरा खाद्य बीज मिश्रण मिट्टी की संरचना को सुधारता है और कार्बनिक पदार्थ जोड़ता है।",
    },
    {
      id: 15,
      name: "जिप्सम पाउडर - 10 किलो",
      image: "./assets/images/fertilizers/15.jpeg",
      rating: 4.0,
      price: 130,
      description: "जिप्सम पाउडर मिट्टी को हल्का करता है और पानी के प्रवाह को सुधारता है।",
    },
    {
      id: 16,
      name: "तरल मछली उर्वरक - 1 लीटर",
      image: "./assets/images/fertilizers/16.jpeg",
      rating: 4.7,
      price: 240,
      description: "तरल मछली उर्वरक पौधों के पौष्टिक विकास के लिए पोषक तत्वों की एक बूस्ट प्रदान करता है।",
    },
    {
      id: 17,
      name: "अजोमाइट - 5 किलो",
      image: "./assets/images/fertilizers/17.jpeg",
      rating: 4.4,
      price: 280,
      description: "अजोमाइट खनिज उर्वरक है जो मिट्टी को छोटे खनिजों से पुनर्लब्ध करता है।",
    },
    {
      id: 18,
      name: "पोटाश के सल्फेट - 10 किलो",
      image: "./assets/images/fertilizers/18.jpeg",
      rating: 4.1,
      price: 270,
      description: "पोटाश के सल्फेट पौधों के विकास और फलने के लिए पोटैशियम और सल्फर प्रदान करता है।",
    },
    {
      id: 19,
      name: "बायोचार - 5 किलो",
      image: "./assets/images/fertilizers/19.jpeg",
      rating: 4.5,
      price: 300,
      description: "बायोचार मिट्टी की समृद्धि को बढ़ाता है और स्वस्थ पौधों के लिए पोषक तत्वों को बनाए रखने में मदद करता है।",
    },
    {
      id: 20,
      name: "बैट गुआनो - 1 किलो",
      image: "./assets/images/fertilizers/20.jpeg",
      rating: 4.3,
      price: 180,
      description: "बैट गुआनो मजबूत पौधों के लिए नाइट्रोजन, फास्फोरस, और पोटैशियम का एक समृद्ध स्रोत है।",
    },
  ]);

  const [seedData, SetSeedData] =useState([  {
    id: 1,
    name: "टमाटर के बीज - चेरी प्रकार",
    image: "./assets/images/seeds/1.jpeg",
    rating: 4.5,
    price: 5,
    description: "चेरी टमाटर के बीज छोटे, स्वादिष्ट फल उत्पन्न करते हैं, जो सलाद और स्नैक्स के लिए उत्तम हैं।"
  },
  {
    id: 2,
    name: "लेट्यूस के बीज - रोमेन प्रकार",
    image: "./assets/images/seeds/2.jpeg",
    rating: 4.3,
    price: 3,
    description: "रोमेन लेट्यूस के बीज कड़क, मीठे पत्ते उत्पन्न करते हैं, जो सलाद और सैंडविच के लिए आदर्श हैं।"
  },
  {
    id: 3,
    name: "गाजर के बीज - रेनबो मिक्स",
    image: "./assets/images/seeds/3.jpeg",
    rating: 4.2,
    price: 4,
    description: "रेनबो गाजर के बीज विभिन्न रंगों के गाजर उत्पन्न करते हैं, जो व्यंजनों में दृश्य सौंदर्य जोड़ते हैं।"
  },
  {
    id: 4,
    name: "बेल पेपर के बीज - मिठा मिक्स",
    image: "./assets/images/seeds/4.jpeg",
    rating: 4.6,
    price: 6,
    description: "मिठा बेल पेपर के बीज रंगीन, क्रिस्पी शिमला मिर्च उत्पन्न करते हैं, जो भरने या स्टिर-फ्राई के लिए उत्तम हैं।"
  },
  {
    id: 5,
    name: "खीरा के बीज - बरपलेस प्रकार",
    image: "./assets/images/seeds/5.jpeg",
    rating: 4.4,
    price: 4,
    description: "बरपलेस खीरा के बीज पतले, बीजरहित खीरे उत्पन्न करते हैं जिनमें क्रिस्प बनावट होती है।"
  },
  {
    id: 6,
    name: "पालक के बीज - ब्लूम्सडेल प्रकार",
    image: "./assets/images/seeds/6.jpeg",
    rating: 4.3,
    price: 3,
    description: "ब्लूम्सडेल पालक के बीज गहरे हरे, गजर वाले पत्ते उत्पन्न करते हैं, जो विटामिन और खनिजों से भरपूर होते हैं।"
  },
  {
    id: 7,
    name: "ब्रोकोली के बीज - प्रीमियम हाइब्रिड",
    image: "./assets/images/seeds/7.jpeg",
    rating: 4.5,
    price: 5,
    description: "प्रीमियम हाइब्रिड ब्रोकोली के बीज बड़े सिर वाले, नरम फूलों को उत्पन्न करते हैं, जो भाप करने या बेकिंग के लिए उत्तम हैं।"
  },
  {
    id: 8,
    name: "जुकीनी के बीज - ब्लैक ब्यूटी प्रकार",
    image: "./assets/images/seeds/8.jpeg",
    rating: 4.2,
    price: 4,
    description: "ब्लैक ब्यूटी जुकीनी के बीज गहरे हरे, सिलेंड्रिकल फल उत्पन्न करते हैं, जो ग्रिलिंग, सौटेंग या बेकिंग के लिए विशेषत: हैं।"
  },
  {
    id: 9,
    name: "चुकंदर के बीज - चियोजिया प्रकार",
    image: "./assets/images/seeds/9.jpeg",
    rating: 4.4,
    price: 4,
    description: "चियोजिया चुकंदर के बीज जीवंत, पट्टियों के साथ चिपकदार चुकंदर उत्पन्न करते हैं, जो सलाद या बेकिंग के लिए आदर्श हैं।"
  },
  {
    id: 10,
    name: "मूली के बीज - फ्रेंच ब्रेकफास्ट प्रकार",
    image: "./assets/images/seeds/10.jpeg",
    rating: 4.6,
    price: 3,
    description: "फ्रेंच ब्रेकफास्ट मूली के बीज लंबवत, लाल त्वचा वाली मूलियों को उत्पन्न करते हैं, जिनमें एक क्रिस्प बनावट और हल्का स्वाद होता है।"
  },
  {
    id: 11,
    name: "स्क्वॉश के बीज - स्पेगेटी प्रकार",
    image: "./assets/images/seeds/11.jpeg",
    rating: 4.5,
    price: 5,
    description: "स्पेगेटी स्क्वॉश के बीज लंबवत फलों को उत्पन्न करते हैं जिनमें धागेदार मांस होता है, जो पास्ता के स्थान पर उत्तम होते हैं।"
  },
  {
    id: 12,
    name: "मटर के बीज - शुगर स्नैप प्रकार",
    image: "./assets/images/seeds/12.jpeg",
    rating: 4.3,
    price: 4,
    description: "शुगर स्नैप मटर के बीज मिठे, क्रिस्पी पॉड्स को उत्पन्न करते हैं, जो ताज़ा या हल्के से पकाए गए में मज़ेदार होते हैं।"
  },
  {
    id: 13,
    name: "मक्का के बीज - गोल्डन बैंटम प्रकार",
    image: "./assets/images/seeds/13.jpeg",
    rating: 4.7,
    price: 6,
    description: "गोल्डन बैंटम मक्का के बीज मिठे, सुनहरे मक्के को उत्पन्न करते हैं, जो ताज़ा खाने या बंद करने के लिए उत्तम होते हैं।"
  },
  {
    id: 14,
    name: "बीन के बीज - केंटकी वंडर प्रकार",
    image: "./assets/images/seeds/14.jpeg",
    rating: 4.4,
    price: 5,
    description: "केंटकी वंडर बीन के बीज स्वादिष्ट, स्ट्रिंगलेस पॉड्स को उत्पन्न करते हैं, जो ताज़ा खाने या बंद करने के लिए उत्तम होते हैं।"
  },
  {
    id: 15,
    name: "प्याज के बीज - पीला मीठा स्पेनिश प्रकार",
    image: "./assets/images/seeds/15.jpeg",
    rating: 4.2,
    price: 3,
    description: "पीला मीठा स्पेनिश प्याज के बीज बड़े, मीठे प्याज उत्पन्न करते हैं, जो काटने या ग्रिलिंग के लिए उत्तम होते हैं।"
  },
  {
    id: 16,
    name: "तरबूज के बीज - क्रिम्सन स्वीट प्रकार",
    image: "./assets/images/seeds/16.jpeg",
    rating: 4.6,
    price: 5,
    description: "क्रिम्सन स्वीट तरबूज के बीज बड़े, मीठे फलों को उत्पन्न करते हैं, जिनमें क्रिस्प, रसीला मांस होता है।"
  },
  {
    id: 17,
    name: "पम्पकिन के बीज - जैक ओ'लैंटर्न प्रकार",
    image: "./assets/images/seeds/17.jpeg",
    rating: 4.5,
    price: 4,
    description: "जैक ओ'लैंटर्न पम्पकिन के बीज बड़े, नारंगी पम्पकिन को उत्पन्न करते हैं, जो काटने या पाई के लिए उत्तम होते हैं।"
  },
  {
    id: 18,
    name: "फूलगोभी के बीज - स्नोबॉल प्रकार",
    image: "./assets/images/seeds/18.jpeg",
    rating: 4.3,
    price: 5,
    description: "स्नोबॉल फूलगोभी के बीज घने, सफेद सिर उत्पन्न करते हैं, जो भाप, भूनने या मैश के लिए विशेषत: हैं।"
  },
  {
    id: 19,
    name: "अरुगुला के बीज - रॉकेट प्रकार",
    image: "./assets/images/seeds/19.jpeg",
    rating: 4.7,
    price: 3,
    description: "रॉकेट अरुगुला के बीज तीखे, तीव्र पत्ते उत्पन्न करते हैं, जो सलाद या गार्निश के लिए उत्तम हैं।"
  },
  {
    id: 20,
    name: "केल के बीज - लाचिनाटो प्रकार",
    image: "./assets/images/seeds/20.jpeg",
    rating: 4.4,
    price: 4,
    description: "लाचिनाटो केल के बीज गहरे, झुर्रीदार पत्ते उत्पन्न करते हैं, जो विटामिन और एंटीऑक्सीडेंट से भरपूर होते हैं, सूप, सलाद या स्मूथी के लिए उपयुक्त हैं।"
  }
])
  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={"बीज और खाद खरीदें"}></BreadCrumb>

          {/* Tab Bar */}
          <div className="card purchase-nav-bar">
            <ul className="nav nav-tabs justify-content-center">
              <li className="nav-item">
                <a
                  href="seeds"
                  className={`nav-link ${
                    activeTab === "seeds" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("seeds")}
                >
                  बीज खरीदें
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="fertilizers"
                  className={`nav-link ${
                    activeTab === "fertilizers" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("fertilizers")}
                >
                 खाद खरीदें
                </a>
              </li>
            </ul>
            <div className="cart-purchase">
              <CiShoppingCart />
            </div>
          </div>

          {/* Content */}
          <div className="card">
            <div
              id="seeds"
              style={{ display: activeTab === "seeds" ? "flex" : "none" }}
              className="seeds-purchase-area"
            >
            <PurchaseCardComponent productData={seedData} />
            </div>
            <div
              id="fertilizers"
              style={{ display: activeTab === "fertilizers" ? "flex" : "none" }}
              className="fertilizers-purchase-area"
            >
              <PurchaseCardComponent productData={fertilizerData} />
            </div>
          </div>

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
