const Figure = (props) => {
    return (
        <div className="flex flex-col justify-center items-center bg-red-400
                        xss:mt-10
                        m">
            <p className="mb-10 text-center
                        xss:text-4xl
                        xl:text-5xl">{
             props.sign ? props.sign + props.number : (props.sign && props.alias) ? props.sign + props.number + props.alias : props.alias ? props.number + props.alias : props.number
            }
            </p>
            <p className="mb-10 text-xl text-center w-[300px]
                        md:text-lg">{props.about}</p>
            <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">Info</button>
        </div>
    )
}

export default Figure;