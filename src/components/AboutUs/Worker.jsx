import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const Worker = (props) => {

    const refWorker = useRef(null);
    const isWorkerInView = useInView(refWorker, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isWorkerInView) {
            animationControls.start(
                {x: 0,
                opacity: 1}
            )
        }
    }, [isWorkerInView, animationControls])


    return (
        <m.div ref={refWorker} initial={{opacity: 0, x: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: props.delay}} className='flex items-center flex-col mb-[50px]'>
              <img src={props.image} alt="zdravko" className='rounded-full border-solid border-2 border-[gray] object-cover
                xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
              <h2 className='text-xl p-2'>{props.name}</h2>
        </m.div>
    )
}

export default Worker;