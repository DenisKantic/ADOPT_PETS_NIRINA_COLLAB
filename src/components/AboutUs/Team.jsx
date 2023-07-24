import React from 'react'
import Navigation from '../HomePage/Navigation';
import drone_photo from '../../images/drone_photo.png';
import ceo from '../../images/emina_ceo.jpg';
import vana from '../../images/azil_team_photos/vana.jpg';
import lejla from '../../images/azil_team_photos/lejla.jpg';
import amra from '../../images/azil_team_photos/amra.jpg';
import leon from '../../images/azil_team_photos/leon.jpg';
import vehid from '../../images/azil_team_photos/vehid.jpg';
import anto from '../../images/azil_team_photos/anto.jpg';
import zdravko from '../../images/azil_team_photos/zdravko.jpg';
import adisa from '../../images/azil_team_photos/adisa.jpg';
import almir from '../../images/azil_team_photos/almir.jpg';
import emir from '../../images/azil_team_photos/emir.jpg';
import ena from '../../images/azil_team_photos/ena.jpg';
import vlado from '../../images/azil_team_photos/vlado.jpg';
import anita from '../../images/azil_team_photos/anita.jpg';
import ivan from '../../images/azil_team_photos/ivan.jpg';
import denis from '../../images/denis.jpg';
import ismar from '../../images/ismar.jpg';
import '../../assets/fonts.css';

const Team = () => {
  return (
       
    <div className='mx-auto w-full bg-[#ffffff]'>
        <Navigation />
    <div className='w-full relative'>
        <img src={drone_photo} alt="" className='w-full object-cover h-screen' />
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-[700] tracking-wider
                      xss:text-[90px] md:text-[140px]'>OUR TEAM</h1>
    </div>

    <div className='flex justify-center flex-col items-center pt-5 w-auto'>
        <p className='xss:w-[80%] text-xl text-justify mdd:w-[70%] text-2xl uppercase tracking-wide mdd:text-center mt-[50px]'>
        Nirina's team consists of only a few workers, a dozen volunteers and two supervisors. 
        The team works hard every day to improve the conditions of the asylum, fostering and maintaining 
        harmony between all the obligations necessary for the functioning of the system. 
        </p>

      <div className='w-[80%] flex flex-col items-center justify-center mt-[100px] tracking-wider'>
        <h1 className='xss:text-[30px] sm:text-[50px] pb-10 font-[500]'>CEO</h1>
        <img src={ceo} alt="emina_ceo" className='rounded-full border-solid border-2 border-[gray] object-cover
              xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-2xl p-2'>Emina Divkovic</h2>
        <p className='text-lg mt-2'>Keeps everything under control</p>      
      </div>

      <div className='flex flex-col items-center p-5'>
        <h1 className='xss:text-[40px] sm:text-[50px] pb-5 mt-[100px] font-[500] tracking-wider'>WORKERS</h1>
       <p className='xss:w-[90%] text-lg text-justify md:w-[70%] p-5 md:text-center font-[300] text-xl'>
       The shelter consists of 5 workers whose duties are to maintain the established system, feed the dogs, 
       clean their huts every day, bathe them, take them to the vet, build and repair everything necessary to
        ensure good conditions for the dogs' lives. The asylum is never unsupervised because the workers are 
        exchanged in on-call shifts. 
       </p>
        </div>

        <div className='xss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid justify-between items-center w-[90%] p-2'> 
        
        <div className='flex items-center flex-col mb-[50px]'>
        <img src={vlado} alt="zdravko" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Vlado Mandić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={adisa} alt="adisa" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Adisa Agić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={ivan} alt="ivan" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Ivan Mandić</h2>
      </div>


      <div className='flex items-center flex-col mb-[50px]'>
        <img src={anto} alt="anto" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Anto Jagić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={almir} alt="almir" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Almir Agić</h2>
      </div>
  

      </div>

      <div className='flex flex-col items-center p-5 tracking-wider'>
        <h1 className='xss:text-[40px] sm:text-[50px] pb-5 mt-[100px] font-[500]'>VOLUNTEERS</h1>
       <p className='xss:w-[90%] text-lg xss:text-justify md:w-[70%] md:text-center md:text-xl font-[300] p-5'>
       Volunteers have numerous obligations, the fulfillment of which results in a greater number of adoptions. 
       First of all, they take care of the socialization of the dogs, work on their behavior, 
       in case of trauma they help the dogs to overcome them, teach them basic things so that they
        are ready for life in a new home. They walk dogs, give ideas that are implemented into projects, 
        run social networks, advertise dogs to potential adopters and are available for all possible questions 
        that parties may have.
       </p>
        </div>
      <div className='xss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid justify-between items-center w-[90%] p-2 tracking-wider'> 

        <div className='flex flex-col items-center mb-[50px]'>
        <img src={vana} alt="vana" className='rounded-full border-solid border-2 border-[gray] object-cover
               xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Vana Mujčinović</h2>
        </div>

        <div className='flex items-center flex-col mb-[50px]'>
        <img src={zdravko} alt="zdravko" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Zdravko Čajić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={ena} alt="ena" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Ena Ćerimović</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={emir} alt="emir" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Emir Dindić</h2>
      </div>

      <div className='flex items-center flex-col p-5 mb-[50px]'>
        <img src={amra} alt="amra" className='rounded-full border-solid border-2 border-[gray] object-cover
            xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Amra Galijašević</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={vehid} alt="vehid" className='rounded-full border-solid border-2 border-[gray] object-cover
            xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Vehid Ademović</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={lejla} alt="lejla" className='rounded-full border-solid border-2 border-[gray] object-cover
             xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Lejla Majdančić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={leon} alt="leon" className='rounded-full border-solid border-2 border-[gray] object-cover
           xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Leon Crossan</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={anita} alt="anita" className='rounded-full border-solid border-2 border-[gray] object-cover
            xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Anita Mišić</h2>
      </div>
      </div>

      <div className='flex flex-col items-center p-5 mt-[50px] text-center tracking-wider'>
        <h1 className='xss:w-[90%] xss:text-2xl sm:w-[70%] md:text-[50px] font-[500] p-5'>IT SUPPORT</h1>
      <h1 className='xss:w-[90%] xss:text-2xl sm:w-[70%] md:text-[20px] font-[300]'>Special thanks to the guys who developed and are maintaining our website for completely free. </h1>
      </div>
      <div className='grid xss:grid-cols-1 md:grid-cols-2 justify-around items-center w-[90%] p-2 '> 
      <div className='flex items-center flex-col mb-[50px]'>
        <img src={denis} alt="denis" className='rounded-full border-solid border-2 border-[gray] object-cover
               xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Denis Kantić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={ismar} alt="ismar" className='rounded-full border-solid border-2 border-[gray] object-cover
               xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
        <h2 className='text-xl p-2'>Ismar Begić</h2>
      </div>
       </div>

    </div>
    </div>
  )
}

export default Team