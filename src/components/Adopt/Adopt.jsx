import { useEffect, useState } from 'react';
import {data} from './data';


const Adopt = () => {

    const [dogGender,setDogGender] = useState("male");
    const [size, setSize] = useState(["small","medium","large"]);
 
    return (
    <div className='mx-auto min-h-[120vh]'>
        <div className='w-[90%] mx-auto'>
            <h1 className='text-center text-4xl pt-10'>Take a look at our wonderful dogs!</h1>

            <p className='text-center w-[60%] mx-auto p-5 mb-5'>
                Scroll through the table below to see all the beautiful dogs that are currently ready for adoption. <br />
                For a larger view, click “View larger version” in the lower right corner of the table.
            </p>

            <p className='text-center italic mb-5'>
            Note: several dogs are still receiving medical treatment and many are in rehabilitation. These dogs are not listed here. 
            </p>
           
           {/* div about filters */}
            <div className='flex justify-center items-center'> 
            <p className='mr-10 text-xl'>Sort by size: 
            <select name="size" id="size" className='ml-2 outline-none bg-slate-300 p-2'>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            </p>

            <p className='text-xl'>Sort by gender: 
                <select name="" id="" className='ml-2 outline-none bg-slate-300 p-2'>
                    <option value="male">Male</option>
                    <option value="">Female</option>
                </select>
            </p>
            </div> {/* end of the filter div*/}

            <div className='grid mt-20 mx-auto
                            xss:grid-cols-1 mdd:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'> {/* dog list */}
                {data.map((item)=>{
                    
                    const shortexText = item.description;
                   return <div className='pb-10 mx-auto mt-10 
                                           md:w-[350px] ' key={item.id}>
                    <img className='object-cover rounded-full h-[350px] w-[350px]' src={item.pictures[0]} alt="" />
                        <div className='flex flex-col items-center justify-center p-4'>
                        <h1 className='xss:text-lg md:text-xl pb-2'>{item.name}</h1>
                        <p className={dogGender === item.gender ? 'xss:text-lg xss:px-2 md:text-xl md:px-3 bg-green-400 rounded-xl' : 'text-xl bg-pink-400 px-3 rounded-xl'
                                        }>{item.gender}</p>
                        <p className='text-xs py-2'>SIZE</p>
                        <p className={size[0] === item.size ? 'xss:text-sm xss:px-2 md:text-xl bg-purple-400 md:px-3 rounded-xl' : 'xss:text-md xss:px-2 md:text-xl bg-slate-500 md:px-3 rounded-xl'}>{item.size}</p>
                        <p className='text-sm w-full text-center p-2  max-h-[100px] overflow-hidden
                                      xss:text-sm md:text-lg'>{shortexText.substring(0,50)}...<a href="#" className="italic">See more</a> </p>
                        <p className='p-2'>ID: {item.id}</p>
                        <button onClick={()=>console.log(
                            item.id, "dog name:" + item.name, "dog sex:" + item.sex, "dog size:" + item.size, "photos: " + item.pictures[0]
                            )} /*
                            this here is to prove that we can make "modal pop up shit", where we can 
                            insert swiper and fetch other informations about item, which is clicked*/
                        className='p-2 bg-red-400'>Adopt me</button>
                        </div>
                   </div>
                })}
            </div>
            
        </div>
    </div>
    )
}

export default Adopt