import React from "react";
import headerPhoto from "../assets/HeaderPhoto.jpg";
import photoPolygons from "../assets/Polygon.svg";
function Hero() {
  return (
    <div className="flex justify-center">
      <div className="px-8 max-w-screen-2xl lg:px-[100px] flex flex-col mt-8 lg:flex-row">
        <div className="relative top-0 left-0 lg:order-1 lg:w-[40%]">
          <img src={headerPhoto} className="md:max-h-[450px] mx-auto" />
          <div
            className="absolute hidden bottom-0 left-[-10px] right-[-10px] lg:block  bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${photoPolygons})`,
              backgroundSize: "100% 100%",
            }}
          ></div>
        </div>
        <div className="lg:w-[60%] lg:ml-4">
          <p className="text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl mt-8 text-black90 font-extrabold text-center lg:text-left">
            <span className="bg-[#73B9FF]">Twoje Wizje,</span>
            <br />
            nasze wykonanie
          </p>
          <p className="w-full lg:w-[500px] text-base 2xl:text-lg 2xl:w-700px text-black60 text-center my-4 lg:text-left">
            Profesjonalne usługi budowlane na najwyższym poziomie, łączące
            precyzję z elegancją. Każdy projekt realizowany z dbałością o detale
            i jakość.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-primary text-white text-base rounded-lg px-4 py-2 border-transparent hover:bg-background hover:text-black hover:border-primary border-2 duration-500 transition-all active:bg-primary mr-6">
              Kontakt
            </button>
            <button className="bg-transparent text-black text-base rounded-lg px-4 py-2 border-black hover:bg-primary10 hover:border-primary border-2  transition-all duration-500 active:bg-primary">
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
