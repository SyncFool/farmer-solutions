import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import Navbar from "../Navbar.jsx"
import About1 from "../about/About-C1.jsx"
// import About2 from "../about/About-C2.jsx"
import About3 from "../about/About-C3.jsx"
import About5 from "../about/About-C5.jsx"
import About4 from "../about/About-C4.jsx"
import About6 from "../about/About-C6.jsx"
import Comp2home from "../landing-page/comp2home.jsx";

export default function AboutUs(){
    return(
        <>
        <Header/>
        <Navbar/>
        <About1/>
        <Comp2home/>
        <About5/>
        <About4/>
        <About6/>
        <About3/>
        

        <Footer/>
        </> 
    )
}

