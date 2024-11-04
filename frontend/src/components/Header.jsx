import { useState } from "react";
import Logo from "../assets/zennit-light.svg?react";
import ButtonLink from "./ButtonLink";
import { FiChevronDown } from "react-icons/fi";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import AboutUs from "../pages/AboutUs";
import Solutions from "../pages/Solutions";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleOnHover = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null); 
  };

  return (
    <div className="relative flex items-center justify-between bg-coliColor text-white px-4 py-2">
      <Logo className="w-32 h-20" />
      <div className="flex items-center justify-between gap-4 text-white font-semibold">
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
    </div>
  );
}

const Dropdown = ({ activeDropdown }) => {
  return (
    <div className="absolute bg-white text-black p-4 rounded shadow-md">
      {activeDropdown === "Services" && <Services/>}
      {activeDropdown === "Industries" && <Industries/>}
      {activeDropdown === "About Us" && <AboutUs/>}
      {activeDropdown === "Solutions" && <Solutions/>}
    </div>
  );
};

export default Header;
