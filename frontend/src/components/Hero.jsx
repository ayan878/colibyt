import img1 from "../assets/shape_image_1.webp";
import img2 from "../assets/shape_image_2.webp";
import img3 from "../assets/shape_image_3.webp";
import img4 from "../assets/shape_image_4.webp";
import img5 from "../assets/circle_engine_4.png";
import img6 from "../assets/circle_engine_3.webp";
import img7 from "../assets/circle_engine_2.webp";
import fevicon from "../assets/favicon_2.svg";

import TitleUnderLine from "../assets/shape_title_under_line.svg?react";
import HeroHeading from "./HeroHeading";
import ButtonLink from "./ButtonLink";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdRadioButtonChecked } from "react-icons/md";

function Hero() {
  return (
    <div className="-mt-2">
      <div className="flex w-full gap-16 overflow-hidden">
        <img
          src={img1}
          alt="Engine Image"
          className="object-contain w-3/4 h-20"
        />
        <div className="absolute left-4 top-32">
          <h1 className="text-white font-semibold text-md uppercase">
            Perfect Technology Solution
          </h1>
          <TitleUnderLine className="w-80 -mt-2" />
        </div>
        <img
          src={img3}
          alt="Engine Image"
          className="object-contain h-48 w-1/4"
        />
      </div>
      <div className="relative -top-24 grid grid-cols-2 gap-2 px-4">
        <div className="flex flex-col gap-4">
          <HeroHeading />
          <p className="font-semibold text-zinc-500">
            In today's rapidly evolving digital landscape, staying ahead of the
            curve is essential for businesses aiming to thrive and succeed.
          </p>
          <ul className="list-none text-white text-lg font-semibold relative">
            <div className="absolute border-l-2 -left-[5px] top-2 border-sky-500 h-[54px] mx-4"></div>
            <li className="relative pl-8 mb-2">
              <span className="absolute left-0 top-1 text-primary text-2xl">
                <MdRadioButtonChecked className="text-sky-500" />
              </span>
              Focus on quality first
            </li>
            <li className="relative pl-8 mb-2">
              <span className="absolute left-0 top-1 text-primary text-2xl">
                <MdRadioButtonChecked className="text-sky-500" />
              </span>
              Get to the market on time
            </li>
          </ul>
          <div className="flex text-white items-center gap-8">
            <ButtonLink name="CONTACT US TODAY" />
            <div className="flex items-center gap-2">
              <span className="text-xl text-white p-4 bg-green-500 rounded-full">
                <FaPhoneVolume className="animate-vibration" />
              </span>
              <a href="tel:+919205014238">
                <p className="text-zinc-300">CONTACT US DAILY </p>
                <strong>(+57) 314 2556260</strong>
                <br />
                <strong>(+91) 920 501 4238</strong>
              </a>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Software Consulting and Quality Development
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={img5} alt="Engine Image" />
          <div className="absolute flex items-center justify-center w-96 h-96">
            <img
              src={img6}
              alt="Engine Image"
              className="animate-rotateAntiClockwise"
            />
            <div className="absolute flex items-center justify-center w-80 h-80">
              <img
                src={img7}
                alt="Engine Image"
                className="w-full animate-rotateClockwise"
              />
              <div className="absolute items-center justify-center w-24">
                <img src={fevicon} alt="fevicon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full -mt-36 gap-16  overflow-x-clip ">
        <img
          src={img2}
          alt="Engine Image"
          className="object-contain w-3/4 h-48"
        />
        <img
          src={img4}
          alt="Engine Image"
          className="object-contain h-48 w-1/4 -mt-14 z-10"
        />
      </div>
    </div>
  );
}

export default Hero;
