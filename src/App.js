
import AboutUs from './components/AboutUs/AboutUs';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from './components/Adopt/ComingSoon';
import Program from './components/program/Programs';
import Volunteer from './components/Volunteer/Volunteer';
import HappyEnd from './components/HappyEnd/HappyEnd';
import Contact from './components/Contact/Contact';
import Donate from './components/Donate/Donate';
import Team from './components/AboutUs/Team';
import { useEffect, useState } from 'react';
import Loading from './Loading';

function App() {

  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    setTimeout(() => setLoading(false), 2500)
  },[loading]);


  return (
    <>
    {
      loading ? <Loading /> : 
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/About Us" element={<AboutUs />}/>
          <Route path="/Adopt" element={<ComingSoon />} />
          <Route path="/Programs" element={<Program />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/HappyEnd" element={<HappyEnd />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </BrowserRouter>
        
    }
    
    </>
     
   
  );
}

export default App;
