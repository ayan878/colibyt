// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const StackedCard = () => {
//   // Initial set of cards
//   const initialCards = ["Card 1", "Card 2", "Card 3", "Card 4"];
//   const [cards, setCards] = useState(initialCards);

//   // Function to rotate cards in a circular queue
//   const rotateCards = () => {
//     setCards((prevCards) => {
//       const newCards = [...prevCards];
//       const topCard = newCards.shift(); // Remove the first card
//       if (topCard) {
//         newCards.push(topCard); // Move it to the end
//       }
//       return newCards;
//     });
//   };

//   // Automatically rotate cards every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       rotateCards();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative w-full h-full max-w-3xl max-h-3xl">
//         <AnimatePresence>
//           {/* Display only the top card */}
//           {cards.slice(0, 1).map((card, index) => (
//             <motion.div
//               key={card}
//               className="absolute h-[450px] w-[300px] bg-white shadow-lg rounded-lg p-8 flex items-center justify-center text-xl font-bold border"
//               style={{
//                 zIndex: cards.length - index, // Top card has the highest z-index
//               }}
//               initial={{ x: "100%", opacity: 0.8, scale: 0.9 }}
//               animate={{ x: 0, opacity: 1, scale: 1 }}
//               exit={{ x: "-100%", opacity: 0.8, scale: 0.9 }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             >
//               {card}
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Hidden stacked cards */}
//         <AnimatePresence>
//           {cards.slice(1).map((card, index) => (
//             <motion.div
//               key={card}
//               className="absolute h-[450px] w-[300px] bg-white shadow-lg rounded-lg p-8 flex items-center justify-center text-xl font-bold border"
//               style={{
//                 left: index * 20, // Slight offset to indicate stack effect
//                 zIndex: cards.length - index - 1, // Set z-index for stacked cards
//                 opacity: 0.5, // Peeking effect, cards behind the top one are less visible
//                 transform: `scale(${1 - index * 0.05})`, // Slightly scale down the cards behind
//               }}
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 0.5, x: 0 }}
//               exit={{ opacity: 0, x: "-100%" }}
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             >
//               {card}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default StackedCard;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const StackedCard = () => {
//   // Initial set of cards
//   const initialCards = ["Card 1", "Card 2", "Card 3", "Card 4"];
//   const [cards, setCards] = useState(initialCards);

//   // Function to rotate cards in a circular queue
//   const rotateCards = () => {
//     setCards((prevCards) => {
//       const newCards = [...prevCards];
//       const topCard = newCards.pop(); // Remove the first card
//       if (topCard) {
//         newCards.unshift(topCard); // Move it to the end
//       }
//       return newCards;
//     });
//   };

//   // Automatically rotate cards every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       rotateCards();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative left-96 w-full h-full max-w-3xl max-h-3xl">

//         {/* Hidden stacked cards */}
//         <AnimatePresence>
//           {cards.slice(1).map((card, index) => (
//             <motion.div
//               key={card}
//               className="absolute -right-40 h-[450px] w-[300px] bg-white shadow-lg rounded-lg p-8 flex items-center justify-center text-xl font-bold border"
//               style={{
//                 right: index * 20, // Slight offset to the right to simulate peeking
//                 zIndex: cards.length - index - 1, // Set z-index for stacked cards
//                 // opacity: 1, // Peeking effect, cards behind the top one are less visible
//                 // transform: `scale(${1 - index * 0.05})`, // Slightly scale down the cards behind
//               }}
//               initial={{ x: "100%", opacity: 0, scale: 1 }} // Peeking from the right
//               //   animate={{ x: 0, opacity: 0.7, scale: 1 }} // Slightly visible, scaled down
//               animate={{ x: "-100%", opacity: 1, scale: 0.9 }}
//             //   exit={{ x: "-100%", opacity: 1, scale: 0.9 }} // Move left when exiting
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             >
//               {card}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default StackedCard;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const StackedCard = () => {
//   // Initial set of cards
//   const initialCards = ["Card 1", "Card 2", "Card 3", "Card 4"];
//   const [cards, setCards] = useState(initialCards);

//   // Function to rotate cards in a circular queue
//   const rotateCards = () => {
//     setCards((prevCards) => {
//       const newCards = [...prevCards];
//       const topCard = newCards.shift(); // Remove the first card
//       if (topCard) {
//         newCards.push(topCard); // Move it to the end
//       }
//       return newCards;
//     });
//   };

