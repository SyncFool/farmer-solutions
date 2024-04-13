import Header from "../Header.jsx";
import Navbar from "../Navbar.jsx";
import Comp1 from "../landing-page/comp1.jsx";
import Comp1home from "../landing-page/comp1home.jsx";
import Comp2home from "../landing-page/comp2home.jsx";
import Comp3home from "../landing-page/comp3home.jsx";
import Comp4home from "../landing-page/comp4home.jsx";

import Footer from "../Footer.jsx";

// import "../../assets/css/Home.css";


const Home = () => {
    return (
        <>

            <Header />
            <Navbar />
            <Comp1home/>
            <Comp2home/>
            <Comp3home/>
            <Comp4home/>
            {/* <Comp1 /> */}
            <Footer />
        </>
    );
}

export default Home;
