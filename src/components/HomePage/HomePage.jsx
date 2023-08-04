import Header from "./Header/Header";
import Team from '../AboutUs/Team';
import Figures from "./Figures/Figures";
import Support from "./Support/Support";
import PuppiesForAdoption from "./Adoption/PuppiesForAdoption";
import AdoptOrJoin from "./AdoptOrJoin/AdoptOrJoin";

const HomePage = () => {
    return (
        <>
           <Header />
           <Figures />
           <Support />
           <PuppiesForAdoption />
           <AdoptOrJoin />
        </>
    )
}

export default HomePage;