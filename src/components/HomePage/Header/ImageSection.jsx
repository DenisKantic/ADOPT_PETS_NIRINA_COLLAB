import { useEffect } from "react";
import { motion as m} from 'framer-motion';

const Image = () => {
    return (
        <div className="bg-header2 bg-cover xss:bg-center md:bg-fixed bg-no-repeat flex flex-col mx-auto justify-center h-screen w-full">
            <div className="mx-auto
                            xss:w-[90%]
                            md:w-[80%]">
                <div className="flex flex-col
                                xss:w-full xss:items-center css:justify-center
                                sm:w-[90%] 
                                lg:w-[65%]
                                xl:w-[45%]
                                mdd:items-start">
                    <m.h1 initial={{opacity: 0, x: '-50%'}} animate={{opacity: 1, x: 0}} transition={{duration: 0.80, ease: 'easeInOut', delay: 0.40}} className="font-bold text-white
                                    xss:text-[40px] xs:text-[50px] md:text-[40px] mdd:text-[60px]">
                    ADOPT US.   <br />
                    WE NEED YOUR HELP. 
                    </m.h1>
                    <m.p initial={{opacity: 0, x: '-50%'}} animate={{opacity: 1, x: 0}} transition={{duration: 0.80, ease: 'easeInOut', delay: 0.60}} className="text-xl text-white">
                    In our Dog Shelter, your main target is to make your four-legged friends happy. Pet them, hand out treats, play with toys - and they will pay you back with great trust. Get to know the animals well enough to find them the best home! 
                    </m.p>
                    {/* <m.button initial={{opacity: 0, x: '-50%'}} animate={{opacity: 1, x: 0}} transition={{duration: 0.80, ease: 'easeInOut', delay: 0.80}} className="text-black px-6 py-2 bg-white mt-4 rounded-sm text-[15px]"><a href="#aboutUs">Explore more about us!</a></m.button> */}
                 </div>
            </div>
        </div>
    )
}

export default Image;