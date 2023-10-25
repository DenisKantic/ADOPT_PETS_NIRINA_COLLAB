import '../../assets/fonts.css';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';
import Ceo from './Ceo';
import Workers from './Workers';
import Volunteers from './Volunteers';
import ITSupport from '../AboutUs/ITSupport';
import Footer from '../Footer/Footer';

const Team = () => {

  const refOurTeamTitle = useRef(null);
  const refOurTeamAbout = useRef(null);
  const isOurTeamTitleInView = useInView(refOurTeamTitle, {once: true});
  const isOurTeamAboutInView = useInView(refOurTeamAbout, {once: true});
  const animationControls = useAnimation();

  useEffect(()=> {
    if (isOurTeamAboutInView) {
      animationControls.start(
        {y: 0,
        opacity: 1}
      )
    }

    if (isOurTeamTitleInView) {
      animationControls.start(
        {y: 0,
        opacity: 1}
      )
    }

    

  }, [isOurTeamAboutInView, isOurTeamTitleInView,  animationControls])

  return (
       
    <div className='mx-auto w-full bg-[#ffffff]'>
        
        {/*             <div className='h-[70vh] bg-programDog bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
        */}

        <div className='w-full relative'>
          <div className='h-[70vh] bg-team bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center
                          xss:h-screen
                          md:h-[70vh]'>
              <m.h1 initial={{opacity: 0, y: '-50%'}} animate={{opacity: 1, y: 0}} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.40}} className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Our Team</m.h1>
          </div>
          <m.h1 ref={refOurTeamTitle} initial={{opacity: 0, y: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.50}} className='text-center text-[60px] pt-5'>OUR TEAM</m.h1>
        </div>

      <div className='flex justify-center flex-col items-center  w-auto'>
          <m.p ref={refOurTeamAbout} initial={{opacity: 0, y: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='xss:w-[80%] text-xl text-justify mdd:w-[70%] text-2xl uppercase tracking-wide mdd:text-center mt-[50px]'>
          Nirina's team consists of only a few workers, a dozen volunteers and two supervisors. 
          The team works hard every day to improve the conditions of the asylum, fostering and maintaining 
          harmony between all the obligations necessary for the functioning of the system. 
          </m.p>

          <Ceo />

          <Workers />

          <Volunteers />

          <ITSupport />

          <Footer />

      </div>
    </div>
  )
}

export default Team
