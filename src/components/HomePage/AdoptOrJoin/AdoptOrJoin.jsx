import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const AdoptOrJoin = () => {

    const refTitle = useRef(null);
    const refAboutText = useRef(null);
    const refJoin = useRef(null);
    const refButton = useRef(null);
    const isTitleInView = useInView(refTitle, {once: true});
    const isAboutTextInView = useInView(refAboutText, {once: true});
    const isJoinInView = useInView(refJoin, {once: true});
    const isButtonInView = useInView(refButton, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isTitleInView) {
            animationControls.start({
                y: 0,
                opacity: 1
            })
        }

        if (isAboutTextInView) {
            animationControls.start(
                {
                    y: 0,
                    opacity: 1
                }
            )
        }
        
        if (isJoinInView) {
            animationControls.start(
                {
                    y: 0,
                    opacity: 1
                }
            )
        }

        if (isButtonInView) {
            animationControls.start({
                y: 0,
                opacity: 1
            })
        }
    }, [isTitleInView, isAboutTextInView, isButtonInView, isJoinInView, animationControls])


    return (
        <div className="bg-slate-100 bg-girlDog2 xss:bg-center md:bg-fixed bg-no-repeat h-[60vh] w-full flex justify-center items-center text-white
                        xss:h-screen md:h-[60vh]">
            <div className="w-[70%] mx-auto mt-20 py-10">
                <m.h3 ref={refTitle} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className="text-center mb-5 text-3xl">Want to join our team and support our best friends? </m.h3> 
                <m.p ref={refAboutText} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.70}} className="text-justify mt-10
                              xss:text-lg xs:text-xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </m.p>

                <m.p ref={refJoin} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.80}} className="text-center mt-5
                              xss:text-2xl">
                    If you want to join us, you can find more info below </m.p>
                <div className="flex justify-center mt-10">
                    <m.button ref={refButton} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.90}} type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem] mb-10">Join</m.button>
                </div>
            </div>
        </div>
    )
}

export default AdoptOrJoin;