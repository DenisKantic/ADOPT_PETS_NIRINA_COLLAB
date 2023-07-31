const Figure = (props) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="mb-10 text-3xl">{
             props.sign ? props.sign + props.number : (props.sign && props.alias) ? props.sign + props.number + props.alias : props.alias ? props.number + props.alias : props.number
            }
            </p>
            <p className="mb-10 text-2xl">{props.about}</p>
            <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">Info</button>
        </div>
    )
}

export default Figure;