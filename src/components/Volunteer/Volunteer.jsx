import {React,useEffect} from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';



const Volunteer = () => {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0});
    };
  
    useEffect(()=>{
      scrollToTop();
    },[])
  
    return (
        <div className='h-screen w-full'>
      <div className='h-[70vh] bg-girlDog bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
      <h1 className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Volunteer</h1>
      </div>

      <h1 className="text-[50px] text-center p-5">Volunteer</h1>

      <div className="mx-auto text-lg
                    xss:w-[90%] xss:text-justify
                    md:w-[50%] md:text-center">
      If you ask us what kind of help we need the most, we will agree it is additional helping hands. Our circle is very small for years, number of volunteers is not proportional with the number of our dogs, and we also have only 5 workers. 
      </div>

          <h1 className="text-4xl text-center mt-10">What do we do at the shelter?</h1>
     
      <div className="grid mx-auto w-[90%] mt-10 
                      xss:grid-cols-1
                      mdd:grid-cols-2">
        <div className="mx-auto
                      xss:h-auto xss:w-[90%]
                      md:w-[70%] md:h-[50vh]">
          <p className="w-full h-[40vh] mx-auto text-justify flex items-center justify-center text-lg
                        xss:w-full xss:text-justify">Our primary responsibility is giving dogs walks. 
            In addition, we socialize them, train them to walk on leashes, love them, and take them on adventures. 
            Sometimes, we take them to the city or a lake to expose them to the sounds of traffic or to learn how to swim. 
            That helps them adapt faster when they find a home. Of course there are many more tasks to do which you can do 
            easyly from your home. We always need some help in promoting our dogs and projects. We also need new enthusiastic 
            people with fresh ideas who would love to improve our work.</p>
        </div>
        <div className="bg-ivan h-[40vh] mx-auto w-full bg-no-repeat bg-contain
                        xss:mt-10
                        md:mt-0"></div>
      </div>


      <div className="mx-auto flex flex-col justify-center items-center w-full mt-10">
          
      <div className="bg-group h-[70vh] mx-auto bg-center bg-no-repeat flex justify-center items-center flex-col">
      <p className="mx-auto text-justify mb-10 text-lg text-white
                    xss: w-[90%]
                    md:w-[60%]">
          The bond and friendship formed with the process is the best feeling any dog-lover would wish for, 
          and it is very simple to participate: you just need to contact us on our social networks, in that way, 
          you will get in touch with our volunteers who will explain everything to you. If you want to see how 
          all of this looks, visit our Facebook page where we post our walks daily!</p>
          <button className="h-[40px] w-[150px] bg-red-400">Click here</button>
      </div>
      </div>

      <div className="text-center mt-10">
        <h1>Wanna be a volunteer and help us? </h1>
        <p>Contact us at nirina@example.com</p>
        </div>


      </div>
    )
}

export default Volunteer;