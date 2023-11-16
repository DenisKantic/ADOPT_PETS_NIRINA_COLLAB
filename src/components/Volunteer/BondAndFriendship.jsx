import {React,useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import {AiOutlineArrowRight} from 'react-icons/ai';

const BondAndFriendship = () => {

    const descriptionRef = useRef();
    const isDescriptionRefInView = useInView(descriptionRef, {once: true});
    const buttonRef = useRef();
    const isButtonRefInView = useInView(buttonRef, {once: true});

    const animationControls = useAnimation();


    useEffect(() => {

        if (isDescriptionRefInView) {
            animationControls.start(
              {
                y: 0,
                opacity: 1
              } 
            )
        }

        if (isButtonRefInView) {
            animationControls.start(
              {
                y: 0,
                opacity: 1
              } 
            )
        }
    }, [animationControls, isDescriptionRefInView, isButtonRefInView])

    return (
        <div className="mx-auto flex flex-col justify-center items-center w-full">
            <div className="bg-group h-[70vh] mx-auto bg-center bg-no-repeat flex justify-center items-center flex-col">
                <m.p ref={descriptionRef} initial={{y: 600, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.10}} className="mx-auto text-center mb-10 text-white
                            xss:text-lg xss:text-justify xss:w-[90%]
                            md:w-[60%]
                            mdd:text-2xl">
                    The bond and friendship formed with the process is the best feeling any dog-lover would wish for, 
                    and it is very simple to participate: you just need to contact us on our social networks, in that way, 
                    you will get in touch with our volunteers who will explain everything to you. If you want to see how 
                    all of this looks, visit our Facebook page where we post our walks daily!
                </m.p>
                <m.button ref={buttonRef} initial={{y: 600, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className="h-[40px] w-[150px] bg-[#ffa800] rounded-lg text-xl">Click here</m.button>
            </div>
        </div>
    )
}

export default BondAndFriendship;