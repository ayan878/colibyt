import shapeAngle from "../assets/images/shapes/shape_angle_2.webp";
import shape from "../assets/images/shapes/shape_space_1.svg";
import titleUnderline from "../assets/images/shapes/shape_title_under_line.svg";
import blockchain from "../assets/images/icons/nft-blocks.svg";
import desktop from "../assets/images/icons/icon_monitor_2.svg";
import bitcoin from "../assets/images/icons/research.png";
import mobile from "../assets/images/icons/icon_phone.svg";
import code from "../assets/images/icons/icon_code.svg";
import prog from "../assets/images/icons/icon_programming.svg";
import bug from "../assets/images/icons/icon_bug.svg";
import progTree from "../assets/images/icons/icon_programming_tree.svg";
import { MdRadioButtonChecked } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import shapeAngle1 from "../assets/images/shapes/shape_angle_1.webp";

const services = [
  {
    icon: blockchain,
    title: "NFT & Blockchain Development",
    list: [
      "Blockchain architecture",
      "Blockchain integration",
      "Blockchain as a service",
      "Business Implementation",
      "Blockchain & Token Audit",
    ],
  },
  {
    icon: bitcoin,
    title: "Blockchain & Token Audit ",
    list: [
      "Security Assessment & Identify vulnerabilities",
      "Smart Contract Review potential bugs or exploits",
      "Tokenomics Analysis token distribution and supply mechanisms.",
      "Performance Evaluation Assess the efficiency and speed",
    ],
  },
  {
    icon: code,
    title: "Custom Software Development",
    list: [
      "Software architecture design",
      "System integration services",
      "Data migration services",
      "Legacy app modernization",
    ],
  },
  {
    icon: progTree,
    title: "Audit & IT Consulting Services",
    list: [
      "TechGuard Audit",
      "CyberSafe Audit & IT Consulting",
      "AssuranceEdge & IT Consulting",
      "IT Sentry Audit & IT Consulting",
    ],
  },
  {
    icon: desktop,
    title: "Web Application Design and Development",
    list: [
      "Web app development services",
      "Web portal development services",
      "Website development services",
      "Offshore web development",
    ],
  },
  {
    icon: mobile,
    title: "Mobile App Development",
    list: [
      "Android development services",
      "iOS app development services",
      "Mobile application design services",
      "Enterprise mobile app development",
    ],
  },
  {
    icon: bug,
    title: "Best UI/UX Design Services",
    list: [
      "PixelPerfection UI/UX Design",
      "DesignCraft UI/UX Design",
      "CreativeWave UI/UX Design",
      "InterfaceGenius UI/UX Design",
    ],
  },
  {
    icon: prog,
    title: "Maintenance and Customer Support",
    list: [
      "CareCraft Maintenance",
      "FixItPro Maintenance",
      "TechCare Maintenance",
      "AssistEdge Maintenance",
    ],
  },
];

function OurServices() {
  return (
    <div className="relative bg-light">
      <div className="flex">
        {/* First Image with Shape Angle */}
        <img
          src={shapeAngle}
          alt="Shape Angle Image"
          className="w-[282px] object-contain"
        />

        {/* Second Image with Shape Space */}
        <img
          src={shape}
          alt="Shape Space Image"
          className="h-[28px] object-contain"
        />
      </div>

      <div className="relative -top-32 flex flex-col items-center justify-center">
        <span className="text-xl uppercase text-center">Our Services</span>
        <img
          src={titleUnderline}
          alt={titleUnderline}
          className="-mt-2 -ml-10"
        />
        <h1 className="text-5xl font-bold tracking-wide mt-6">
          How We Can <span className="text-secondary">Help</span> You
        </h1>
      </div>

      {/* Services */}
      <div className="-mt-12 grid grid-cols-4 gap-6 px-4 z-10">
        {services.map((service, index) => (
          <div key={index} className="relative mb-4">
            <div className="group relative h-96 flex flex-col items-start border-2 border-primary overflow-hidden p-4 bg-white clip-path-diamond transition-transform hover:-translate-x-4 hover:-translate-y-2 active:translate-x-0 active:translate-y-0 z-10">
              {/* Icon (If available) */}
              {service.icon && (
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 object-contain mb-4"
                />
              )}
              {/* Title */}
              <h1 className="text-2xl font-semibold text-primary mb-2 gap-2">
                {service.title}
                <span className="inline-flex items-center ml-2 transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 ease-out">
                  <FaArrowRight className="inline-flex text-lg" />
                </span>
              </h1>

              {/* List */}
              <ul className="space-y-4 font-regular">
                {service.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 bg-gradient-to-l from-sky-200 to-#fffff p-2 text-lg rounded-md text-slate-500"
                  >
                    <MdRadioButtonChecked className="text-primary w-5 h-5 mt-[6px]" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              <span className="absolute inline-block origin-top-right rotate-[54deg] bg-primary -right-5 top-24 w-32 border-2 border-primary z-20"></span>
            </div>
            <div className="absolute inset-0 clip-path-diamond bg-primary z-0"></div>
          </div>
        ))}
      </div>

      {/* Image positioned below the services layer */}
      <img
        src={shapeAngle1}
        alt={shapeAngle1}
        className="absolute bottom-0 right-0 w-56 object-contain z-0"
      />
    </div>
  );
}

export default OurServices;
