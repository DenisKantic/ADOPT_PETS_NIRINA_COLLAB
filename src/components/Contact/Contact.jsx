import React from 'react';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="bg-slate-200 sm:h-[100vh] ">
      <div className="bg-nirina bg-cover bg-no-repeat bg-center py-20 px-10 text-center h-[50%] flex flex-col justify-center items-center">
        <h1 className="text-3xl lg:text-4xl font-semibold text-slate-100">Contact us</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 h-[50%] lg:grid-cols-3 lg:px-64 ">
        <div className="text-slate-300 flex flex-col justify-center items-center">
            <a href="https://www.facebook.com/nirina.adoptions">
              <div className="flex flex-col justify-center items-center text-center text-slate-900">
                <AiOutlineFacebook size={80} color='#4267B2' />
                <h2 className='text-xl'>Facebook</h2>
                <p>Nirina Dog Adoptions</p>
              </div>
            </a>
          </div>
          <div className="text-slate-300 flex flex-col justify-center items-center">
            <a href="mailto:nirinatuzla@gmail.com">
              <div className="flex flex-col justify-center items-center text-center text-slate-900">
                <AiOutlineMail size={80} color='#08851B' />
                <h2 className='text-xl'>Email</h2>
                <p>nirinatuzla@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="text-slate-300 flex flex-col justify-center items-center">
            <a href="https://www.instagram.com/dogshelter.nirina/?hl=hr">
              <div className="flex flex-col justify-center items-center text-center text-slate-900">
                <AiOutlineInstagram size={80} color='#e65cca' />
                <h2 className='text-xl'>Instagram</h2>
                <p>dogshelter.nirina</p>
              </div>
            </a>
          </div>
          <div className="text-slate-300 flex flex-col justify-center items-center lg:col-span-3">
            <a href="https://www.youtube.com/channel/UCa9kjVWRoPyLl691UtG9osQ/videos">
              <div className="flex flex-col justify-center items-center text-center text-slate-900">
                <AiOutlineYoutube size={80} color='#c41b1b' />
                <h2 className='text-xl'>YouTube</h2>
                <p>Nirina Tuzla Udruženje za zaštitu životinja</p>
              </div>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Contact;
