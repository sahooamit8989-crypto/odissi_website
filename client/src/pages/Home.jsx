import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SliderImage from "../componets/sliderImage";
import Hero from "../componets/Hero";
import HomeAbout from "../componets/HomeAbout";
import HomePrograms from "../componets/HomePrograms";
import HomeCTA from "../componets/HomeCTA";

const Home = () => {
  return (
    <>
      {/* ================= SLIDER ================= */}
      <SliderImage />
      <Hero/>
      <HomeAbout/>
      <HomePrograms/>
      <HomeCTA/>
    </>
  );
};

export default Home;