//   // Automatically rotate cards every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       rotateCards();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative w-full h-full max-w-3xl max-h-3xl">
//         <AnimatePresence>
//           {/* Display only the top card with the entrance and exit effect */}
//           {cards.slice(0, 1).map((card) => (
//             <motion.div
//               key={card}
//               className="absolute h-[450px] w-[300px] bg-white shadow-lg rounded-lg p-8 flex items-center justify-center text-xl font-bold border"
//               initial={{ x: 0, scale: 1.1, opacity: 0 }} // Slide in from below with full opacity
//               animate={{ x: -100, scale: 1, opacity: 1 }} // Settle into position with scale down
//             //   exit={{ x: "-100%", scale: 0.9, opacity: 0 }} // Slide left to exit with scale down
//               transition={{ duration: 1.5, ease: "easeInOut" }}
//             >
//               {card}
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* Static stacked cards */}
//         {cards.slice(1).map((card, index) => (
//           <div
//             key={card}
//             className="absolute h-[450px] w-[300px] bg-white shadow-lg rounded-lg p-8 flex items-center justify-center text-xl font-bold border"
//             style={{
//               right: index * 8, // Slight vertical offset for each stacked card
//               scale: 0.95 - index * 0.05, // Decrease scale for depth effect
//               opacity: 0.6 - index * 0.1, // Reduced opacity for depth
//               zIndex: cards.length - index - 1, // Stacking order
//             }}
//           >
//             {card}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StackedCard;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const StackedCard = () => {
//   // Initial set of cards
//   const initialCards = ["Card 1", "Card 2", "Card 3", "Card 4"];
//   const [cards, setCards] = useState(initialCards);

//   // Function to rotate cards in a circular queue
//   const rotateCards = () => {
//     setCards((prevCards) => {
//       const newCards = [...prevCards];
//       const topCard = newCards.pop(); // Remove the first card
//       if (topCard) {
//         newCards.unshift(topCard); // Move it to the end
//       }
//       return newCards;
//     });
//   };

//   // Automatically rotate cards every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       rotateCards();
//     }, 5000); // Adjusted to 5 seconds for more noticeable effect
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative w-full h-full max-w-3xl max-h-3xl">
//         {/* Hidden stacked cards */}
//         <AnimatePresence>
//           {cards.slice(1).map((card, index) => (
//             <motion.div
//               key={card}
//               className="absolute h-[450px] w-[300px] bg-white shadow-lg rounded-lg p-8 flex items-center justify-center text-xl font-bold border"
//               style={{
//                 right: index * 20, // Slight offset to simulate stacked cards
//                 zIndex: cards.length - index - 1, // Set z-index for stacked cards
//               }}
//               initial={{
//                 opacity: 0,
//                 x: 100, // Start below the stack
//                 x: 0, // Center horizontally
//                 scaleX: 0.8, // Start with right side smaller (scale effect)
//                 // scaleX: 0.9, // Slightly compressed vertically for peeking effect
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0, // Slide to its normal position
//                 x: 0, // Keep it centered horizontally
//                 scaleX: 1, // Grow to full width
//                 scaleY: 1, // Restore normal height
//               }}
//               exit={{
//                 opacity: 0,
//                 y: 100, // Move back below the stack
//                 x: 0, // Keep it centered horizontally
//                 scaleX: 0.8, // Shrink again on the right side
//                 scaleY: 0.9, // Compress vertically again
//               }}
//               transition={{
//                 duration: 1.5,
//                 ease: "easeInOut",
//               }}
//             >
//               {card}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default StackedCard;

// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const testimonials = [
//   {
//     id: 1,
//     quote: "This team exceeded all our expectations. Incredible work!",
//     author: "John Doe, CEO of TechSolutions",
//   },
//   {
//     id: 2,
//     quote: "Their expertise and support have been invaluable to our growth.",
//     author: "Jane Smith, Founder of InnovateX",
//   },
//   {
//     id: 3,
//     quote:
//       "Highly recommend their services – truly professional and efficient!",
//     author: "Michael Johnson, COO of SmartCo",
//   },
// ];

// const TestimonialStack = () => {
//   const [cards, setCards] = useState(testimonials);

//   // Function to rotate cards in a circular queue
//   const slideCards = () => {
//     setCards((prevCards) => {
//       const newCards = [...prevCards];
//       const topCard = newCards.shift(); // Remove the first card
//       if (topCard) {
//         newCards.push(topCard); // Move it to the end
//       }
//       return newCards;
//     });
//   };

