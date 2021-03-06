import type { NextPage } from "next";
import {
  ProfileCard,
  BlogHome,
  PortfolioContainer,
  ContactContainer,
  Layout,
} from "@components/index";
import "bootstrap/dist/css/bootstrap.min.css";

import Swal from "sweetalert2";

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
      <div className="blog-home-index-container" id="blog-home">
        <BlogHome />
      </div>
      <div className="portfolio-home-index-container" id="portfolio-home">
        <PortfolioContainer />
      </div>
      <div className="contact-home-container">
        <ContactContainer />
      </div>
    </>
  );
};

export default Home;
