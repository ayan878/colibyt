import About from "../components/About";
import BrandSlider from "../components/BrandSlider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import WorkingProcess from "../components/WorkingProcess";
// import Services from "./Services";
import Header2 from "../components/Header2"

function Home() {
  return (
    <div>
      <Header2/>
      <Header />
      <Hero/>
      <BrandSlider/>
      <OurServices/>
      <About/>
      <WorkingProcess/>
      {/* <Services/> */}
    </div>
  );
}

export default Home;
