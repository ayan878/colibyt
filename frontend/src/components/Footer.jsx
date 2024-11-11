import { FaCircleCheck } from "react-icons/fa6";
import Shape2 from "../assets/images/shapes/shape_space_2.svg";

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
    <div className="bg-dark overflow-hidden">
      <img src={Shape2} alt="space2" className="w-[530px] mx-auto mb-20" />
      <div className="flex items-center justify-between animate-slideLeft gap-8">
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
        <div className="mt-24"></div>
      </div>
    </div>
  );
}

export default Footer;
