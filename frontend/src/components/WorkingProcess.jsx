import Shape from "../assets/images/shapes/shape_space_3.svg?react";
import ShapeLine2 from "../assets/images/shapes/shape_line_2.svg?react";
import ShapeLine3 from "../assets/images/shapes/shape_line_3.svg?react";
import TitleUnderLine from "../assets/images/shapes/shape_title_under_line.svg?react";
import ShapeLine4 from "../assets/images/shapes/shape_line_4.svg?react";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import hexagon from "../assets/images/shapes/shape_polygon.webp";
import { technologies, approaches } from "../data/approachesAndTechnologies";

function WorkingProcess() {
  // State to track which item is open (by index)
  const [openIndex, setOpenIndex] = useState(null);

  const [category, setCategory] = useState("WebPlatform");

  const handleToggle = (index) => {
    // Toggle open/close for a specific item
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategory = (selectCategory) => {
    setCategory(selectCategory);
  };

  return (
    <div className="bg-light">
      <Shape className="w-[800px] h-auto mx-auto" />
      <ShapeLine2 className="-mt-8" />
      {/* working PROCESS */}
      <div className="flex gap-12">
        <div className="px-4 -mt-8 w-3/5">
          <h1 className="text-primary font-semibold text-lg uppercase">
            WORKING PROCESS
          </h1>
          <TitleUnderLine className="-mt-3" />
          <h1 className="text-dark text-5xl font-bold mb-16">
            Our <span className="text-primary">Approach</span>
          </h1>
          <div className="text-primary">
            {approaches.map((approach, index) => (
              <div key={approach.title}>
                <div
                  className="text-2xl text-dark flex justify-between border-b py-4 font-semibold cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <span>{approach.title}</span>
                  <motion.span
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="symbol flex items-center justify-center"
                  >
                    {openIndex === index ? <LuMinus /> : <LuPlus />}
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-dark bg-primary-bg-subtle px-12 text-base font-regular py-4">
                        {approach.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col w-2/5 text-primary font-bold text-xl">
          <div
            className={`relative h-32 w-96 text-primary text-center  flex justify-center items-center ${
              openIndex == 0 ? "bg-primary text-white" : ""
            } border border-primary rounded-[50%]`}
            onClick={() => {
              handleToggle(0);
            }}
          >
            Communication
          </div>
          <div
            className={`relative -top-6 h-32 w-96 text-center  flex justify-center items-center  border  border-primary  ${
              openIndex == 1 ? "bg-primary text-white" : "bg-transparent"
            } rounded-[50%]`}
            onClick={() => {
              handleToggle(1);
            }}
          >
            Planning
          </div>
          <div
            className={`relative -top-14 h-32 w-96 text-center  flex justify-center items-center border  border-primary rounded-[50%]  ${
              openIndex == 2 ? "bg-primary text-white" : "bg-transparent"
            }`}
            onClick={() => {
              handleToggle(2);
            }}
          >
            Execution
          </div>
          <div
            className={`relative -top-20 h-32 w-96 text-center  flex justify-center items-center border  border-primary rounded-[50%]  ${
              openIndex == 3 ? "bg-primary text-white" : "bg-transparent"
            }`}
            onClick={() => {
              handleToggle(3);
            }}
          >
            Architectures and infrastructures
          </div>
          <div
            className={`relative -top-28 h-32 w-96 text-center  flex justify-center items-center border  border-primary rounded-[50%]  ${
              openIndex == 4 ? "bg-primary text-white" : "bg-transparent"
            }`}
            onClick={() => {
              handleToggle(4);
            }}
          >
            Transparency
          </div>
          <div
            className={`relative -top-36 h-32 w-96 text-center  flex justify-center items-center border  border-primary rounded-[50%]  ${
              openIndex == 5 ? "bg-primary text-white" : "bg-transparent"
            }`}
            onClick={() => {
              handleToggle(5);
            }}
          >
            Delivery
          </div>
          <div
            className={`relative -top-44 h-32 w-96 text-center  flex justify-center items-center border  border-primary rounded-[50%]  ${
              openIndex == 6 ? "bg-primary text-white" : "bg-transparent"
            }`}
            onClick={() => {
              handleToggle(6);
            }}
          >
            Retrospective
          </div>
          <ShapeLine3 className="-mt-[370px] ml-64" />
        </div>
      </div>

      {/* Technologies Section */}
      <div className="flex flex-col items-center justify-center gap-2 -mt-80">
        <h1 className="text-primary font-semibold text-lg uppercase">
          Our Technologies
        </h1>
        <TitleUnderLine className="-mt-6 mr-4" />
        <h1 className="text-dark text-5xl font-bold">
          We Use <span className="text-primary"> Technologies</span>
        </h1>
      </div>
      {/* Technology Category Buttons */}
      <div className="relative bg-indigo-300 flex items-center justify-between mx-20 px-4 py-3 text-md text-dark font-semibold rounded-lg mt-6">
        {Object.keys(technologies).map((key) => (
          <button
            key={key}
            className={`${
              category === key ? "bg-white" : "text-white"
            } px-6 rounded-lg py-1 cursor-pointer`}
            onClick={() => handleCategory(key)}
          >
            {key.replace(/([A-Z])/g, " $1").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Display Technologies */}
      <div className="grid grid-cols-6 gap-8 mt-4 mx-16 border-2">
        {technologies[category]?.map((tech, index) => (
          <div key={index}>
            <div className="relative flex flex-col items-center justify-center border-2 ">
              <div className="absolute flex items-center justify-center">
                <img src={tech.icon} alt={tech.icon} />
              </div>
              <img src={hexagon} alt="hexagon" className="w-28 h-28 " />
            </div>
            <p className="text-center text-xl">{tech.name}</p>
          </div>
        ))}
      </div>
      <ShapeLine4 className="h-96 -ml-4 -mt-40" />
    </div>
  );
}

export default WorkingProcess;
