import type { NextPage } from "next";
import {
  ProfileCard,
  PortfolioContainer,
  ContactContainer,
  Layout,
  About,
  SocialMediaBox,
} from "@components/index";
import { Skills } from "@components/Skills/Skills";
// import "bootstrap/dist/css/bootstrap.min.css";

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
      <About />
      <Skills />
      <PortfolioContainer />
      <ContactContainer />
      <SocialMediaBox />
    </>
  );
};

export default Home;
