import { useEffect, useRef, } from 'react';
import {motion as m, useAnimation, useInView} from 'framer-motion';



function Image(props) {

    const imgReference = useRef(null);
    const isImageInView = useInView(imgReference, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        
        if (isImageInView ) {
            animationControls.start(window.innerWidth < 1024 ? {
                    y : 0,
                    opacity: 1,
            } : {
                x : 0,
                opacity: 1,
        })
        }
        
    }, [isImageInView]);

    return (
        <m.div ref={imgReference} className={`w-[100%] ${props.gridOrder}`} initial={props.initial} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.40}}>
            <img src={props.img} alt='dog_image'/>
        </m.div>
    )
}

export default Image;