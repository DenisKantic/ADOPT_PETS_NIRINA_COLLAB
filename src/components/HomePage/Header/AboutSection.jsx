const AboutSection = () => {
    return (
        <div className="mx-auto w-[90%] mt-10">
            <div className="mb-10">
                <h1 className="text-center text-4xl mb-10 text-center mx-auto
                                xss:text-2xl xss:font-bold xss:w-[90%] 
                                xs:text-3xl
                                sm:text-4xl
                                md:text-5xl md:font-normal">Nirina Adoption Center</h1>
                <p className="mx-auto
                            xss:w-[90%] xss:text-justify xss:text-lg
                            mdd:text-center mdd:text-xl mdd:w-[70%]">
                On 29th October 2012, a group of young people formed an association for the protection of animals "Nirina" and took over the former shelter of the same name. 
                We did not start from scratch, we started from way below that, with 800 dogs placed in the twilight zone. 
                Now, we are telling beautiful stories and lining up positive moments. The fight still goes on and every day carries another burden, 
                but our euphoria and love has never faltered.
                </p>
                <p className="mt-5 text-center
                            xss:text-xl
                            md:text-2xl">
                    If you want to learn more about us, then click the button below </p>
                <div className="flex justify-center mt-10">
                    <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">About us!</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;