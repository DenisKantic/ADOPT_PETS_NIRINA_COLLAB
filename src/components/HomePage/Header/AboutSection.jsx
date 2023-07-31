const AboutSection = () => {
    return (
        <div className="px-[200px] py-[120px]">
            <div className="mb-10">
                <h1 className="text-center text-4xl mb-10 text-center">Nirina Org</h1>
                <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="text-xl mt-4">If you want to learn more about us, then click the button below </p>
                <div className="flex justify-center mt-10">
                    <button type="button" className="bg-slate-500 text-white w-[10rem] h-[3rem]">About us!</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;