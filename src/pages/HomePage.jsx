import Category from "../components/Category";
import HeroSection from "../components/HeroSection";
import HomePageProductCard from "../components/HomePageProductCard";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
    </Layout>
  );
};

export default HomePage;
