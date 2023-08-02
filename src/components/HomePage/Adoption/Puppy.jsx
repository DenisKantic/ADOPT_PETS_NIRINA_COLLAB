const Puppy = (props) => {
    return (
        <div>
            <div className="mb-6"><img src={props.img} alt="logo"/></div>
            <div className="mb-6">
                <p className="mb-6">Birth: {props.birth}</p>
                <p>{props.about}</p>
            </div>
        </div>
    )
};

export default Puppy;