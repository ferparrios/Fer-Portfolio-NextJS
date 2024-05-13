import React from "react";
import { useRouter } from "next/router";
import { en } from "../../i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";

export const ProfileCard = () => {
  const { locale } = useRouter();
  return (
    <section className="p-12 md:p-44 mt-24 mx-auto block md:flex md:justify-center md:items-center">
      <div className="md:w-2/3 space-y-8 md:pl-14 ">
        <h1 className="text-4xl text-black font-bold">
          {[
            locale === "es-PE" && es.description,
            locale === "en-US" && en.description,
            locale === "fr-CA" && fr.description,
          ]}
        </h1>
        <p className="">
          {[
            locale === "es-PE" && es.about,
            locale === "en-US" && en.about,
            locale === "fr-CA" && fr.about,
          ]}
        </p>
        <button
          className="bg-white hover:bg-black hover:text-white text-black font-semibold py-4 px-6 border border-gray-400 rounded shadow text-xl transition duration-500 ease-in-out"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              window.scrollTo({
                top: contactSection.offsetTop,
                behavior: "smooth",
              });
            }
          }}
        >
          {[
            locale === "es-PE" && es.botonHablemos,
            locale === "en-US" && en.botonHablemos,
            locale === "fr-CA" && fr.botonHablemos,
          ]}
        </button>
      </div>

      <div className="md:w-1/3 md:flex md:justify-center md:items-center">
        <img className="" src="images/fer-avatar-png.png" alt="img-avatar" />
      </div>
    </section>
  );
};
