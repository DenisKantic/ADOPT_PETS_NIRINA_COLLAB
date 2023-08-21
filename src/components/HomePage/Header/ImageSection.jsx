const Image = () => {
    return (
        <div className="bg-header2 bg-cover bg-fixed bg-no-repeat flex flex-col mx-auto justify-center h-screen w-full">
            <div className="mx-auto
                            xss:w-[90%]
                            md:w-[80%]">
                <div className="flex flex-col
                                xss:w-full xss:items-center css:justify-center
                                sm:w-[90%] 
                                lg:w-[65%]
                                xl:w-[45%]
                                mdd:items-start">
                    <h1 className="text-black font-bold text-white
                                    xss:text-[40px] xs:text-[50px] md:text-[40px] mdd:text-[60px]">
                    ADOPT US.   <br />
                    WE NEED YOUR HELP. 
                    </h1>
                    <p className="text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quae! 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fugit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aut?
                    </p>
                    <button className="text-black px-6 py-2 bg-white mt-4 rounded-sm text-[15px]">FIND A PET TO ADOPT</button>
                 </div>
            </div>
        </div>
    )
}

export default Image;