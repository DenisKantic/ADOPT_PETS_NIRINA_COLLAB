import { useEffect, useRef, } from 'react';
import {motion as m, useAnimation, useInView} from 'framer-motion';

function Image(props) {

    const imgReference = useRef(null);
    const isImageInView = useInView(imgReference, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isImageInView ) {
            animationControls.start({
                    x: 0,
                    opacity: 1,
            })
        };
    }, [isImageInView]);

    return (
        <m.div ref={imgReference} className="w-[100%]" initial={props.initial} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.40}}>
            <img src={props.img}/>
        </m.div>
    )
}

export default Image;