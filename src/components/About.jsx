import React from "react";
import aboutImage from "../assets/About.jpg";

function About() {
  return (
    <div className="px-8 lg:px-[100px] mt-12 flex flex-col max-w-[800px] mx-auto lg:max-w-screen-2xl lg:flex-row w-full lg:items-center lg:justify-center">
      <img
        src={aboutImage}
        className="mb-4 hidden lg:block w-[40vw] h-auto self-start mr-16"
      />
      <div>
        <h2 className="text-5xl font-medium mb-4">O nas</h2>
        <img src={aboutImage} className="mb-4 self-center lg:hidden " />
        <p className="lg:max-w-[500px]">
          Jesteśmy firmą budowlaną z wieloletnim doświadczeniem, specjalizującą
          się w realizacji kompleksowych projektów budowlanych. Nasza misja to
          tworzenie wyjątkowych przestrzeni, które łączą funkcjonalność z
          estetyką. Dzięki zaangażowaniu i pasji do budownictwa, każde zlecenie
          traktujemy indywidualnie, dbając o najdrobniejsze szczegóły.
        </p>
        <br />
        <p className="hidden lg:max-w-[500px]">
          Nasz zespół składa się z wysoko wykwalifikowanych specjalistów, którzy
          nieustannie podnoszą swoje kwalifikacje. Współpracujemy z renomowanymi
          partnerami i korzystamy z nowoczesnych technologii, co pozwala nam
          realizować projekty zgodnie z najwyższymi standardami jakości. Zaufaj
          nam, a przekształcimy Twoje wizje w rzeczywistość.
        </p>
        <button className="bg-primary self-start md:self-center text-white text-base rounded-lg px-4 py-2 border-transparent hover:bg-background hover:text-black hover:border-primary border-2 duration-500 transition-all active:bg-primary mt-2 ">
          Dowiedz się więcej
        </button>
      </div>
    </div>
  );
}

export default About;
