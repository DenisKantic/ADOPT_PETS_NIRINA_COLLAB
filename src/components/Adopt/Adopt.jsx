import { useState } from 'react';
import {data} from './data';


const Adopt = () => {

    const [gender,setGender] = useState("male");
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
                    <option value="">Male</option>
                    <option value="">Female</option>
                </select>
            </p>
            </div> {/* end of the filter div*/}

            <div className='grid mt-20 mx-auto
                            xss:grid-cols-1 mdd:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> {/* dog list */}
                {data.map(item=>{
                   return <div className='bg-slate-200 h-[500px] w-[300px] pb-10 mx-auto mt-10 rounded-xl' key={item.id}>
                    <img className='rounded-t-xl' src={item.pictures[1]} alt="" />
                        <div className='flex flex-col items-start p-4'>
                        <h1 className='text-xl'>{item.name}</h1>
                        <p className='text-xs py-2'>SEX</p>
                        <p className={gender === item.sex ? 'text-xl bg-green-400 px-3 rounded-xl' : 'text-xl bg-pink-400 px-3 rounded-xl'}>{item.sex}</p>
                        <p className='text-xs py-2'>SIZE</p>
                        <p className={size[0] === item.size ? 'text-xl bg-purple-400 px-3 rounded-xl' : 'text-xl bg-slate-500 px-3 rounded-xl'}>{item.size}</p>
                        <p className='text-sm w-full text-justify p-2'>{item.description}</p>
                        <p className='p-2'>ID: {item.id}</p>
                        </div>
                   </div>
                })}
            </div>
            
        </div>
    </div>
    )
}

export default Adopt