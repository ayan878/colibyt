import Shape from "../assets/images/shapes/shape_space_3.svg?react";
import ShapeLine from "../assets/images/shapes/shape_line_2.svg?react";
import TitleUnderLine from "../assets/images/shapes/shape_title_under_line.svg?react";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const approaches = [
  {
    title: "01. COMMUNICATION",
    desc: "Once we have a contract in place, we open a connection on Slack or any other chatting tool that allows the allocated resources to team-up with you and your stakeholders to start the planning. The communication channel is kept up forever and of course involves also several strategic agile meetings on most famous video-call tools.",
  },
  {
    title: "02. PLANNING",
    desc: "Within maximum 2 weeks since the start of the contract through the first planning meetings we create a roadmap with you, collecting and deconstructing all the milestones following a OKRs-oriented approach on our proprietary workflow management system.",
  },
  {
    title: "03. Execution",
    desc: "Every quarter we design a new roadmap together for a bigger shape overview, while on a 2 weeks basis we have an update meeting, where our project managers and your product owners check the progress together.",
  },
  {
    title: "04. ARCHITECTURES AND INFRASTRUCTURES",
    desc: "At the project start developers create the boilerplate and decide the tech stack according to requirements and devOps engineers start to build a cluster, for staging and production environments.",
  },
  {
    title: "05. TRANSPARENCY",
    desc: "Everything from communication channels to tools we use is meant to make your life easier and enjoy the collaboration but also to experiment what it means to be part of an Agile team with solid professionals at your disposal that proactively make the product grow iteration after iteration. Our workflow management system allows us to share a link with full visibility on the development and milestones boards so that you could watch the progress in real time and see how the team quickly completes tasks on a daily basis.",
  },
  {
    title: "06. DELIVERY",
    desc: "Every iteration has a 2 weeks duration, at the end of each, we deliver a product increase in a staging environment where you could review it and check the progress. You also receive a report that highlights all tasks accomplished and the progress on each module.",
  },
  {
    title: "07. RETROSPECTIVE",
    desc: "Every month we look back at our work, open to your suggestions on how to tweak the workflow to keep improving it and let our partnership aim to perfection.",
  },
];

function WorkingProcess() {
  // State to track which item is open (by index)
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // Toggle open/close for a specific item
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-light">
      <Shape className="w-[800px] h-auto mx-auto" />
      <ShapeLine className="-mt-8" />
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
                  <span className="flex items-center justify-center"
                    style={{
                      transition: "transform 0.3s ease",
                      transformOrigin: "center",
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {openIndex === index ? <LuMinus /> : <LuPlus />}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <p className="text-dark bg-primary-bg-subtle px-12 text-base font-regular py-4">
                    {approach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col w-2/5 text-primary font-bold text-xl">
          <div className="relative h-32 w-96 text-white text-center  flex justify-center items-center bg-primary border border-primary rounded-[50%]">
            Communication
          </div>
          <div className="relative -top-6 h-32 w-96 text-center  flex justify-center items-center bg-transparent border  border-primary rounded-[50%]">
            Planning
          </div>
          <div className="relative -top-14 h-32 w-96 text-center  flex justify-center items-center bg-transparent border  border-primary rounded-[50%]">
            Execution
          </div>
          <div className="relative -top-20 h-32 w-96 text-center  flex justify-center items-center bg-transparent border  border-primary rounded-[50%]">
            Architectures and infrastructures
          </div>
          <div className="relative -top-28 h-32 w-96 text-center  flex justify-center items-center bg-transparent border  border-primary rounded-[50%]">
            Transparency
          </div>
          <div className="relative -top-36 h-32 w-96 text-center  flex justify-center items-center bg-transparent border  border-primary rounded-[50%]">
            Delivery
          </div>
          <div className="relative -top-44 h-32 w-96 text-center  flex justify-center items-center bg-transparent border  border-primary rounded-[50%]">
            Restrospective
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingProcess;
