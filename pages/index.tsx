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
      <div className={styles.container}>
        <ProfileCard />
        <BlogHome />
        <PortfolioContainer />
        <ContactContainer />
      </div>
    </Layout>
  );
};

export default Home;
