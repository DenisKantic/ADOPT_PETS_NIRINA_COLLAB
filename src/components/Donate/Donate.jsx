import React from 'react'
import donate from '../../assets/donate.png';

const Donate = () => {
  return (
        <div className="lg:flex lg:pt-40 lg:pl-20 bg-black">
          <div className="lg:w-[50%] text-slate-200 lg:mt-[8%] pt-20 px-10 lg:pt-0 lg:px-0 mb-20 lg:mb-0">
              <h1 className="text-6xl mb-10 font-semibold text-orange-500">How to donate</h1>
              <p className='mb-4'>On our Facebook group, we publish all the receipts as proof of what
              the donated funds were spent on, in order to keep everything transparent. 
              You can donate via: 
              </p>
              <ul>
                <li className="text-slate-300"><span className="font-semibold text-slate-100">Intesa Sanpaolo (BiH):</span> 1543602005381040</li>
                <li className="text-slate-300"><span className="font-semibold text-slate-100">MobilePay (Denmark):</span> 60619473</li>
                <li className="text-slate-300"><span className="font-semibold text-slate-100">Paypal:</span> hanneriisbjerg@gmail.com</li>
                <li className="text-slate-300"><span className="font-semibold text-slate-100">Volksbank Mittelhessen:</span> Tierhilfe Pfotentraum e.V</li>
                <li className="text-slate-300"><span className="font-semibold text-slate-100">IBAN:</span> DE80 5139 0000 0032 6531 03</li>
                <li className="text-slate-300"><span className="font-semibold text-slate-100">BIC:</span> VBMHDE5F</li>
              </ul>
          </div>
          <div className='lg:w-[50%]'>
            <img className='object-bottom' src={donate} alt="Donate"/>
          </div>
        </div>
  )
}

export default Donate