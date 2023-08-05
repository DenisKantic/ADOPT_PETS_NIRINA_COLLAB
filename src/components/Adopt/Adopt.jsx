import { useState } from 'react';
import {PiDogBold} from 'react-icons/pi';
import {data} from './data';


const Adopt = () => {

    const [dogGender,setDogGender] = useState("male");
 
    return (
    <div className='mx-auto min-h-[120vh]'>
        <div className='w-[90%] mx-auto'>

            <div className='h-[35vh] pt-10
                            xss:h-auto'>
            <h1 className='text-center text-4xl pt-10  text-[#2f474c] font-bold'>Take a look at our wonderful dogs!</h1>

            <p className='text-center w-[60%] mx-auto p-5 mb-5'>
                Scroll through the table below to see all the beautiful dogs that are currently ready for adoption. <br />
                For a larger view, click “View larger version” in the lower right corner of the table.
            </p>

            <p className='text-center italic mb-5 text-[#7f7f7f] font-bold'>
            Note: several dogs are still receiving medical treatment and many are in rehabilitation. These dogs are not listed here. 
            </p>
           
           {/* div about filters */}
            <div className='flex
                            xss:flex-col xss:items-center xss:justify-between
                            md:jusfify-center md:flex-row md:justify-center'> 
            
            <div className='flex flex-row items-center '>
            <p className='text-xl'>Sort by size:</p>
            <div className="relative w-[150px] flex items-center lg:max-w-sm">
            <select className="w-full p-1.5 text-center text-xl text-black bg-slate-300 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option className='text-lg'>Small</option>
                <option className='text-lg'>Medium</option>
                <option className='text-lg'>Large</option>
            </select>
            </div>
            </div>

            <div className='flex flex-row items-center'>
            <p className='text-xl'>Sort by gender: </p>
            <div className="relative w-[150px] flex items-center lg:max-w-sm">
            <select className="w-full p-1.5 text-center text-xl text-black bg-slate-300 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option className='text-xl'>Male</option>
                <option className='text-xl'>Female</option>
            </select>
            </div>
            </div>
            </div>

            </div>
             {/* end of the filter div*/}

            <div className='grid mt-20 mx-auto
                            xss:grid-cols-1 mdd:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'> {/* dog list */}
                {data.map((item)=>{
                    
                    const shortexText = item.description;
                   return <div className='pb-10 mx-auto mt-10 
                                           md:w-[350px] ' key={item.id}>
                    <img className='object-cover rounded-full h-[350px] w-[350px]' src={item.pictures[0]} alt="" />
                        <div className='flex flex-col items-center justify-center p-4'>
                        <h1 className='xss:text-lg md:text-2xl pb-2 text-[#2f474c] font-bold'>{item.name}</h1>
                             <div className='flex flex-col justify-between w-[50%] text-lg'>
                        <div className='flex flex-row justify-between items-center'>
                            <p>Gender:</p>
                            <p>{item.gender}</p>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                        <p>Size:</p>
                        <p>{item.size}</p>
                        </div>
                         </div>
                        <p className='text-sm w-full text-center p-2  max-h-[100px] overflow-hidden text-[#7f7f7f]
                                      xss:text-sm md:text-lg'>{shortexText.substring(0,60)}...</p>
                        <button onClick={()=>console.log(
                            item.id, "dog name:" + item.name, "dog sex:" + item.sex, "dog size:" + item.size, "photos: " + item.pictures[0]
                            )} /*
                            this here is to prove that we can make "modal pop up shit", where we can 
                            insert swiper and fetch other informations about item, which is clicked*/
                        className='p-2 text-xl flex flex-row items-center text-[#2f474c] font-bold'>See more <PiDogBold size={25} className='ml-2 text-[#eda27b]' /></button>
                        </div>
                   </div>
                })}
            </div>
            
        </div>
    </div>
    )
}

export default Adopt