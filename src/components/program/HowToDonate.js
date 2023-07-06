import { useEffect, useRef, } from 'react';
import {motion as m, useAnimation, useInView} from 'framer-motion';

function HowToDonate(props) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isInView ) {
            animationControls.start({
                    y: 0,
                    opacity: 1,
            })
           
        };
    }, [isInView]);

    return (
        <m.div ref={ref} initial={props.initial} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.6}} className="w-[70%] mx-auto py-10 mt-[100px]">
            <h2 className='text-6xl mb-10 font-lilitaOne text-slate-500 text-center'>HOW TO DONATE </h2>
            <p className="text-lg font-helvetica-neue">
            On our facebook group, we publish all the receipts as proof of what the donated funds were spent on, in order to keep everything transparent. </p>
            <p className="text-lg font-helvetica-neue">You can donate via: </p>
            <ul className="text-lg">
                <li>Intesa SanPaolo (BiH): 1543602005381040</li>
                <li>Mobile pay (Denmark): 60619473</li>
                <li>Volksbank Mittelhessen - Tierhilfe Pfotentraum e.V</li>
                <li>IBAN: DE80 5139 0000 0032 6531 03</li>
                <li>BIC: VBMHDESF</li>
            </ul>
        </m.div>
    )
}

export default HowToDonate;