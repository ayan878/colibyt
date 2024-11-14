import { animate, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

function StackedSheets() {
  const sheets = [
    { id: 1, color: "blue" },
    { id: 2, color: "black" },
    { id: 3, color: "blue" },
    { id: 4, color: "black" },
  ];

  // State to track which sheets are visible and which are being clicked
  const [visibleSheets, setVisibleSheets] = useState(sheets);

  const handleClick = (index) => {
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
      }, 500); // A short delay to allow exit animation to complete

      return () => clearTimeout(resetTimeoutId); // Clear the reset timeout
    }
  }, [visibleSheets]);
  return (
    <div className="relative p-4 w-full h-[400px] lg:h-[500px] shadow-xl overflow-hidden">
      <AnimatePresence>
        {visibleSheets.map((sheet, index) => {
          return (
            <motion.div
              key={sheet.id}
              className={`sheet sheet-${index} absolute top-0 left-0 w-full h-full p-8 lg:p-12 cursor-pointer flex justify-center items-center`}
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
                delay: index * 3,
                ease: "easeOut",
              }}
              exit={{
                x: `${index * 4 + 103}%`,
                scaleY: `${index * 2 * 0.008 + 0.8}`,
                transition: { duration: 1, ease: "easeOut" }, // Exit transition duration
              }}
              style={{
                zIndex: sheets.length + index, // Ensure correct stacking order
                backgroundColor: sheet.color, // Set background color
                transformOrigin: "right bottom", // Pulling from the right side
              }}
              onClick={() => handleClick(index)}
            >
              <h1 className="text-5xl text-white">Sheet {sheet.id}</h1>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default StackedSheets;
