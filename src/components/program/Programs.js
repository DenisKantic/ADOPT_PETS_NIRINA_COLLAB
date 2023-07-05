import childWithDog from '../../assets/Programs/child_and_dog.jpg';
import manWithDog from '../../assets/Programs/man-with-dog.png';
import manWalkingDog from '../../assets/Programs/man-walking-dog.jpg';

function Programs() {
    return (
        <div className="py-16 bg-gray-50"> 
            <h1 className="text-7xl text-center font-lilitaOne text-amber-500">Programs</h1>
            <div className="w-[70%] mx-auto grid grid-cols-2 gap-12 my-20 justify-center items-center">
                <div className="w-[100%]">
                    <img src={childWithDog}/>
                </div>
                <div className="w-[100%]">
                    <h2 className='text-4xl mb-4 font-lilitaOne text-lime-500'>VIRTUAL ADOPTIONS PROGRAM</h2>
                    <p className="text-lg font-helvetica-neue">
                    The "Virtual Adoptions" program was created with the aim of collecting the remaining necessary funds in order to provide food for all the dogs in the shelter. 
                    It functions in such a way that the Virtual Adopter (VA) chooses the dog he wants to "adopt" online and pays 16€ for its food every month. 
                    This is the most important activity in our shelter thanks to which we fill our dogs' bowls every day.
                    </p>
                </div>
                <div className='w-[100%]'>
                    <h2 className='text-4xl mb-4 font-lilitaOne text-sky-500'>THE WALKING PROGRAM</h2>
                    <p className="text-lg font-helvetica-neue">
                    The walking program was created with the aim of socializing dogs as much us possible. Streets dogs can have various characters, from the most cuddly ones to those who don't 
                    allow anyone to approach them. It was this program that helped us transform traumatized dogs into adoptable ones. 
                    One walk costs 5€ and you can pay it for your VA dog or any other that you like. During walks, dogs have the opportunity to socialize with people and other 
                    dogs, play, explore and simply feel freedom, as well as spend the energy that accumulates during a long stay in the kennel. 
                    </p>
                </div>
                <div className='w-[100%]'>
                    <img src={manWithDog}/>
                </div>
                <div className='w-[100%]'>
                    <img src={manWalkingDog} />
                </div>
                <div className='w-[100%]'>
                    <h2 className='text-4xl mb-4 font-lilitaOne text-fuchsia-500'>LEON'S FUND</h2>
                    <p className="text-lg font-helvetica-neue">
                    Leon's fund is a program designed on behalf of all the dogs that left our shelter. We wanted to honor them in some way so they would never be forgotten. 
                    When a dog leaves our shelter, you can support this program by donating a symbolic amount of money marked as "In memory of __", after which we rescue a new dog 
                    from the street and give it the name of the dog thanks to whom it was saved. This way he will live and, at the same time, do good forever. 
                    </p>
                </div>
            </div>
            <div className="w-[70%] mx-auto py-20">
                <h2 className='text-6xl mb-10 font-lilitaOne text-slate-500 text-center'>HOW TO DONATE </h2>
                <p className="text-lg font-helvetica-neue">
                On our facebook group, we publish all the receipts as proof of what the donated funds were spent on, in order to keep everything transparent. </p>
                <p className="text-lg font-helvetica-neue">You can donate via: </p>
                <ul className="text-lg">
                    <li>Intesa SanPaolo (BiH): 1543602005381040</li>
                    <li>Mobile pay (Denmark): 60619473</li>
                    <li>Volksbank Mittelhessen - Tierhilfe Pfotentraum e.V</li>
                    <li>IBAN: DE80 5139 0000 0032 6531 03</li>
                    <li>BIC: VBMHDESF</li>
                </ul>
                
            </div>
        </div>
    )
};

export default Programs;