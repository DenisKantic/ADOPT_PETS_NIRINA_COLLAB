import React from 'react'
import Navigation from '../HomePage/Navigation';
import photo from '../../images/dog_photo.png';
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


const Team = () => {
  return (
       
    <div className='mx-auto w-full bg-[#eef2e2]'>
        <Navigation />
    <div className='w-full relative'>
        <img src={photo} alt="" className='w-full object-cover h-screen' />
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px]'>OUR TEAM</h1>
    </div>

    <div className='flex justify-center flex-col items-center pt-5 w-auto'>
        <p className='text-center w-[50%] text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

      <div className='w-[50%] flex flex-col items-center justify-center mt-[100px]'>
        <h1 className='pb-10 text-[50px]'>CEO</h1>
        <img src={ceo} alt="emina_ceo" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Emina Divkovic</h2>
        <p className='text-lg'>Keeps everything under control</p>      
      </div>

        <div className='flex flex-col items-center p-5'>
        <h1 className='pb-5 mt-[100px] text-[50px]'>VOLUNTEERS</h1>
       <p className='p-5 w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa excepturi laudantium assumenda molestias id porro numquam maxime veniam sed debitis!</p>
        </div>
      <div className='grid grid-cols-3 justify-between items-center w-[90%] p-2 '> 

        <div className='flex flex-col items-center mb-[50px]'>
        <img src={vana} alt="vana" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Vana Mujčinović</h2>
        </div>

        <div className='flex items-center flex-col mb-[50px]'>
        <img src={zdravko} alt="zdravko" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Zdravko Čajić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={ena} alt="ena" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Ena Ćerimović</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={emir} alt="emir" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Emir Dindić</h2>
      </div>

      <div className='flex items-center flex-col p-5 mb-[50px]'>
        <img src={amra} alt="amra" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Amra Galijašević</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={vehid} alt="vehid" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Vehid Ademović</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={lejla} alt="lejla" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Lejla Majdančić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={leon} alt="leon" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Leon Crossan</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={anita} alt="anita" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Anita Mišić</h2>
      </div>
      </div>

      <div className='flex flex-col items-center p-5'>
        <h1 className='pb-5 mt-[100px] text-[50px]'>WORKERS</h1>
       <p className='p-5 w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa excepturi laudantium assumenda molestias id porro numquam maxime veniam sed debitis!</p>
        </div>

        <div className='grid grid-cols-3 justify-between items-center w-[90%] p-2 '> 
        
        <div className='flex items-center flex-col mb-[50px]'>
        <img src={vlado} alt="zdravko" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Vlado Mandić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={adisa} alt="adisa" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Adisa Agić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={ivan} alt="ivan" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Ivan Mandić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={anto} alt="anto" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Anto Jagić</h2>
      </div>

      <div className='flex items-center flex-col mb-[50px]'>
        <img src={almir} alt="almir" className='h-[270px] w-[270px] rounded-full border-solid border-2 border-[gray] object-cover'  />
        <h2 className='text-xl p-2'>Almir Agić</h2>
      </div>

        </div>

    </div>
    </div>
  )
}

export default Team