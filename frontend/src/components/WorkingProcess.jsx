import Shape from "../assets/images/shapes/shape_space_3.svg?react";
import ShapeLine2 from "../assets/images/shapes/shape_line_2.svg?react";
import ShapeLine3 from "../assets/images/shapes/shape_line_3.svg?react";
import TitleUnderLine from "../assets/images/shapes/shape_title_under_line.svg?react";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

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

const technologies = {
  "web-platform": [
    "React JS",
    "Next JS",
    "JavaScript",
    "Swift",
    "Typescript",
    "Python",
    "G318",
    "Java",
    "Ruby",
    "C++",
    "PHP",
    "Laravel",
  ],
  database: [
    "PostgreSQL",
    "mongoDB",
    "Oracle DB",
    "MySQL",
    "Firestore",
    "Redis",
    "Microsoft SQL",
    "Elasticsearch",
    "Scylla",
    "BigchainDB",
  ],
  "cloud&devops": [
    "Docker",
    "Jenkins",
    "Ansible",
    "Kubernetes",
    "AWS",
    "Terraform",
    "JIRA",
  ],
  "mobile-apps": [
    "React Native",
    "Flutter",
    "Ionic",
    "Java",
    "Kotlin",
    "Xamarin",
    "Swift",
    "Angular UI",
  ],
  "other-framework": [
    "Django",
    "Ruby On Rails",
    "Express JS",
    "Dot net Core",
    "Codeigniter",
    "Vue JS",
  ],
};

function WorkingProcess() {
  // State to track which item is open (by index)
  const [openIndex, setOpenIndex] = useState(null);
  const [isActive, setisActive] = useState(false);

  const handleToggle = (index) => {
    // Toggle open/close for a specific item
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTech = () => {
    setisActive(!isActive);
  };
  return (
    <div className="bg-light">
      <Shape className="w-[800px] h-auto mx-auto" />
      <ShapeLine2 className="-mt-8" />
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
        <h1 className="text-white font-semibold text-lg uppercase">
          Our Technologies
        </h1>
        <TitleUnderLine className="-mt-6 mr-8" />
        <h1 className="text-dark text-5xl font-bold">
          We Use <span className="text-primary"> Technologies</span>
        </h1>
      </div>
      <div className="bg-indigo-300 flex items-center justify-between mx-28 px-4 py-3 text-xl text-dark font-semibold rounded-lg mt-6">
        <button
          className={` ${
            isActive == true ? "bg-white" : ""
          } px-6 rounded-lg py-1`}
          onClick={handleTech}
        >
          Web Platform
        </button>
        <button
          className={` ${
            isActive == true ? "bg-white" : ""
          } px-6 rounded-lg py-1`}
          onClick={handleTech}
        >
          Databases
        </button>
        <button
          className={` ${
            isActive == true ? "bg-white" : ""
          } px-6 rounded-lg py-1`}
          onClick={handleTech}
        >
          DevOps
        </button>
        <button
          className={` ${
            isActive == true ? "bg-white" : ""
          } px-6 rounded-lg py-1`}
          onClick={handleTech}
        >
          Mobile Apps
        </button>
        <button
          className={` ${
            isActive == true ? "bg-white" : ""
          } px-6 rounded-lg py-1`}
          onClick={handleTech}
        >
          Other Framework
        </button>
      </div>
    </div>
  );
}

export default WorkingProcess;