//   // Automatically slide cards every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       slideCards();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute -right-[10px] flex flex-col items-center gap-4">
//       <AnimatePresence>
//         {cards.map((testimonial, index) => (
//           <div
//             key={testimonial.id}
//             className="absolute testimonial-card w-80 p-6 bg-white shadow-lg z-10"
//             // initial={{ x: "100%" }} // Start off to the right and slightly down
//             // animate={{ x: "100%", y: 0, scale: 0.9 }} // Slide to original position (x: 0, y: 0)
//             // transition={{
//             //   duration: 1,
//             //   ease: "easeOut",
//             //   delay: testimonial.id * 1, // Delay stagger effect for each card
//             // }}
//             style={{
//               left: index * 10,
//               zIndex: testimonial.length - index,
//             }}
//           >
//             <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
//             <p className="text-right font-semibold text-gray-900">
//               {testimonial.author}
//             </p>
//           </div>
//         ))}
//       </AnimatePresence>
//       <AnimatePresence>
//         {cards.map((testimonial, index) => (
//           <motion.div
//             key={testimonial.id}
//             className="absolute testimonial-card w-80 p-6 bg-white shadow-lg z-10"
//             initial={{ x: "100%" }} // Start off to the right and slightly down
//             animate={{ x: "-100%", scale: 0.9, opacity: 1 }} // Slide to original position (x: 0, y: 0)
//             transition={{
//               duration: 1,
//               ease: "easeOut",
//               delay: testimonial.id * 1, // Delay stagger effect for each card
//             }}
//             // style={{
//             //   left: index * 10,
//             //   zIndex: testimonial.length - index,
//             // }}
//           >
//             <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
//             <p className="text-right font-semibold text-gray-900">
//               {testimonial.author}
//             </p>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default TestimonialStack;

// import React from 'react'

// const testimonials = [
//   {
//     id: 1,
//     quote: "This team exceeded all our expectations. Incredible work!",
//     author: "John Doe, CEO of TechSolutions",
//   },
//   {
//     id: 2,
//     quote: "Their expertise and support have been invaluable to our growth.",
//     author: "Jane Smith, Founder of InnovateX",
//   },
//   {
//     id: 3,
//     quote:
//       "Highly recommend their services – truly professional and efficient!",
//     author: "Michael Johnson, COO of SmartCo",
//   },
// ]

// function StackedCard() {
//   return (
//     <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
//    {testimonials.map((testimonial,index)=>{
//    <div className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between" style={{zIndex: testimonials.length-index transformOrigin: "leftBottom" background: "white" color: "black" transform: "translateX(0%) translateX(0px) scale(1) translateZ(0px)"}}>{testimonial}</div>
//    }}
//     </div>
//   );
// }

// export default StackedCard

// import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     quote: "This team exceeded all our expectations. Incredible work!",
//     author: "John Doe, CEO of TechSolutions",
//   },
//   {
//     id: 2,
//     quote: "Their expertise and support have been invaluable to our growth.",
//     author: "Jane Smith, Founder of InnovateX",
//   },
//   {
//     id: 3,
//     quote:
//       "Highly recommend their services – truly professional and efficient!",
//     author: "Michael Johnson, COO of SmartCo",
//   },
// ];

// function StackedCard() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to handle card rotation (carousel effect)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change card every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl overflow-hidden">
//       {testimonials.map((testimonial, index) => (
//         <div
//           key={testimonial.id}
//           className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between text-primary"
//           style={{
//             zIndex: testimonials.length - index, // Stack order, topmost card on top
//             transformOrigin: "left bottom", // Make cards scale and rotate from bottom-left corner
//             background: "white",
//             color: "black",
//             transform: `translateX(${index === currentIndex ? "0%" : "100%"}) scale(${index === currentIndex ? "1" : "0.9"})`, // Move the card from the right and scale down inactive cards
//             transition: "transform 0.75s ease-out", // Smooth transition for sliding effect
//           }}
//         >
//           <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
//           <p className="text-right font-semibold text-gray-900">{testimonial.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StackedCard;

// import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     quote: "This team exceeded all our expectations. Incredible work!",
//     author: "John Doe, CEO of TechSolutions",
//   },
//   {
//     id: 2,
//     quote: "Their expertise and support have been invaluable to our growth.",
//     author: "Jane Smith, Founder of InnovateX",
//   },
//   {
//     id: 3,
//     quote:
//       "Highly recommend their services – truly professional and efficient!",
//     author: "Michael Johnson, COO of SmartCo",
//   },
// ];

