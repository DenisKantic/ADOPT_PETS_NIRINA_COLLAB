import React from 'react'
import Navigation from '../HomePage/Navigation';
import photo from '../../images/dog_photo.png';
import ceo from '../../images/emina_ceo.jpg';

const Team = () => {
  return (
       
    <div className='mx-auto w-full bg-red-400'>
        <Navigation />
    <div className='w-full bg-green-400 relative'>
        <img src={photo} alt="" className='w-full object-cover h-screen' />
        <h1 className='bg-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px]'>OUR TEAM</h1>
    </div>

    <div className='flex justify-center flex-col items-center pt-5 w-auto bg-green-400'>
        <p className='text-center w-[50%] text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

      <div className='w-[50%] bg-purple-400 flex flex-col items-center justify-center pt-10'>
        <h1 className='pb-5 text-[50px]'>CEO</h1>
        <img src={ceo} alt="emina_ceo" className='h-[270px] w-[270px] rounded-full object-cover'  />
        <h2 className='text-xl p-2'>Emina Divkovic</h2>
        <p className='text-lg'>Keeps everything under control</p>
      </div>
    </div>
    </div>
  )
}

export default Team