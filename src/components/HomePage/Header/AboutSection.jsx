import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const AboutSection = () => {

    const refTitle = useRef(null);
    const refAboutLongText = useRef(null);
    const refAboutShortText = useRef(null);
    const refButton = useRef(null);
    const isInViewTitle = useInView(refTitle, {once: true});
    const isInViewAboutLongText = useInView(refAboutLongText, {once: true});
    const isInViewShortText = useInView(refAboutShortText, {once: true});
    const isInViewButton = useInView(refButton, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isInViewTitle) {
            animationControls.start(
            {
                y: 0,
                opacity: 1
            })
            console.log(isInViewTitle);
        }

        if (isInViewAboutLongText) {
            animationControls.start(
                {
                    y: 0,
                    opacity: 1
                }
            )
        }

        if (isInViewShortText) {
            animationControls.start(
                {
                    y: 0,
                    opacity: 1
                }
            )
        }

        if (isInViewButton) {
            animationControls.start(
                {
                    y: 0,
                    opacity: 1
                }
            )
        }
    }, [isInViewTitle, isInViewAboutLongText, isInViewShortText, isInViewButton, animationControls]);

    return (
        <div className="mx-auto w-[90%] mt-10">
            <div className="mb-10">
                <m.h1  ref={refTitle} initial={{y: '-50%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className="text-center text-4xl mb-10 text-center mx-auto
                                xss:text-2xl xss:font-bold xss:w-[90%] 
                                xs:text-3xl
                                sm:text-4xl
                                md:text-5xl md:font-normal">Nirina Adoption Center</m.h1>
                <m.p ref={refAboutLongText} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.70}} className="mx-auto
                            xss:w-[90%] xss:text-justify xss:text-lg
                            mdd:text-center mdd:text-xl mdd:w-[70%]">
                On 29th October 2012, a group of young people formed an association for the protection of animals "Nirina" and took over the former shelter of the same name. 
                We did not start from scratch, we started from way below that, with 800 dogs placed in the twilight zone. 
                Now, we are telling beautiful stories and lining up positive moments. The fight still goes on and every day carries another burden, 
                but our euphoria and love has never faltered.
                </m.p>
                <m.p ref={refAboutShortText} initial={{y: '-120%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.80}} className="mt-5 text-center
                            xss:text-xl
                            md:text-2xl">
                    If you want to learn more about us, then click the button below </m.p>
                <div className="flex justify-center mt-10">
                    <m.button ref={refButton} initial={{y: '-150%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.90}} type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">About us!</m.button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;