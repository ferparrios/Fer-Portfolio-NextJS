import React from "react";
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
// import "animate.css";

export const ProfileCard = () => {
  const { locale } = useRouter();
  return (
    <section className="p-12 md:p-32 mt-24 mx-auto block md:flex md:justify-center md:items-center">
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl text-black font-bold">
          Fullstack Developer, problem solver
        </h1>
        <p className="">
          Me especializo en crear soluciones en codigo que puedan ayudarte a
          materializar tu idea y lograr tus metas, con más de 7 años en la
          industria y experiencia con clientes en varios paises alrededor del
          mundo, si te gusta mi trabajo, conversemos.
        </p>
        <button className="bg-white hover:bg-black hover:text-white text-black font-semibold py-4 px-6 border border-gray-400 rounded shadow text-xl">
          Let's Talk
        </button>

        {/* <p className="">
            {[
              locale === "es-PE" && es.profileTitle,
              locale === "en-US" && en.profileTitle,
              locale === "fr-CA" && fr.profileTitle,
            ]}
          </p>
          <h1 className="">{[en.name]}</h1>
          <p>
            {[
              locale === "es-PE" && es.description,
              locale === "en-US" && en.description,
              locale === "fr-CA" && fr.description,
            ]}
          </p> */}
      </div>

      <div className="md:w-1/2 md:flex md:justify-center md:items-center">
        <img className="" src="images/fer-avatar-png.png" alt="img-avatar" />
      </div>
    </section>
  );
};
