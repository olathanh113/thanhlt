import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
    return `
          ${Header()}
          ${HeroSection()}
          ${About()}
          ${Portfolio()}
          ${Contact()}
          ${Footer()}
  
      `;
  };
  export default HomePage;