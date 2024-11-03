// import { stagger, useAnimate, } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const ButtonLink = ({ name }) => {
//   const [scope, animate] = useAnimate();
//   const letter = name;

// const onLinkHover = () => {
//   animate([
//     [".letter", { y: -32 }, { duration: 0.3, delay: stagger(0.08) }],
//     [".link", { y: -2 }, { duration: 0.1, at: "<" }],
//   ]);
// };

// const onLinkHoverLeave = () => {
//   animate([
//     [".letter", { y: 0 }, { duration: 0.3, delay: stagger(0.08) }],
//     [".link", { y: 0 }, { duration: 0.1, at: "<" }],
//   ]);
// };


// const handleClick = () => {
//   animate([
//     [".link", { scale: 1, boxShadow: "none" }, { duration: 0.000001 }],
//     [".rightArrow", { rotate: -25 }, { duration: 0.1, at: "<" }],

//     [".rightArrow", { rotate: 0 }, { duration: 0.1 }],
//     [
//       ".link",
//       { scale: 1, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" },
//       { duration: 0.1 },
//     ],
//   ]);
// };

//   return (
//     <div ref={scope}>
//       <Link
//         to="/about"
//         onMouseOver={onLinkHover}
//         onMouseLeave={onLinkHoverLeave}
//         onClick={handleClick}
//         className="link text-md font-bold flex items-center px-6 py-2 cursor-pointer justify-between shadow-dark rounded-full gap-2"
//       >
//         <span className="sr-only">{name}</span>
//         <span className="h-8 overflow-hidden flex" aria-hidden>
//           <span
//             data-letter={letter}
//             className="letter inline-block leading-8 relative h-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
//           >
//             {letter}
//           </span>
//         </span>
//         <FaArrowRight className="rightArrow font-extrabold" />
//       </Link>
//     </div>
//   );
// };

// export default ButtonLink;


import { useNavigate } from "react-router-dom";
import { stagger, useAnimate } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
const ButtonLink = ({ name }) => {
  const [scope, animate] = useAnimate();
  const navigate = useNavigate(); 
  const letter = name;


  const onLinkHover = () => {
    animate([
      [".letter", { y: -32 }, { duration: 0.3, delay: stagger(0.08) }],
      [".link", { y: -2 }, { duration: 0.1, at: "<" }],
    ]);
  };

  const onLinkHoverLeave = () => {
    animate([
      [".letter", { y: 0 }, { duration: 0.3, delay: stagger(0.08) }],
      [".link", { y: 0 }, { duration: 0.1, at: "<" }],
    ]);
  };

  const handleClick = (e) => {
    e.preventDefault();

    animate([
      [".link", { scale: 1, boxShadow: "none" }, { duration: 0.000001 }],
      [".rightArrow", { rotate: -25 }, { duration: 0.1, at: "<" }],
      [".rightArrow", { rotate: 0 }, { duration: 0.1 }],
      [
        ".link",
        { scale: 1, boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" },
        { duration: 0.1 },
      ],
    ]);

    // Navigate after the animations complete
    setTimeout(() => {
      // navigate("/about"); 
    }, 300); 
  };

  return (
    <div ref={scope}>
      <a
        onMouseOver={onLinkHover}
        onMouseLeave={onLinkHoverLeave}
        onClick={handleClick}
        className="link text-md font-bold bg-sky-500 flex items-center px-6 py-2 cursor-pointer justify-between shadow-dark rounded-full gap-2"
      >
        <span className="sr-only">{name}</span>
        <span className="h-8 overflow-hidden flex" aria-hidden>
          <span
            data-letter={letter}
            className="letter inline-block leading-8 relative h-8
            after:absolute after:left-0
            after:top-full after:h-8 after:content-[attr(data-letter)]"
          >
            {letter}
          </span>
        </span>
        <FaArrowRight className="rightArrow" />
      </a>
    </div>
  );
};

export default ButtonLink;
