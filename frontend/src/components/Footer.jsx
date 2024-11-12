import {
  FaArrowRight,
  FaCircleCheck,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Shape2 from "../assets/images/shapes/shape_space_2.svg";
import mail from "../assets/images/icons/icon_mail_2.svg";
import { Link } from "react-router-dom";
const servicePills = [
  "DevOps Services",
  "Custom Web Apps",
  "App Development",
  "Web Development",
  "Software Solutions",
  "Enterprise Apps",
];

function Footer() {
  return (
    <div className="bg-dark overflow-hidden relative">
      <img src={Shape2} alt="space2" className="w-[530px] mx-auto mb-20" />
      <div className="relative z-10 flex items-center justify-between animate-slideLeft gap-8">
        {servicePills.concat(servicePills).map((pill, index) => {
          return (
            <div key={index} className="relative group">
              {/* Service pill with rotation */}
              <div
                className="relative w-52 z-10 flex items-center gap-2 px-4 py-1 bg-transparent text-white rounded-full border border-black transition-all duration-300 hover:-rotate-3 hover:bg-white hover:text-black cursor-pointer"
                style={{ transformOrigin: "left center" }}
              >
                <FaCircleCheck className="fill-black w-8 h-8 -ml-3" />
                <span className="inline-block">{pill}</span>
              </div>

              {/* Black background div with infinite sliding animation */}
              <div className="absolute inset-0 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          );
        })}
      </div>
      <div className="px-20 mt-16 mb-8">
        {/* Grid layout for large screens, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[740px_minmax(900px,_1fr)_100px] gap-2">
          <div className="grid grid-cols-3">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-xl">Company</h1>
              <Link className="hover:text-primary">About</Link>
              <Link className="hover:text-primary">Our Achievements</Link>
              <Link className="hover:text-primary">Our Partners</Link>
              <Link className="hover:text-primary">Our Locations</Link>
              <Link className="hover:text-primary">Careers</Link>
              <Link className="hover:text-primary">Contacts</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-xl">Services</h1>
              <Link className="hover:text-primary">Web Development</Link>
              <Link className="hover:text-primary">App Development</Link>
              <Link className="hover:text-primary">Cloud Solutions</Link>
              <Link className="hover:text-primary">DevOps Services</Link>
              <Link className="hover:text-primary">Consulting</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Resources</h1>
              <Link className="hover:text-primary">Blog</Link>
              <Link className="hover:text-primary">Case Studies</Link>
              <Link className="hover:text-primary">White Papers</Link>
              <Link className="hover:text-primary">Support</Link>
            </div>
          </div>
          {/* Column 4 - Newsletter */}
          <div className="flex flex-col gap-4 w-2/5 -ml-16">
            <h1 className="font-bold text-xl">Newsletter</h1>
            <p className="text-zinc-400">
              Sign up for Colibyt Global's weekly newsletter to get the latest
              updates.
            </p>

            {/* Newsletter Form */}
            <form className="relative group flex items-center justify-between gap-1 bg-[#1b2155] rounded-full text-zinc-400 py-2 w-[360px] px-2">
              <label>
                <img src={mail} alt="mail-icon" className="ml-2 w-5 h-5" />
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent text-white focus:outline-none flex-1 p-2"
              />
              <button className="absolute right-2 flex items-center justify-center group-hover:space-x-2 bg-primary text-white rounded-full p-2 w-28 hover:bg-secondary group-hover:w-32 transition-all duration-300">
                <span className="inline-flex items-center group-justify-center text-center">
                  SEND
                </span>
                <span className="items-center transform translate-x-[14px] group-hover:translate-x-0 inline-flex opacity-0 group-hover:opacity-100 transition-all ease-in duration-75">
                  <FaArrowRight className="absolute inline-flex text-xs" />
                </span>
              </button>
            </form>

            {/* Social Media Icons */}
            <div className="flex  gap-4 mt-2">
              <Link
                to=""
                className="flex items-center justify-center text-xl text-white hover:text-primary border border-[#1b2155]  rounded-full p-1 w-10 h-10"
              >
                <FaFacebookF />
              </Link>
              <Link
                to=""
                className="flex items-center justify-center text-xl text-white hover:text-primary border border-[#1b2155]  rounded-full p-1 w-10 h-10"
              >
                <FaXTwitter />
              </Link>
              <Link
                to=""
                className="flex items-center justify-center text-xl text-white hover:text-primary border border-[#1b2155]  rounded-full p-1 w-10 h-10"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to=""
                className="flex items-center justify-center text-xl text-white hover:text-primary border border-[#1b2155] rounded-full p-1 w-10 h-10"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative z-10">
        <div
          className="relative z-10 flex items-center justify-between px-16 bg-zinc-400 py-2 transition-all group-hover:scale-105 group-hover:translate-y-2 group-hover:opacity-100"
          style={{
            clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <span>
            Copyright © 2020-2024 Colibyt Technologies, All rights reserved.
          </span>
          <span className="flex items-center justify-between">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </span>
        </div>

        {/* Shadow applied to a full-width div */}
        <div
          className="absolute inset-0 -top-2 group-hover:-top-4 group-hover:bg-dark bg-[#1b2155] z-0 transition-all"
          style={{
            clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
