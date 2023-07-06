import { useEffect, useRef, } from 'react';
import {motion as m, useAnimation, useInView} from 'framer-motion';

function Text(props) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isInView) {
            animationControls.start({
                    x: 0,
                    opacity: 1,
            })
        };
    }, [isInView]);
    
    return (
        <m.div ref={ref} className="w-[100%]" initial={props.initial} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.40}}>
            <h2 className='text-4xl mb-4 font-lilitaOne text-lime-500'>{props.title}</h2>
            <p className="text-lg font-helvetica-neue">
            {props.content}
            </p>
        </m.div>
    )
}

export default Text;