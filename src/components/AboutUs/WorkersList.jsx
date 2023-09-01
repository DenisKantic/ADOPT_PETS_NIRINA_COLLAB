import vlado from '../../images/azil_team_photos/vlado.webp';
import adisa from '../../images/azil_team_photos/adisa.webp';
import ivan from '../../images/azil_team_photos/ivan.webp';
import anto from '../../images/azil_team_photos/anto.webp';
import almir from '../../images/azil_team_photos/almir.jpg';
import { useEffect, useRef, useState } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';
import Worker from './Worker';

const WorkersList = () => {

    const [workers, setWorkers] = useState(
        [
            {
                id: 1,
                name: 'Vlado Mandić',
                image: vlado
            },
            {
                id: 2,
                name: 'Adisa Agić',
                image: adisa
            },
            {
                id: 3,
                name: 'Ivan Mandić',
                image: ivan
            },
            {
                id: 4,
                name: 'Anto Jagić',
                image: anto
            },
            {
                id: 5,
                name: 'Almir Agić',
                image: almir
            }
        ]
    )


    return (
        <div className='xss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid justify-between items-center w-[90%] p-2'> 
          
          {
            workers.map((worker, index) =>{
                return (
                    <Worker key={worker.id} name={worker.name} image={worker.image} delay={index * 0.2}/>
                )
            })
          }
            

          </div>
    )
}

export default WorkersList;