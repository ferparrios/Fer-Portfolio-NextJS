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
  Swal.fire({
    title: "Attention!",
    text: "the page is still under development, so you may find one or two errors, it will be completed soon, have a nice day :)",
    icon: "info",
    confirmButtonText: "Done",
  });

  return (
    // <Layout>
    <>
      <ProfileCard />
      <div className="blog-home-index-container">
        <BlogHome />
      </div>
      <PortfolioContainer />
      <div className="blog-home-index-container">
        <ContactContainer />
      </div>
    </>
    // </Layout>
  );
};

export default Home;
