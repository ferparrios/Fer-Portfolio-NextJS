import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PortfolioGrid } from "@components/index";
import { useRouter } from "next/router";
import { en } from "i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
// import { portfolioData } from "banners-data";

export const PortfolioContainer = () => {
  const { locale } = useRouter();
  const portfolioData = [
    {
      image: "images/cios-mobile-app-logo.png",
      title: "Fincite | Cios",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink: "",
      iosLink: "",
      description:
        (locale === "es-PE" && es.ciosDescription) ||
        (locale === "en-US" && en.ciosDescription) ||
        (locale === "fr-CA" && fr.ciosDescription),
      tecnologies: [
        "Flutter",
        "Dart",
        "Provier",
        "iOS",
        "Android",
        "Android Studio",
        "X-Code",
        "Git",
      ],
    },
    {
      image: "images/backcountry-logo.png",
      title: "Backcountry",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.backcountry.app&hl=en_US",
      iosLink:
        "https://apps.apple.com/us/app/backcountry-outdoor-gear/id450920999",
      description:
        (locale === "es-PE" && es.backcountryDescription) ||
        (locale === "en-US" && en.backcountryDescription) ||
        (locale === "fr-CA" && fr.backcountryDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Mobx",
        "iOS",
        "Android",
        "Jest",
        "React Testing Library",
        "X-Code",
      ],
    },
    {
      image: "images/banco-de-chile-logo.png",
      title: "Banco de Chile",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink:
        "https://play.google.com/store/apps/details?id=cl.bancochile.mi_banco&hl=es_CL",
      iosLink: "https://apps.apple.com/cl/app/mi-banco-chile/id1516872542",
      description:
        (locale === "es-PE" && es.bancoChileDescription) ||
        (locale === "en-US" && en.bancoChileDescription) ||
        (locale === "fr-CA" && fr.bancoChileDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Redux",
        "iOS",
        "Android",
        "Jest",
        "React Testing Library",
      ],
    },
    {
      image: "images/vizi_icon.png",
      title: "Vizi Biker",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink: "",
      iosLink: "",
      description:
        (locale === "es-PE" && es.viziBikerDescription) ||
        (locale === "en-US" && en.viziBikerDescription) ||
        (locale === "fr-CA" && fr.viziBikerDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Redux",
        "iOS",
        "Android",
        "Jest",
      ],
    },
    {
      image: "images/vizi_icon.png",
      title: "Vizi Business",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink: "",
      iosLink: "",
      description:
        (locale === "es-PE" && es.viziBusinessDescription) ||
        (locale === "en-US" && en.viziBusinessDescription) ||
        (locale === "fr-CA" && fr.viziBusinessDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Redux",
        "iOS",
        "Android",
        "Jest",
      ],
    },
    {
      image: "images/audioguia-castillo-logo.png",
      title: "Audioguía Castillo Peñafiel",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.bitseat.audioguia_castillo_de_penafiel",
      iosLink:
        "https://apps.apple.com/ph/app/audiogu%C3%ADa-castillo-de-pe%C3%B1afiel/id6478180046",
      description:
        (locale === "es-PE" && es.castilloPenaFielDescription) ||
        (locale === "en-US" && en.castilloPenaFielDescription) ||
        (locale === "fr-CA" && fr.castilloPenaFielDescription),
      tecnologies: [
        "Flutter",
        "Dart",
        "Provier",
        "iOS",
        "Android",
        "Android Studio",
        "X-Code",
        "Git",
      ],
    },

    {
      image: "images/frontdoor-logo.png",
      title: "Frontdoor",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.frontdoor.app.prod&hl=en_US",
      iosLink: "https://apps.apple.com/us/app/frontdoor/id6443921342",
      description:
        (locale === "es-PE" && es.frontdoorDescription) ||
        (locale === "en-US" && en.frontdoorDescription) ||
        (locale === "fr-CA" && fr.frontdoorDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Redux",
        "X-State",
        "iOS",
        "Android",
        "Jest",
        "Git",
      ],
    },
    {
      image: "images/worthy-mobile-app-icon.png",
      title: "Worthy Mentoring",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      productionLink: "https://apps.apple.com/us/app/frontdoor/id6443921342",
      androidLink:
        "https://play.google.com/store/apps/details?id=org.worthymentoring2.app",
      iosLink: "https://apps.apple.com/us/app/worthy-mentoring/id6444069149",
      description:
        (locale === "es-PE" && es.worthyDescription) ||
        (locale === "en-US" && en.worthyDescription) ||
        (locale === "fr-CA" && fr.worthyDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Expo",
        "Python",
        "Django",
        "Redux",
        "X-State",
        "iOS",
        "Android",
        "Jest",
        "Git",
      ],
    },
    {
      image: "images/hive-wealth-icon.png",
      title: "Hive Wealth",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      androidLink:
        "https://play.google.com/store/apps/details?id=org.hivewealth.app&hl=es&gl=US",
      iosLink: "",
      description:
        (locale === "es-PE" && es.hiveDescription) ||
        (locale === "en-US" && en.hiveDescription) ||
        (locale === "fr-CA" && fr.hiveDescription),
      tecnologies: [
        "React Native",
        "Typescript",
        "Expo",
        "Redux",
        "X-State",
        "iOS",
        "Android",
        "Jest",
        "Git",
      ],
    },
    {
      image: "images/educared-logo.png",
      title: "Educared | Fundación Telefónica",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      productionLink: "https://educared.fundaciontelefonica.com.pe/",
      description:
        (locale === "es-PE" && es.educaredDescription) ||
        (locale === "en-US" && en.educaredDescription) ||
        (locale === "fr-CA" && fr.educaredDescription),
      tecnologies: [
        "Web Development",
        "Javascript",
        "WordPress",
        "PHP",
        "AWS",
        "React Native",
      ],
    },
    {
      image: "images/valos_logo.png",
      title: "Valor Agency",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      productionLink: "https://www.valor.com.pe/",
      description:
        (locale === "es-PE" && es.valorDescription) ||
        (locale === "en-US" && en.valorDescription) ||
        (locale === "fr-CA" && fr.valorDescription),
      tecnologies: ["Javascript", "HTML", "CSS", "WordPress", "PHP", "AWS"],
    },
    {
      image: "images/title_villaplanet.png",
      title: "Villaplanet Landing Page & Administration Platform",
      githubLink: "https://github.com/ferparrios/React-News-Search",
      productionLink:
        "https://educared.fundaciontelefonica.com.pe/villaplanet/",
      description:
        (locale === "es-PE" && es.villaPlanetDescription) ||
        (locale === "en-US" && en.villaPlanetDescription) ||
        (locale === "fr-CA" && fr.villaPlanetDescription),
      tecnologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Angular",
        "WordPress",
        "PHP",
        "Laravel",
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const itemsPerPage = isMobile ? 2 : 6;
  const pagesCount = Math.ceil(portfolioData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pagesCount - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, portfolioData.length);

  return (
    <section className="md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {portfolioData.slice(startIndex, endIndex).map((item, index) => (
          <PortfolioGrid
            title={item.title}
            image={item.image}
            link={item.productionLink}
            androidLink={item.androidLink}
            iosLink={item.iosLink}
            key={startIndex + index}
            description={item.description}
            tecs={item.tecnologies}
          />
        ))}
      </div>
      {pagesCount > 1 && (
        <div className="flex justify-center mt-4 gap-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-white text-black rounded-md hover:scale-150 hover:bg-black hover:text-white border-2 transition duration-700 ease-in-out"
          >
            {[
                locale === "es-PE" && es.buttonPrev,
                locale === "en-US" && en.buttonPrev,
                locale === "fr-CA" && fr.buttonPrev,
              ]}
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pagesCount - 1}
            className="px-4 py-2 bg-white text-black rounded-md hover:scale-150 hover:bg-black hover:text-white border-2 transition duration-700 ease-in-out"
          >
            {[
                locale === "es-PE" && es.buttonNext,
                locale === "en-US" && en.buttonNext,
                locale === "fr-CA" && fr.buttonNext,
              ]}
          </button>
        </div>
      )}
    </section>
  );
};
