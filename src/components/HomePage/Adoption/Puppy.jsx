import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const Puppy = (props) => {

    const refPuppyItem = useRef(null);
    const isPuppyItemInView = useInView(refPuppyItem, {once: true});
    const animationControls = useAnimation();

    useEffect(() => {
        if (isPuppyItemInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }
    },[isPuppyItemInView, animationControls])
    return (
        <m.div className="mx-auto xss:w-full p-2 ml-5 overflow-hidden shadow-xl" ref={refPuppyItem} initial={{x: props.initialX, opacity: 0}} animate={animationControls} transition={{duration: 0.1, ease: 'easeInOut', delay: props.delay}}>
            <div className="mb-6"><img src={props.img} className="h-[350px] w-full object-cover mx-auto" alt="logo"/></div>
            <div className="mb-2">
                 <p className="mb-2">Name: {props.name}</p>
                <p className="mb-2">Birth: {props.birth}</p>
            </div>
        </m.div>
    )
};

export default Puppy;