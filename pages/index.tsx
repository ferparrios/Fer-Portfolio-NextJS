import type { NextPage } from "next";
import {
  ProfileCard,
  PortfolioContainer,
  ContactContainer,
  OpenSourceProjectsContainer,
} from "@components/index";
import { Skills } from "@components/Skills/Skills";
import { en } from "i18n/en";
import { es } from "i18n/es";
import { fr } from "i18n/fr";
import { useRouter } from "next/router";

// import Swal from "sweetalert2";

const Home: NextPage = () => {
  const { locale } = useRouter();
  // Swal.fire({
  //   title: "Attention!",
  //   text: "the page is still under development, so you may find one or two errors, it will be completed soon, have a nice day :)",
  //   icon: "info",
  //   confirmButtonText: "Done",
  // });

  // const { locale, locales } = useRouter()
  // console.log("Locale: ", locale)
  // console.log("Available Locales: ", locales)

  return (
    <>
      <ProfileCard />
      <div className="px-12">
        <h2 className="text-xl md:text-3xl font-bold">
          {[
            locale === "es-PE" && es.skillsTilte,
            locale === "en-US" && en.skillsTilte,
            locale === "fr-CA" && fr.skillsTilte,
          ]}
        </h2>
      </div>
      <Skills />
      <div className="px-12" id="portfolio">
        <h2 className="text-xl md:text-3xl font-bold">
          {[
            locale === "es-PE" && es.recentWorkTitle,
            locale === "en-US" && en.recentWorkTitle,
            locale === "fr-CA" && fr.recentWorkTitle,
          ]}
        </h2>
      </div>
      <PortfolioContainer />
      <div className="px-12 pt-12">
        <h2 className="text-xl md:text-3xl font-bold">
          {[
            locale === "es-PE" && es.openSourceProjectsTitle,
            locale === "en-US" && en.openSourceProjectsTitle,
            locale === "fr-CA" && fr.openSourceProjectsTitle,
          ]}
        </h2>
      </div>
      <OpenSourceProjectsContainer />
      <div className="px-12 pt-12">
        <h2 className="text-xl md:text-3xl font-bold">
          {[
            locale === "es-PE" && es.connectTitle,
            locale === "en-US" && en.connectTitle,
            locale === "fr-CA" && fr.connectTitle,
          ]}
        </h2>
      </div>
      <ContactContainer />
    </>
  );
};

export default Home;
