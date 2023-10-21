import vana from '../../images/azil_team_photos/vana.webp';
import zdravko from '../../images/azil_team_photos/zdravko.webp';
import ena from '../../images/azil_team_photos/ena.webp';
import emir from '../../images/azil_team_photos/emir.webp';
import amra from '../../images/azil_team_photos/amra.jpg';
import vehid from '../../images/azil_team_photos/vehid.webp';
import lejla from '../../images/azil_team_photos/lejla.webp';
import anita from '../../images/azil_team_photos/anita.jpg';
import leon from '../../images/azil_team_photos/leon.webp';
import { useState } from 'react';
import Volunteer from './Volunteer';

const VolunteersList = () => {

    const [volunteers, setVolunteers] = useState(
        [
            {
                id: 1,
                name: 'Vana Mujčinović',
                image: vana
            },
            {
                id: 2,
                name: 'Zdravko Čajić',
                image: zdravko
            },
            {
                id: 3,
                name: 'Ena Ćerimović',
                image: ena
            },
            {
                id: 4,
                name: 'Emir Dindić',
                image: emir
            },
            {
                id: 5,
                name: 'Amra Galijašević',
                image: amra
            },
            {
                id: 6,
                name: 'Vehid Ademović',
                image: vehid
            },
            {
                id: 7,
                name: 'Lejla Majdančić',
                image: lejla
            },
            {
                id: 8,
                name: 'Leon Crossan',
                image: leon
            },
            {
                id: 9,
                name: 'Anita Mišić',
                image: anita
            }
        ]
    )


    return (
        <div className='xss:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid justify-between items-center w-[90%] p-2 tracking-wider'> 

            {
                volunteers.map((volunteer, index) => {
                    return (
                        <Volunteer key={volunteer.id} name={volunteer.name} image={volunteer.image} delay={index * 0.2}/>
                    )
                })
            }
          
        </div>
    )
}

export default VolunteersList;