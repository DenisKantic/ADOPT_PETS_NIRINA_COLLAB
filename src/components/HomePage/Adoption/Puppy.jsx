const Puppy = (props) => {
    return (
        <div>
            <div className="mb-6"><img src={props.img} alt="logo"/></div>
            <div className="mb-6">
                <p className="mb-6">Birth: {props.birth}</p>
                <p>{props.about}</p>
            </div>
            <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">Click for more</button>
        </div>
    )
};

export default Puppy;