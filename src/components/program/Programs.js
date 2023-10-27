import childWithDog from '../../assets/Programs/child_and_dog.jpg';
import manWithDog from '../../assets/Programs/man-with-dog.png';
import leon from '../../assets/leon.jpg';
import Image from './Image';
import Text from './Text';
import { useEffect } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Footer from '../Footer/Footer';


const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0});
  };

const virtualAdoptionsContent = {
    title: 'VIRTUAL ADOPTIONS PROGRAM',
    content:
      "The 'Virtual Adoptions' program was created with the aim of collecting the remaining necessary funds in order to provide food for all the dogs in the shelter. It functions in such a way that the Virtual Adopter (VA) chooses the dog he wants to 'adopt' online and pays 16€ for its food every month. This is the most important activity in our shelter thanks to which we fill our dogs' bowls every day.",
  };
  
 const walkingProgramContent = {
    title: 'THE WALKING PROGRAM',
    content:
      'The walking program was created with the aim of socializing dogs as much as possible. Streets dogs can have various characters, from the most cuddly ones to those who do not allow anyone to approach them. It was this program that helped us transform traumatized dogs into adoptable ones. One walk costs 5€ and you can pay it for your VA dog or any other that you like. During walks, dogs have the opportunity to socialize with people and other dogs, play, explore and simply feel freedom, as well as spend the energy that accumulates during a long stay in the kennel.',
  };
  
 const leonsFundContent = {
    title: "LEON'S FUND",
    content:
      "Leon's fund is a program designed on behalf of all the dogs that left our shelter. We wanted to honor them in some way so they would never be forgotten. When a dog leaves our shelter, you can support this program by donating a symbolic amount of money marked as 'In memory of __', after which we rescue a new dog from the street and give it the name of the dog thanks to whom it was saved. This way he will live and, at the same time, do good forever.",
  };

function Programs() {

    useEffect(()=>{
        scrollToTop();
    },[]);

    // Define and declare ref's for each element to be animated when in view 
    

    return (
        <div className="bg-slate-50"> 
             <div className='h-[70vh] bg-programDog bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
             <h1 className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Programs</h1>
            </div>

            <h1 className="text-7xl text-center font-lilitaOne text-amber-500 mt-10">Programs</h1>
            <div className="xss:w-[90%] xss:grid-cols-1 md:w-[60%] lg:w-[80%] mx-auto grid lg:grid-cols-2 gap-20 my-[90px] justify-center items-center">
                <Image 
                img={childWithDog} 
                initial={window.innerWidth < 1024 ? { y: -100, opacity: 0} : { x: -100, opacity: 0}}
                gridOrder={'xss:order-1'}
                />
                <Text 
                title={virtualAdoptionsContent.title}
                content={virtualAdoptionsContent.content}
                initial={window.innerWidth < 1024 ? { y: -100, opacity: 0} : { x: 100, opacity: 0}}
                gridOrder={'xss:order-2'}
                />
                <Text 
                title={walkingProgramContent.title}
                content={walkingProgramContent.content}
                initial={window.innerWidth < 1024 ? { y: -100, opacity: 0} : { x: -100, opacity: 0}}
                gridOrder={'xss:order-4 lg:order-3'}
                />
                <Image 
                img={manWithDog} 
                initial={window.innerWidth < 1024 ? { y: -100, opacity: 0} : { x: 100, opacity: 0}}
                gridOrder={'xss:order-3 lg:order-4'}
                />
                <Image 
                img={leon} 
                initial={window.innerWidth < 1024 ? { y: -100, opacity: 0} : { x: -100, opacity: 0}}
                gridOrder={'xss:order-5'}
                />
                <Text 
                title={leonsFundContent.title}
                content={leonsFundContent.content}
                initial={window.innerWidth < 1024 ? { y: -100, opacity: 0} : { x: 100, opacity: 0}}
                gridOrder={'xss:order-6'}
                />
            </div>

            <Footer />
        </div>
    )
};

export default Programs;