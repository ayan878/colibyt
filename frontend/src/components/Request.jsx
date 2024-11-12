import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ButtonLink from "./ButtonLink";
import { FaGlobe, FaPhoneVolume, FaUser } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import titleUnderline from "../assets/images/shapes/shape_title_under_line.svg";

function Request() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-light">
      {/* Left Section */}
      <div className="bg-white rounded-lg shadow-md p-6 lg:w-2/5 space-y-6">
        <div className="relative w-48">
          <img
            src={titleUnderline}
            alt="title-underline"
            className="absolute w-60 -left-16 top-4"
          />
          <span className="uppercase">You Are Here</span>
        </div>
        <h1 className="text-3xl font-semibold text-primary">Let's Start</h1>
        <p className="text-gray-500">
          Initiating Your Journey to Success and Growth
        </p>

        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <span className=" bg-primary rounded-full p-2">
              <FaPhoneVolume className="text-white" />
            </span>
            <Link to="tel:+919205785238" className="text-blue-500">
              +91 920 578 5238
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className=" bg-primary rounded-full p-2">
              <FaEnvelope className="text-white" />
            </span>
            <Link to="mailto:developers@colibyt.com" className="text-blue-500">
              developers@colibyt.com
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className=" bg-primary rounded-full p-2">
              <FaMapMarkerAlt className="text-white" />
            </span>
            <Link
              to="https://maps.app.goo.gl/Ddsy4NF1i4CQy1yR7"
              className="text-blue-500"
            >
              9th/10th floor, Graphix 2, Block A, Industrial Area, Sector 62,
              Noida, Uttar Pradesh 201301
            </Link>
          </li>
        </ul>

        <ul className="space-y-4 mt-6">
          <li className="relative z-0">
            <span className="absolute left-4 w-[1px] h-44 top-0 bg-primary z-0 "></span>
          </li>
          <li className="relative z-10 flex items-center gap-2 bg-white">
            <span className="flex items-center justify-center font-bold text-lg text-blue-500 border border-primary rounded-full w-8 h-8">
              01
            </span>
            <span>Share your requirements</span>
          </li>
          <li className="relative z-10 flex items-center gap-2 bg-white">
            <span className="flex items-center justify-center font-bold text-lg text-blue-500 border border-primary rounded-full w-8 h-8">
              02
            </span>
            <span>Discuss them with our experts</span>
          </li>
          <li className="relative z-10 flex items-center gap-2 bg-white">
            <span className="flex items-center justify-center font-bold text-lg text-blue-500 border border-primary rounded-full w-8 h-8">
              03
            </span>
            <span>Get a free quote</span>
          </li>
          <li className="relative z-10 flex items-center gap-2 bg-white">
            <span className="flex items-center justify-center font-bold text-lg text-blue-500 border border-primary rounded-full w-8 h-8">
              04
            </span>
            <span>Start the project</span>
          </li>
        </ul>
      </div>

      {/* Right Section (Form) */}
      <div className="bg-white rounded-lg shadow-md p-6 lg:w-3/5 space-y-6">
        <h2 className="text-3xl font-semibold text-primary">Let's Connect!</h2>
        <p className="text-gray-500">
          Send us a message, and we'll promptly discuss your project with you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="group flex items-center justify-between border rounded-lg px-2 text-gray-300 focus-within:bg-sky-100">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 focus:outline-none bg-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="group flex items-center justify-between border rounded-lg px-2 text-gray-300 focus-within:bg-sky-100">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 focus:outline-none bg-transparent"
            />
          </div>

          {/* Phone Input */}
          <div className="group flex items-center justify-between border rounded-lg px-2 text-gray-300 focus-within:bg-sky-100">
            <FaPhoneVolume className="text-gray-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone No."
              className="w-full p-4 focus:outline-none bg-transparent"
            />
          </div>

          {/* Company Input */}
          <div className="group flex items-center justify-between border rounded-lg px-2 text-gray-300 focus-within:bg-sky-100">
            <FaGlobe className="text-gray-500" />
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              className="w-full p-4 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="group flex items-start justify-between border rounded-lg px-2 text-gray-300 focus-within:bg-sky-100">
          <IoChatbubblesOutline className="text-gray-500 mt-5" />
          <textarea
            name="message"
            placeholder="How can we help you?"
            className="w-full h-32 p-4 rounded-lg focus:outline-none focus:bg-sky-100"
          ></textarea>
        </div>

        {/* Submit Button */}
        <ButtonLink name="Send Request" className="w-fit" />
      </div>
    </div>
  );
}

export default Request;
