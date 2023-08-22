import React from 'react'

const ComingSoon = () => {
  return (
    <div className='h-screen w-full'>
      <div className='h-[70vh] bg-adoptSoon bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
        <h1 className='text-xl text-white font-bold'>Home - Adopt</h1>
      </div>

       <div className='h-[40vh] flex flex-col justify-center items-center'>
          <h1 className='text-4xl p-4'>This part of the web application is still in progress... </h1>
          <p className='text-xl p-4'>If you want to see available dogs for adoption, you can click the link below.</p>
          <a className='text-xl px-4 py-2 rounded-md bg-red-400' href="https://www.facebook.com/nirina.adoptions/photos_albums">Click here!</a>
        </div>
    </div>
  )
}

export default ComingSoon