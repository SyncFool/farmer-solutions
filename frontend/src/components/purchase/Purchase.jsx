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
                  Details
                </a>
                <a href="#" class="btn rounded-pill btn-outline-success">
                  Add to Cart
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
      name: "Magnesium Sulphate - 5 Kg",
      image: "./assets/images/fertilizers/1.jpeg",
      rating: 4.2,
      price: 200,
      description:
        "Magnesium Sulphate contains essential nutrients for plant growth.",
    },
    {
      id: 2,
      name: "NPK Fertilizer - 10 Kg",
      image: "./assets/images/fertilizers/2.jpeg",
      rating: 4.5,
      price: 350,
      description:
        "NPK Fertilizer provides a balanced mix of nitrogen, phosphorus, and potassium.",
    },
    {
      id: 3,
      name: "Organic Compost - 20 Kg",
      image: "./assets/images/fertilizers/3.jpeg",
      rating: 4.8,
      price: 250,
      description:
        "Organic compost enriches soil fertility and promotes healthy plant growth.",
    },
    {
      id: 4,
      name: "Bone Meal - 2.5 Kg",
      image: "./assets/images/fertilizers/4.jpeg",
      rating: 4.0,
      price: 150,
      description:
        "Bone meal is a natural source of phosphorus, essential for root development.",
    },
    {
      id: 5,
      name: "Seaweed Extract - 1 L",
      image: "./assets/images/fertilizers/5.jpeg",
      rating: 4.6,
      price: 180,
      description:
        "Seaweed extract boosts plant immunity and enhances nutrient uptake.",
    },
    {
      id: 6,
      name: "Garden Lime - 5 Kg",
      image: "./assets/images/fertilizers/6.jpeg",
      rating: 4.3,
      price: 120,
      description:
        "Garden lime raises soil pH levels and reduces acidity for optimal plant growth.",
    },
    {
      id: 7,
      name: "Vermicompost - 15 Kg",
      image: "./assets/images/fertilizers/7.jpeg",
      rating: 4.7,
      price: 300,
      description:
        "Vermicompost is rich in nutrients and beneficial microorganisms for soil health.",
    },
    {
      id: 8,
      name: "Fish Emulsion Fertilizer - 1 L",
      image: "./assets/images/fertilizers/8.jpeg",
      rating: 4.4,
      price: 220,
      description:
        "Fish emulsion fertilizer is a natural source of nitrogen and trace minerals.",
    },
    {
      id: 9,
      name: "Blood Meal - 2.5 Kg",
      image: "./assets/images/fertilizers/9.jpeg",
      rating: 4.1,
      price: 180,
      description:
        "Blood meal is high in nitrogen and promotes vigorous plant growth.",
    },
    {
      id: 10,
      name: "Potash - 10 Kg",
      image: "./assets/images/fertilizers/10.jpeg",
      rating: 4.5,
      price: 250,
      description:
        "Potash enriches soil with potassium for improved plant flowering and fruiting.",
    },
    {
      id: 11,
      name: "Epsom Salt - 1 Kg",
      image: "./assets/images/fertilizers/11.jpeg",
      rating: 4.2,
      price: 100,
      description:
        "Epsom salt provides magnesium and sulfur, essential nutrients for plant health.",
    },
    {
      id: 12,
      name: "Liquid Kelp Fertilizer - 500 ml",
      image: "./assets/images/fertilizers/12.jpeg",
      rating: 4.6,
      price: 160,
      description:
        "Liquid kelp fertilizer stimulates plant growth and enhances stress resistance.",
    },
    {
      id: 13,
      name: "Rock Phosphate - 5 Kg",
      image: "./assets/images/fertilizers/13.jpeg",
      rating: 4.3,
      price: 190,
      description:
        "Rock phosphate is a natural source of phosphorus for soil and plant nutrition.",
    },
    {
      id: 14,
      name: "Green Manure Seeds Mix - 1 Kg",
      image: "./assets/images/fertilizers/14.jpeg",
      rating: 4.8,
      price: 150,
      description:
        "Green manure seeds mix improves soil structure and adds organic matter.",
    },
    {
      id: 15,
      name: "Gypsum Powder - 10 Kg",
      image: "./assets/images/fertilizers/15.jpeg",
      rating: 4.0,
      price: 130,
      description:
        "Gypsum powder loosens clay soil and improves water penetration.",
    },
    {
      id: 16,
      name: "Liquid Fish Fertilizer - 1 L",
      image: "./assets/images/fertilizers/16.jpeg",
      rating: 4.7,
      price: 240,
      description:
        "Liquid fish fertilizer provides a boost of nutrients for lush plant growth.",
    },
    {
      id: 17,
      name: "Azomite - 5 Kg",
      image: "./assets/images/fertilizers/17.jpeg",
      rating: 4.4,
      price: 280,
      description:
        "Azomite is a natural mineral fertilizer that replenishes soil with trace minerals.",
    },
    {
      id: 18,
      name: "Sulfate of Potash - 10 Kg",
      image: "./assets/images/fertilizers/18.jpeg",
      rating: 4.1,
      price: 270,
      description:
        "Sulfate of potash provides potassium and sulfur for plant growth and fruiting.",
    },
    {
      id: 19,
      name: "Biochar - 5 Kg",
      image: "./assets/images/fertilizers/19.jpeg",
      rating: 4.5,
      price: 300,
      description:
        "Biochar enhances soil fertility and promotes nutrient retention for healthier plants.",
    },
    {
      id: 20,
      name: "Bat Guano - 1 Kg",
      image: "./assets/images/fertilizers/20.jpeg",
      rating: 4.3,
      price: 180,
      description:
        "Bat guano is a rich source of nitrogen, phosphorus, and potassium for robust plant growth.",
    },
  ]);

  const [seedData, SetSeedData] =useState([  {
    id: 1,
    name: "Tomato Seeds - Cherry Variety",
    image: "./assets/images/seeds/1.jpeg",
    rating: 4.5,
    price: 5,
    description: "Cherry tomato seeds produce small, flavorful fruits, perfect for salads and snacks."
  },
  {
    id: 2,
    name: "Lettuce Seeds - Romaine Variety",
    image: "./assets/images/seeds/2.jpeg",
    rating: 4.3,
    price: 3,
    description: "Romaine lettuce seeds produce crisp, sweet leaves, ideal for salads and sandwiches."
  },
  {
    id: 3,
    name: "Carrot Seeds - Rainbow Mix",
    image: "./assets/images/seeds/3.jpeg",
    rating: 4.2,
    price: 4,
    description: "Rainbow carrot seeds produce carrots of various colors, adding visual appeal to dishes."
  },
  {
    id: 4,
    name: "Bell Pepper Seeds - Sweet Mix",
    image: "./assets/images/seeds/4.jpeg",
    rating: 4.6,
    price: 6,
    description: "Sweet bell pepper seeds produce colorful, crunchy peppers, perfect for stuffing or stir-fries."
  },
  {
    id: 5,
    name: "Cucumber Seeds - Burpless Variety",
    image: "./assets/images/seeds/5.jpeg",
    rating: 4.4,
    price: 4,
    description: "Burpless cucumber seeds produce slender, seedless cucumbers with a crisp texture."
  },
  {
    id: 6,
    name: "Spinach Seeds - Bloomsdale Variety",
    image: "./assets/images/seeds/6.jpeg",
    rating: 4.3,
    price: 3,
    description: "Bloomsdale spinach seeds produce dark green, crinkled leaves, rich in vitamins and minerals."
  },
  {
    id: 7,
    name: "Broccoli Seeds - Premium Hybrid",
    image: "./assets/images/seeds/7.jpeg",
    rating: 4.5,
    price: 5,
    description: "Premium hybrid broccoli seeds produce large heads with tender florets, perfect for steaming or roasting."
  },
  {
    id: 8,
    name: "Zucchini Seeds - Black Beauty Variety",
    image: "./assets/images/seeds/8.jpeg",
    rating: 4.2,
    price: 4,
    description: "Black Beauty zucchini seeds produce dark green, cylindrical fruits, versatile for grilling, sautéing, or baking."
  },
  {
    id: 9,
    name: "Beet Seeds - Chioggia Variety",
    image: "./assets/images/seeds/9.jpeg",
    rating: 4.4,
    price: 4,
    description: "Chioggia beet seeds produce vibrant, striped beets with a sweet flavor, ideal for salads or roasting."
  },
  {
    id: 10,
    name: "Radish Seeds - French Breakfast Variety",
    image: "./assets/images/seeds/10.jpeg",
    rating: 4.6,
    price: 3,
    description: "French Breakfast radish seeds produce elongated, red-skinned radishes with a crisp texture and mild flavor."
  },
  {
    id: 11,
    name: "Squash Seeds - Spaghetti Variety",
    image: "./assets/images/seeds/11.jpeg",
    rating: 4.5,
    price: 5,
    description: "Spaghetti squash seeds produce oblong fruits with stringy flesh, perfect for pasta substitutes."
  },
  {
    id: 12,
    name: "Pea Seeds - Sugar Snap Variety",
    image: "./assets/images/seeds/12.jpeg",
    rating: 4.3,
    price: 4,
    description: "Sugar Snap pea seeds produce sweet, crunchy pods, delicious eaten fresh or lightly cooked."
  },
  {
    id: 13,
    name: "Corn Seeds - Golden Bantam Variety",
    image: "./assets/images/seeds/13.jpeg",
    rating: 4.7,
    price: 6,
    description: "Golden Bantam corn seeds produce sweet, golden-yellow kernels, perfect for fresh eating or canning."
  },
  {
    id: 14,
    name: "Bean Seeds - Kentucky Wonder Variety",
    image: "./assets/images/seeds/14.jpeg",
    rating: 4.4,
    price: 5,
    description: "Kentucky Wonder bean seeds produce flavorful, stringless pods, suitable for fresh eating or canning."
  },
  {
    id: 15,
    name: "Onion Seeds - Yellow Sweet Spanish Variety",
    image: "./assets/images/seeds/15.jpeg",
    rating: 4.2,
    price: 3,
    description: "Yellow Sweet Spanish onion seeds produce large, sweet onions, perfect for slicing or grilling."
  },
  {
    id: 16,
    name: "Watermelon Seeds - Crimson Sweet Variety",
    image: "./assets/images/seeds/16.jpeg",
    rating: 4.6,
    price: 5,
    description: "Crimson Sweet watermelon seeds produce large, sweet fruits with crisp, juicy flesh."
  },
  {
    id: 17,
    name: "Pumpkin Seeds - Jack O'Lantern Variety",
    image: "./assets/images/seeds/17.jpeg",
    rating: 4.5,
    price: 4,
    description: "Jack O'Lantern pumpkin seeds produce large, orange pumpkins, perfect for carving or pies."
  },
  {
    id: 18,
    name: "Cauliflower Seeds - Snowball Variety",
    image: "./assets/images/seeds/18.jpeg",
    rating: 4.3,
    price: 5,
    description: "Snowball cauliflower seeds produce dense, white heads, versatile for steaming, roasting, or mashing."
  },
  {
    id: 19,
    name: "Arugula Seeds - Rocket Variety",
    image: "./assets/images/seeds/19.jpeg",
    rating: 4.7,
    price: 3,
    description: "Rocket arugula seeds produce spicy, peppery leaves, perfect for salads or garnishes."
  },
  {
    id: 20,
    name: "Kale Seeds - Lacinato Variety",
    image: "./assets/images/seeds/20.jpeg",
    rating: 4.4,
    price: 4,
    description: "Lacinato kale seeds produce dark, wrinkled leaves, rich in vitamins and antioxidants, suitable for soups, salads, or smoothies."
  },
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
          <BreadCrumb props={"Purchase"}></BreadCrumb>

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
                  Seeds
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
                  Fertilizers
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
