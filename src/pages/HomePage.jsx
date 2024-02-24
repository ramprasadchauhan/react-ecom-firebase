import Category from "../components/Category";
import HeroSection from "../components/HeroSection";
import HomePageProductCard from "../components/HomePageProductCard";
import Layout from "../components/Layout";
import Track from "../components/Track";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
    </Layout>
  );
};

export default HomePage;
