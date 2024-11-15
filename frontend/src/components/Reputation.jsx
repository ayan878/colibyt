import titleUnderline from "../assets/images/shapes/shape_title_under_line.svg";
import C from "../assets/images/icons/icon_c.svg";
import G2 from "../assets/images/icons/icon_g2.svg";
import { animate, AnimatePresence, motion, progress } from "framer-motion";
import { useState, useEffect } from "react";
import schoolThinks from "../assets/images/clients/school-thinks-logo.svg";
import UNIQA from "../assets/images/clients/client_logo_8.webp";
import rosmariano from "../assets/images/clients/rosmariano-logo-colored.svg";
import MaverickPhoenix from "../assets/images/avtar/avatar_7.webp";
import MARIANOPETERLONGO from "../assets/images/avtar/avatar_6.webp";
import TristanW from "../assets/images/avtar/avatar_5.webp";

function Reputation() {
  const sheets = [
    {
      title: "“Amazing software services”",
      desc: "I had the pleasure to work with Michele to build an enterprise software and all the project was handled with great professionalism. Communication was fast and very good and so was also the support after the product was released in production. Great work.",
      name: "Tristan W.",
      designation: "CEO @Schoolthinks",
      address: "Mumbai, India",
      pic: TristanW,
      brand: schoolThinks,
      bgColor: "#00A0F1",
    },
    {
      title: "“Amazing software services”",
      desc: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
      name: "Maverick Phoenix",
      designation: "Board Member, UNIQA",
      address: "Seattle, USA",
      pic: MaverickPhoenix,
      brand: UNIQA,
      bgColor: "white",
    },

    {
      title: "“Amazing software services”",
      desc: "Respect for the customer, understanding of the requirements and team needs, meticulous, almost obsessive research and attention to details, extreme success willing. Those who seek the best are willing to pay for quality",
      name: "Mariano Peterlongo",
      designation: "CTO, @Rosmariano",
      address: "Sydney, Australia",
      pic: MARIANOPETERLONGO,
      brand: rosmariano,
      bgColor: "#00A0F1",
    },
  ];

  // State to track which sheets are visible and which are being clicked
  const [visibleSheets, setVisibleSheets] = useState(sheets);
  const [progress, setProgress] = useState(0);
  console.log(progress);

  const handleClick = (index) => {
    if (index === 0) setProgress(34);
    if (index === 1) setProgress(66);
    if (index === 2) setProgress(100);
    animate([
      [
        `.sheet-${index}`,
        {
          x: 0,
          scaleX: `${index * 0.008 + 0.8}`,
          scaleY: `${index * 0.008 + 0.8}`,
        },
        {},
      ],
    ]);
  };

  {
    /* progress button*/
  }
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 80); // Increase progress every 100ms

      return () => clearInterval(interval);
    }

    // When progress reaches 100%, reset it after a delay
    if (progress >= 100) {
      // setIsResetting(true);
      const resetTimeout = setTimeout(() => {
        setProgress(0); // Reset progress back to 0
        // setIsResetting(false); // Allow progress to increase again
      }, 1000); // Wait 1 second before resetting

      return () => clearTimeout(resetTimeout);
    }
  }, [progress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleSheets([]); // Automatically set to an empty array to trigger exit animations
    }, 10000);

    return () => clearInterval(intervalId); // Clear interval when component is unmounted
  }, []);

  // Reset the sheets back to visible after exit animation
  useEffect(() => {
    if (visibleSheets.length === 0) {
      const resetTimeoutId = setTimeout(() => {
        setVisibleSheets(sheets); // Reset to initial state after exit animation completes
        setProgress(0);
      }, 1000); // A short delay to allow exit animation to complete
      return () => clearTimeout(resetTimeoutId); // Clear the reset timeout
    }
  }, [visibleSheets]);

  useEffect;
  return (
    <div className="mt-24 bg-white">
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl uppercase text-center">Our Reputation</span>
        <img
          src={titleUnderline}
          alt={titleUnderline}
          className="-mt-3 -ml-7"
        />
        <h1 className="text-5xl font-bold tracking-wide mt-6">
          What They <span className="text-secondary">Say</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 p-8">
        <div className="relative mt-20 left-16 flex flex-col w-2/5 gap-6 py-8 ">
          <h1 className="text-5xl font-bold text-dark">
            <span className="text-primary">900+</span> <br />
            <span>customers win deals with Colibyt</span>
          </h1>
          <div className="flex space-x-6">
            <div>
              <img src={C} alt="C programming" />
              <span>⭐⭐⭐⭐⭐</span>
              <br />
              <span className="text-primary">
                From <span>200+</span> <br />
                reviews
              </span>
            </div>
            <div>
              <img src={G2} alt="G2" />
              <span>⭐⭐⭐⭐⭐</span>
              <br />
              <span className="text-primary">
                From <span>300+</span> <br />
                reviews
              </span>
            </div>
          </div>
          {/* progress button */}
          <div className="flex gap-1 mt-8">
            {/* First Button */}
            <button
              className="h-1.5 w-full bg-slate-300 relative"
              onClick={() => {
                setProgress(0);
                handleClick(0);
              }}
            >
              <span
                className="button-1 progress-button absolute top-0 left-0 bottom-0 bg-dark"
                style={{
                  width: `${progress >= 34 ? "100%" : (progress / 33) * 100}%`,
                }}
              ></span>
            </button>

            {/* Second Button */}
            <button
              className="h-1.5 w-full bg-slate-300 relative"
              onClick={() => {
                handleClick(1);
                // if (progress >= 33) handleClick(1);
              }}
            >
              <span
                className="button-2 progress-button absolute top-0 left-0 bottom-0  bg-dark"
                style={{
                  width:
                    progress >= 34
                      ? progress >= 66
                        ? "100%"
                        : `${((progress - 33) / 33) * 100}%`
                      : "0%",
                }}
              />
            </button>

            {/* Third Button */}
            <button
              className="h-1.5 w-full bg-slate-300 relative"
              onClick={() => {
                handleClick(2);
                // if (progress >= 66) handleClick(2);
              }}
            >
              <span
                className="button-3 progress-button absolute top-0 left-0 bottom-0  bg-dark"
                style={{
                  width:
                    progress === 100
                      ? "100%"
                      : progress > 66
                      ? `${((progress - 66) / 34) * 100}%`
                      : "0%",
                }}
              />
            </button>
          </div>
        </div>

        {/* StackedCard */}
        <div className="relative p-4 w-full h-[400px] lg:h-[500px] overflow-hidden">
          <AnimatePresence>
            {visibleSheets.map((sheet, index) => {
              return (
                <>
                  <div className="relative top-20 left-24 w-full h-[410px] cursor-pointer flex flex-col shadow-xl space-y-2 p-12 text-primary">
                    <div className="px-8 mb-4">
                      <h1 className="text-3xl font-bold font-heading mb-8">
                        {sheet.title}
                      </h1>
                      <p className="text-xl font-regular">{sheet.desc}</p>
                    </div>

                    {/* User and Brand Info */}
                    <div className="flex flex-col sm:flex-row px-8 space-x-4">
                      {/* User Image */}
                      <div className="w-28 h-36 rounded-lg shadow-lg mb-2 bg-zinc-400">
                        <img
                          src={sheet.pic}
                          alt={`${sheet.name} picture`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      {/* User Details */}
                      <div className="mt-10 flex flex-col">
                        <h2 className="font-semibold text-xl font-duotone">
                          {sheet.name}
                        </h2>
                        <span className="text-md font-mono text-gray-600">
                          {sheet.designation}
                        </span>
                        <span className="text-xs font-brands text-gray-500">
                          {sheet.address}
                        </span>
                        <div className="w-20 h-12">
                          <img
                            src={sheet.brand}
                            alt={`${sheet.name} brand`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    key={sheet.id}
                    className={`sheet sheet-${index} absolute top-0 left-0 w-full h-full lg:p-12 cursor-pointer flex flex-col shadow-xl space-y-2`}
                    initial={{
                      x: `${index * 2 + 92}%`, // Sheets start off-screen
                      scaleY: `${index * 2 * 0.008 + 0.8}`,
                    }}
                    animate={{
                      x: 0,
                      scaleX: `${index * 0.008 + 0.8}`,
                      scaleY: `${index * 0.008 + 0.8}`,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 5,
                      ease: "easeOut",
                    }}
                    exit={{
                      x: `${index * 4 + 103}%`,
                      scaleY: `${index * 2 * 0.008 + 0.8}`,
                      transition: { duration: 1 }, // Exit transition duration
                    }}
                    style={{
                      zIndex: sheets.length + index,
                      transformOrigin: "right bottom",
                      backgroundColor: sheet.bgColor,
                      color: sheet.bgColor === "white" ? "#00A0F1" : "white",
                    }}
                    onClick={() => handleClick(index)}
                  >
                    <div className="px-8 mb-8">
                      <h1 className="text-4xl font-bold font-heading mb-8">
                        {sheet.title}
                      </h1>
                      <p className="text-2xl font-regular">{sheet.desc}</p>
                    </div>

                    {/* User and Brand Info */}
                    <div className="flex flex-col sm:flex-row px-8 space-x-4">
                      {/* User Image */}
                      <div className="w-40 h-44 rounded-lg shadow-lg mb-2 bg-zinc-400">
                        <img
                          src={sheet.pic}
                          alt={`${sheet.name} picture`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      {/* User Details */}
                      <div className="mt-10 flex flex-col">
                        <h2 className="font-semibold text-2xl font-duotone">
                          {sheet.name}
                        </h2>
                        <span className="text-xl font-mono text-gray-600">
                          {sheet.designation}
                        </span>
                        <span className="text-mdfont-brands text-gray-500">
                          {sheet.address}
                        </span>
                        <div className="w-32 sm:w-32 sm:h-32">
                          <img
                            src={sheet.brand}
                            alt={`${sheet.name} brand`}
                            className="-mt-10 w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Reputation;
