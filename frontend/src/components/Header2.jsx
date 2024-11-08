import { useState } from "react";
import Logo from "../assets/images/site_logo/zennit-dark.svg";
import ButtonLink from "./ButtonLink";
import { FiChevronDown } from "react-icons/fi";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import AboutUs from "../pages/AboutUs";
import Solutions from "../pages/Solutions";
import { motion, useScroll, useTransform } from "framer-motion";

function Header2() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleOnHover = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 z-50 flex items-center justify-between bg-dark text-white px-4 py-2 w-full"
      style={{
        y: useTransform(scrollYProgress, [0, 0.1], ["-100%", "0%"]),
        opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
        backgroundColor: "white",
        textColor: "#00a0f1",
      }}
    >
      <img src={Logo} alt={Logo} className=" w-32 h-20" />
      <div className="flex items-center justify-between gap-4 text-primary font-semibold">
        {["Services", "Industries", "About Us", "Solutions"].map((item) => (
          <div
            key={item}
            className="relative"
            onMouseEnter={() => handleOnHover(item)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-end justify-between px-2  hover:border hover:border-black hover:rounded-full  ">
              {item}
              <FiChevronDown
                style={{
                  transition: "transform 0.2s",
                  transform:
                    activeDropdown === item
                      ? "rotateX(180deg)"
                      : "rotateX(0deg)",
                }}
              />
            </button>
            {activeDropdown === item && <Dropdown activeDropdown={item} />}
          </div>
        ))}
      </div>
      <ButtonLink name="GET STARTED" />
    </motion.div>
  );
}

const Dropdown = ({ activeDropdown }) => {
  return (
    <div className="absolute bg-white text-black p-4 rounded shadow-md">
      {activeDropdown === "Services" && <Services />}
      {activeDropdown === "Industries" && <Industries />}
      {activeDropdown === "About Us" && <AboutUs />}
      {activeDropdown === "Solutions" && <Solutions />}
    </div>
  );
};

export default Header2;
