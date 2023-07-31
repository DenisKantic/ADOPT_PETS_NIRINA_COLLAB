import Figure from '../Figures/Figure';
import FiguresAbout from './FiguresAbout';

const Figures = () =>{
    return (
        <div className="bg-green-100">
            <div className="py-20">
                <FiguresAbout />
                <div className="grid grid-cols-3 mt-[10%] w-[70%] mx-auto">
                    <Figure number={822.222} about={"Total dogs adopted"}/>
                    <Figure number={13.2} about={"In food and product donations"} sign={"$"} alias={"million"}/>
                    <Figure number={12} about={"New inovations in progress"} alias={"Hairy"}/>
                </div>
            </div>
        </div>
    )
}

export default Figures;