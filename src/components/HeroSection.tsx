import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";



function HeroSection() {
    return (
        <section className="flex flex-col items-center mt-6 lg:mt-20" id="header">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                {" "}for developers
                </span>
            </h1>
            <p className="mt-10 text-lg text-center max-w-4xl text-neutral">Empower your creativity and bring your VR app ideas to life with our intutive development tools. Get started today and turn your imagination into immersive reality!</p>
            <div className="flex justify-center my-10">
                <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md mx-3">Start for free</a>
                <a href="" className="border py-3 px-4 rounded-md mx-3">Documentation</a>
            </div>

            <div className="flex mt-10 justify-center">
                <video src=""
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source type="video/mp4" src={video1} />
                    Your browser does not support the video tag
                </video>
                <video src=""
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source type="video/mp4" src={video2} />
                    Your browser does not support the video tag
                </video>
            </div>
      </section>

)
}

export default HeroSection