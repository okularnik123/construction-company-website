import React from "react";

function Contact() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-full max-w-screen-2xl items-center justify-center px-8 mt-16 lg:px-[100px]">
        <div className="flex flex-col w-full mr-12">
          <h2 className="text-5xl font-medium mb-4">Kontakt</h2>
          <p className="text-black75 font-medium mb-3 lg:hidden">
            Zostaw nam swoje dane, a my się odezwiemy. <br /> Odpowiadamy już w
            24 godz.
          </p>
          <form action="" className="flex flex-col max-w-[500px] w-full">
            <input
              type="text"
              placeholder="Imię"
              name="name"
              id="name"
              className="border-primary border-[1px] p-1 rounded-lg w-full mb-2"
            />
            <input
              type="text"
              placeholder="Nazwisko"
              name="surname"
              id="surname"
              className="border-primary border-[1px] p-1 rounded-lg w-full mb-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="border-primary border-[1px] p-1 rounded-lg w-full mb-2"
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Nr. tel"
              className="border-primary border-[1px] p-1  rounded-lg w-full mb-2"
            />
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Opis"
              className="border-primary border-[1px] p-1 rounded-lg w-full"
            />
            <button className="bg-primary self-start text-white text-base rounded-lg px-4 py-1 border-transparent hover:bg-background hover:text-black hover:border-primary border-2 duration-500 transition-all active:bg-primary mt-2 ">
              Wyślij
            </button>
          </form>
        </div>
        <div className="min-w-[450px] pb-24 flex-col items-center hidden lg:flex ">
          <div>
            <h3 className=" text-4xl font-medium">Zainteresowany?</h3>
            <p className=" font-medium text-black75">
              Zostaw nam swoje dane, a my się odezwiemy.
              <br />
              Odpowiadamy juz w 24godz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
