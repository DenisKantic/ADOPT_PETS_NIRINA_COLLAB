import {React,useEffect, useRef} from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import Footer from "../Footer/Footer";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import VolunteerHeader from "./VolunteerHeader";
import VolunteerTitle from "./VolunteerTitle";
import WhatWeDo from "./WhatWeDo";
import BondAndFriendship from "./BondAndFriendship";
import ContactForVolunteer from "./ContactForVolunteer";



const Volunteer = () => {


    useEffect(()=>{

      const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0});
      };
      
      scrollToTop();
      
    },[])
  
    return (
        <div className='h-screen w-full'>
          <VolunteerHeader />
          <VolunteerTitle />
          <WhatWeDo />
          <BondAndFriendship />
          <ContactForVolunteer />
          <Footer />
      </div>
    )
}

export default Volunteer;