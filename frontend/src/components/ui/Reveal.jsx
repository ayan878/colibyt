import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Fire the animations when the element is in view
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div className="relative w-fit overflow-hidden">
      {/* Main content reveal */}
      <motion.div 
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* Sliding background effect */}
      <motion.div
        className="absolute py-0  top-0 bottom-0 left-0 z-10 bg-primary"
        variants={{
          hidden: { x: "-100%" },
          visible: { x: "100%" }, 
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }} 
      />
    </div>
  );
}

export default Reveal;
