import BrandSlider from "../components/BrandSlider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
// import Services from "./Services";

function Home() {
  return (
    <div className="bg-primary">
      <Header />
      <Hero/>
      <BrandSlider/>
      <OurServices/>
      {/* <Services/> */}
    </div>
  );
}

export default Home;
