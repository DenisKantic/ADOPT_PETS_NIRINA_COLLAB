import logo from '../src/assets/Nirina_logo.png'

const Spinner = () => {
    return (
        <div className="w-[20%] animate-[spin_2s_ease-in-out_infinite]">
            <img className="w-full" src={logo} alt="Logo"/>
        </div>
    )
}

export default Spinner;