// function StackedCard() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to handle card rotation (carousel effect)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change card every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl overflow-hidden">
//       {/* Ensure the parent div has a fixed height and overflow set to hidden */}
//       {testimonials.map((testimonial, index) => (
//         <div
//           key={testimonial.id}
//           className={`absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between ${index%2==1 ?"bg-black text-white" :"bg-white text-black"}`}
//           style={{
//             zIndex: testimonials.length - index, // Stack order, topmost card on top
//             transformOrigin: "left bottom", // Make cards scale and rotate from bottom-left corner
//             background: "white",
//             color: "black",
//             transform: `translateX(${index === currentIndex ? "0%" : "100%"}) scale(${index === currentIndex ? "1" : "0.9"})`, // Move the card from the right and scale down inactive cards
//             transition: "transform 0.75s ease-out", // Smooth transition for sliding effect
//             // opacity: index === currentIndex ? 1 : 0, // Only show the current card, hide others
//           }}
//         >
//           {/* Content of the testimonial */}
//           <p className="text-lg lg:text-xl font-light italic my-8">{testimonial.quote}</p>
//           <div>
//             <span className="block font-semibold text-lg">{testimonial.author}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StackedCard;

// import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     quote: "This team exceeded all our expectations. Incredible work!",
//     author: "John Doe, CEO of TechSolutions",
//   },
//   {
//     id: 2,
//     quote: "Their expertise and support have been invaluable to our growth.",
//     author: "Jane Smith, Founder of InnovateX",
//   },
//   {
//     id: 3,
//     quote:
//       "Highly recommend their services – truly professional and efficient!",
//     author: "Michael Johnson, COO of SmartCo",
//   },
// ];

// function StackedCard() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to handle card rotation (carousel effect)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change card every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
//       {/* Ensure the parent div has a fixed height and overflow set to hidden */}
//       {testimonials.map((testimonial, index) => (
//         <div
//           key={testimonial.id}
//           className={`absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between transition-all duration-700 ease-out ${
//             index % 2 === 1 ? "bg-black text-white" : "bg-white text-black"
//           }`}
//           style={{
//             zIndex: testimonials.length - index, // Stack order, topmost card on top
//             opacity: index === currentIndex ? 1 : 0, // Show current card, hide others
//             transform: index === currentIndex ? "scale(1)" : "scale(0.9)", // Make the current card scale up and inactive cards scale down
//             transition: "opacity 0.75s ease-out, transform 0.75s ease-out", // Smooth transition for opacity and transform
//           }}
//         >
//           {/* Content of the testimonial */}
//           <p className="text-lg lg:text-xl font-light italic my-8">
//             {testimonial.quote}
//           </p>
//           <div>
//             <span className="block font-semibold text-lg">
//               {testimonial.author}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StackedCard;

import { motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    img: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Download-HD-Nature-Wallpapers.jpg",
    quote: "This team exceeded all our expectations. Incredible work!",
    author: "John Doe, CEO of TechSolutions",
  },
  {
    id: 2,
    img: "https://th.bing.com/th/id/OIP.Rfh0HZcXfE2QOGEAJD3ukwHaEo?w=1920&h=1200&rs=1&pid=ImgDetMain",
    quote: "Their expertise and support have been invaluable to our growth.",
    author: "Jane Smith, Founder of InnovateX",
  },
  {
    id: 3,
    img: "https://c.pxhere.com/photos/c2/96/winter_landscape_sunset_winter_twilight_cold_snow_nature_against_day-828664.jpg!d",
    quote:
      "Highly recommend their services – truly professional and efficient!",
    author: "Michael Johnson, COO of SmartCo",
  },
];

function StackedCard() {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState();
  const dragX = useMotionValue(0);

  // Log when drag starts
  const onDragStart = () => {
    setDragging(true);
    console.log("Drag started");
  };

  // Log when drag ends
  const onDragEnd = () => {
    setDragging(false);
    console.log("Drag ended");
    console.log("Drag X Value:", dragX.get());
  };

  return (
    <div className="relative min-h-screen shadow-xl bg-black py-8">
      <motion.div
        className="flex items-center cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        animate={{x:`${imgIndex * 100 }%`}}
        style={{
          x: dragX, 
        }}

      >
        <Images />
      </motion.div>
    </div>
  );
}

function Images() {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="aspect-video w-screen rounded-lg bg-neutral-800 object-cover"
          style={{
            backgroundImage: `url(${testimonial.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </>
  );
}

export default StackedCard;
