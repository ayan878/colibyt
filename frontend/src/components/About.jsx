import shape2 from "../assets/shape_space_2.svg";
import TitleUnderLine from "../assets/shape_title_under_line.svg?react";
import about from "../assets/about/about_image_6.webp";
import ButtonLink from "./ButtonLink";
import avatar1 from "../assets/avtar/avatar_1.webp";
import avatar2 from "../assets/avtar/avatar_2.webp";
import avatar3 from "../assets/avtar/avatar_3.webp";
import shape1 from "../assets/shape_line.webp";
import { CiGlobe } from "react-icons/ci";

function About() {
  return (
    <div className="relative bg-aboutBackground bg-cover bg-no-repeat bg-center pt-[10px] pb-[1600px] bg-dark">
      <img
        src={shape2}
        alt="Shape"
        className="absolute top-0 left-48 w-[800px] h-auto"
      />
      {/* Adding a space below */}
      <div className="mt-36 grid grid-cols-2">
        <div className="space-y-4 px-4 mt-28">
          <div className="">
            <h1 className="text-white font-semibold text-lg uppercase">
              About Us
            </h1>
            <TitleUnderLine className="w-28 -mt-3" />
          </div>
          <h1 className="text-5xl text-white font-bold">
            Colibyt <span className="text-primary">Mission & Goal</span>
          </h1>
          <p className="text-zinc-300 text-xl">
            At Colibyt, our mission is to empower businesses through innovative
            software solutions that streamline operations, foster growth, and
            drive success. With a commitment to excellence and customer
            satisfaction we strive.
          </p>
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="">
            <img src={about} alt="about" className="rounded-md w-48" />
          </div>
          <div className="">
            <p className="absolute top-80  left-2 text-md text-dark px-6 z-50">
              Happy Customer
            </p>
            <div className="relative flex gap-4 z-0 text-white">
              <div className="bg-light w-72 h-36 rounded-lg before:absolute before:left-6 before:-bottom-10 before:w-10 before:h-10 before:rounded-lg before:bg-transparent before:shadow-[6px_-6px_0px_#E1F4FD] after:absolute after:left-72 after:bottom-20 after:w-10 after:h-10 after:rounded-lg after:bg-transparent after:shadow-[-6px_6px_0px_#E1F4FD]">
                <ul className="relative flex items-center w-auto pt-4 px-6 z-50">
                  <li className="relative">
                    <img
                      src={avatar1}
                      alt={avatar1}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  </li>
                  <li className="relative -ml-4">
                    <img
                      src={avatar2}
                      alt={avatar2}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  </li>
                  <li className="relative -ml-4">
                    <img
                      src={avatar3}
                      alt={avatar3}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  </li>
                  <li className="relative -ml-4 flex items-center justify-center">
                    <span className="font-bold text-lg w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center text-center justify-center">
                      6K+
                    </span>
                  </li>
                </ul>
              </div>
              <ButtonLink className="rounded-lg" name="LEARN MORE" />
            </div>
            <div className="relative flex">
              {/* <div className="relative inline-block ">
                <CiGlobe className="icon text-white w-16 h-16 py-4" />
              </div> */}
              <div className="relative inline-block">
                {/* The main icon */}
                <CiGlobe className="text-white w-16 h-16 py-4 relative z-10" />

                {/* First circle (with wave animation) */}
                <div className="absolute inset-0 border-4 border-white rounded-full animate-waveEffect z-0" />

                {/* Second circle (delayed wave animation) */}
                <div className="absolute inset-0 border-4 border-white rounded-full animate-waveEffectDelay z-0" />
              </div>

              <div className="relative -top-20 h-40 w-[420px] rounded-lg clip-path-sim bg-light flex items-center justify-between px-12 z-30 text-primary">
                <div>
                  <h1 className="font-bold text-5xl">6 K+</h1>
                  <p>Projects Done</p>
                </div>
                <div>
                  <h1 className="font-bold text-5xl"> 1 0 0 %</h1>
                  <p>Results Guaranteed</p>
                </div>
              </div>
            </div>
            <img src={shape1} alt={shape1} className="h-44 -mt-[186px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
