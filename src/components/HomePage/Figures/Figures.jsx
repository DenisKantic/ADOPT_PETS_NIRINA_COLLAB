import React from 'react'
import Donate from '../../../components/Donate/Donate.jsx'

const Figures = () => {
  return (
    <div className='mx-auto min-h-[40vh] pt-10'>
        <div className="text-center">
            <h2 className="text-2xl font-bold">11 years of impact</h2>
            <p className="text-lg p-2">We fetches some numbers for you</p>
        </div>


        <div className='bg-figures w-[100%] bg-cover bg-no-repeat pt-8'> {/* background picture */}
        <div className='flex flex-row justify-around items-center min-h-[30vh] w-[90%] mx-auto text-center mt-20
                        xss:flex-col
                        md:flex-row'>

        {/*card */}
        <div className=''>
            <h1 className='text-4xl p-4'>cca 3000</h1>
            <p className='text-xl p-4'>Total pets adopted</p>
            <button className='py-2 bg-slate-200 px-2 mt-4'>Boop for info!</button>
        </div>

        <div className=''>
            <h1 className='text-4xl p-4'>$ thousands</h1>
            <p className='text-xl p-4'>in food & products donation</p>
            <button className='py-2 bg-slate-200 px-2 mt-4'>Boop for info!</button>
        </div>


        <div className=''>
            <h1 className='text-4xl p-4'>Various programs</h1>
            <p className='text-xl p-4'>The Walking program and more...</p>
            <button className='py-2 bg-slate-200 px-2 mt-4'>Boop for info!</button>
        </div>


        </div>

        </div>


    </div>
  )
}

export default Figures