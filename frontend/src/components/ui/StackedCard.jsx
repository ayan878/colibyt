import { motion } from "framer-motion";

function StackedSheets() {
  const sheets = [
    { id: 1, color: "green" },
    { id: 2, color: "blue" },
    { id: 3, color: "red" },
    { id: 4, color: "yellow" },
  ];

  return (
    <div className="relative p-4 w-full h-[400px] lg:h-[500px] shadow-xl">
      {sheets.map((sheet, index) => (
        <motion.div
          key={sheet.id}
          className="absolute top-0 left-0 w-full h-full p-8 lg:p-12 cursor-pointer flex justify-center items-center"
          initial={{ x: "100%", }} // Start position (off-screen right)
          animate={{ x: 0 }} // Animate each card to the left
          transition={{
            duration: 1, // Duration of the animation
            delay: index * 3, // Staggered delay for each card
            ease: "easeOut", // Smooth transition
          }}
          style={{
            zIndex: sheets.length + index, // Ensure correct stacking order
            backgroundColor: sheet.color, // Set background color
            transformOrigin: "right bottom", // Pulling from the right side
          }}
        >
          <h1 className="text-5xl text-white">Sheet {sheet.id}</h1>
        </motion.div>
      ))}
    </div>
  );
}

export default StackedSheets;
