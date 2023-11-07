import Header from "./Header/Header";
import Figures from "./Figures/Figures.jsx";
import Support from "./Support/Support";
import PuppiesForAdoption from "./Adoption/PuppiesForAdoption";
import AdoptOrJoin from "./AdoptOrJoin/AdoptOrJoin";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const HomePage = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0});
      };

      useEffect(()=>{
        scrollToTop();
      }, [])
      
    return (
        <>
           <Header />
           <Figures />
           <Support />
           <PuppiesForAdoption />
           <AdoptOrJoin />
           <Footer />
        </>
    )
}

export default HomePage;