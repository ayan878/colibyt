import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/zennit-light.svg?react";
import { RiArrowDropDownLine } from "react-icons/ri";
import HoverLink from "./ButtonLink";
import ButtonLink from "./ButtonLink";

function Header() {
  return (
    <div className="flex items-center justify-between bg-coliColor text-white px-4">
      <Logo className="w-36 h-36 " />
      <div className="flex items-center justify-between gap-4 text-white font-normal">
        <button className="flex items-end justify-between">
          Services
          <RiArrowDropDownLine />
        </button>
        <button className="flex items-end justify-between">
          Industries
          <RiArrowDropDownLine />
        </button>
        <button className="flex items-end justify-between">
          AboutUs
          <RiArrowDropDownLine />
        </button>
        <button className="flex items-end justify-between">
          Solutions
        </button>
      </div>
      <ButtonLink
        name="GET STARTED"
      />
    </div>
  );
}

export default Header;
