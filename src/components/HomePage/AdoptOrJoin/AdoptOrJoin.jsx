const AdoptOrJoin = () => {
    return (
        <div className="bg-slate-100">
            <div className="w-[70%] mx-auto mt-20 py-10">
                <h3 className="text-center mb-10 text-3xl">If you want to adopt your favorite dog, please click the button below</h3>
                <div className="flex justify-center my-10">
                    <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">Adopt</button>
                </div>
                <h3 className="text-center mb-5 text-3xl">Want to join our team and support our best friends? </h3> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                </p>
                <p>If you want to join us, you can find more info below </p>
                <div className="flex justify-center mt-10">
                    <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">Join</button>
                </div>
            </div>
        </div>
    )
}

export default AdoptOrJoin;