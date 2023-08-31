import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';
import ceo from '../../images/emina_ceo.jpg';

const Ceo = () => {

    const refCeoTitle = useRef(null);
    const refCeoName = useRef(null);
    const refCeoAbout = useRef(null);
    const refCeoImage = useRef(null);
    const isCeoTitleInView = useInView(refCeoTitle, {once: true});
    const isCeoNameInView = useInView(refCeoName, {once: true});
    const isCeoAboutInView = useInView(refCeoAbout, {once: true});
    const isCeoImageInView = useInView(refCeoImage, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        
        if (isCeoTitleInView) {
          animationControls.start(
            {
              y: 0,
              opacity: 1
            }
          )
        }
    
        if (isCeoNameInView) {
          animationControls.start(
            {
              y: 0,
              opacity: 1
            }
          )
        }
    
        if (isCeoAboutInView) {
          animationControls.start(
            {
              y: 0,
              opacity: 1
            }
          )
        }
    
        if (isCeoImageInView) {
          animationControls.start(
            {
              y:0,
              opacty: 1
            }
          )
        }
    
      }, [isCeoTitleInView, isCeoNameInView, isCeoAboutInView, isCeoImageInView, animationControls])

    return (
        <div className='w-[80%] flex flex-col items-center justify-center mt-[100px] tracking-wider'>
            <m.h1 ref={refCeoTitle} initial={{opacity: 0, y: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.70}} className='xss:text-[30px] sm:text-[50px] pb-10 font-[500]'>CEO</m.h1>
            <m.img ref={refCeoImage} initial={{opacity: 0, y: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.80}} src={ceo} alt="emina_ceo" className='rounded-full border-solid border-2 border-[gray] object-cover
                  xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
            <m.h2 ref={refCeoName} initial={{opacity: 0, y: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.90}} className='text-2xl p-2'>Emina Divkovic</m.h2>
            <m.p ref={refCeoAbout} initial={{opacity: 0, y: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.100}} className='text-lg mt-2'>Keeps everything under control</m.p>      
          </div>
    )
}

export default Ceo;