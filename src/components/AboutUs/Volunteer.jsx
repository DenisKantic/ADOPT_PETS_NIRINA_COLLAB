import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';


const Volunteer = (props) => {

    const refVolunteer = useRef(null);
    const isVolunteerInView = useInView(refVolunteer, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isVolunteerInView) {
            animationControls.start(
                {x: 0,
                opacity: 1}
            )
        }
    }, [isVolunteerInView, animationControls])

    return (
        <m.div ref={refVolunteer} initial={{opacity: 0, x: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: props.delay}} className='flex flex-col items-center mb-[50px]'>
            <img src={props.image} alt="vana" className='rounded-full border-solid border-2 border-[gray] object-cover
                xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
            <h2 className='text-xl p-2'>{props.name}</h2>
        </m.div>
    )
}

export default Volunteer;