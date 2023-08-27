import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const Logo = (props) => {
    const refLogo = useRef(null);
    const isLogoInView = useInView(refLogo, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isLogoInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }
    }, [isLogoInView, animationControls]);

    return (
        <m.div ref={refLogo} initial={{x: props.initialX, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: props.delay}}><img src={props.img} alt="logo"/></m.div>
    )
};

export default Logo;