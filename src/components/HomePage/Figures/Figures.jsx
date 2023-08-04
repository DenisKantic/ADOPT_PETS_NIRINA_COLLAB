import Figure from '../Figures/Figure';
import FiguresAbout from './FiguresAbout';

const Figures = () =>{
    return (
        <div className="bg-green-100">
            <div className="py-20">
                <FiguresAbout />
                <div className="flex flex-row justify-around items-center mt-20 mx-auto
                                xss:flex-col
                                md:flex-col md:justify-between w-[90%]
                                lg:justify-around lg:flex-row w-[70%]">
                    <Figure number={"cca 3000"} about={"Total dogs adopted"}/>
                    <Figure number={13.2} about={"In food and product donations"} sign={"$"} alias={"million"}/>
                    <Figure number={"Various programs"} about={"Virtual adoption program, walking program and more... "}/>
                </div>
            </div>
        </div>
    )
}

export default Figures;