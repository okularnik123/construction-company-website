import React from "react";
import hilti from "../assets/partners/Hilti.png";
import schneider from "../assets/partners/Schneider.png";
import saintGobain from "../assets/partners/Saint-Gobain.png";
import bosh from "../assets/partners/Bosh.png";
import makita from "../assets/partners/Makita.png";
import knauf from "../assets/partners/Knauf.png";
function Partners() {
  return (
    <div className="px-8 mt-8  lg:px-[100px] flex flex-col items-center lg:flex-row lg:justify-evenly">
      <div>
        <p className="text-4xl font-bold mb-4">
          Jakość, Na Którą Możesz Liczyć
        </p>
        <p className="max-w-[500px]">
          Realizujemy projekty budowlane z najwyższą precyzją i zaangażowaniem.
          Nasze doświadczenie i dbałość o detale gwarantują doskonałe rezultaty,
          które spełnią Twoje oczekiwania. Każdy projekt traktujemy
          indywidualnie, zapewniając najwyższe standardy wykonania.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 max-h-[500px] items-center gap-x-1 md:grid-rows-2 md:grid-cols-3 md:max-w-[600px]">
        <img src={hilti} />
        <img src={schneider} />
        <img src={saintGobain} />
        <img src={bosh} />
        <img src={makita} />
        <img src={knauf} />
      </div>
    </div>
  );
}

export default Partners;
