const AdoptOrJoin = () => {
    return (
        <div className="bg-slate-100 h-[60vh] w-full flex">
            <div className="w-[70%] mx-auto mt-20 py-10">
                <h3 className="text-center mb-5 text-3xl">Want to join our team and support our best friends? </h3> 
                <p className="text-justify mt-10
                              xss:text-lg xs:text-xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>

                <p className="text-center mt-5
                              xss:text-2xl">
                    If you want to join us, you can find more info below </p>
                <div className="flex justify-center mt-10">
                    <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem] mb-10">Join</button>
                </div>
            </div>
        </div>
    )
}

export default AdoptOrJoin;