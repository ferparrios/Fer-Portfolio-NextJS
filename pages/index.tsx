import type { NextPage } from "next";
import styles from '../styles/Home.module.css'
import {
  ProfileCard,
  BlogHome,
  PortfolioContainer,
  ContactContainer,
  Layout,
} from "@components/index";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  return (
    <Layout>
      
        <ProfileCard />
        <div className="blog-home-index-container">
          <BlogHome />
        </div>
        <PortfolioContainer />
        <ContactContainer />
      
    </Layout>
  );
};

export default Home;
