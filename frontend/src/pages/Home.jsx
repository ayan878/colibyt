import About from "../components/About";
import BrandSlider from "../components/BrandSlider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
// import Services from "./Services";

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <BrandSlider/>
      <OurServices/>
      <About/>
      {/* <Services/> */}
    </div>
  );
}

export default Home;
