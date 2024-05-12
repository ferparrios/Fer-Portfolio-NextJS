import type { NextPage } from "next";
import {
  ProfileCard,
  PortfolioContainer,
  ContactContainer,
  Layout,
  About,
  SocialMediaBox,
  OpenSourceProjectsContainer,
} from "@components/index";
import { Skills } from "@components/Skills/Skills";

// import Swal from "sweetalert2";

const Home: NextPage = () => {
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
          Services that you can find with me:
        </h2>
      </div>
      <Skills />
      <div className="px-12" id="portfolio">
        <h2 className="text-xl md:text-3xl font-bold">
          My Work: Highlighted Software development projects
        </h2>
      </div>
      <PortfolioContainer />
      <div className="px-12 pt-12">
        <h2 className="text-xl md:text-3xl font-bold">Open Source Projects</h2>
      </div>
      <OpenSourceProjectsContainer />
      <div className="px-12 pt-12">
        <h2 className="text-xl md:text-3xl font-bold">Let's connect</h2>
      </div>
      <ContactContainer />
      {/* <SocialMediaBox /> */}
    </>
  );
};

export default Home;
