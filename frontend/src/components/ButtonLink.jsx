import { useNavigate } from "react-router-dom";
import { stagger, useAnimate } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
const ButtonLink = ({ name,className }) => {
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
      navigate("/services"); 
    }, 300); 
  };

  return (
    <div ref={scope}>
      <a
        onMouseOver={onLinkHover}
        onMouseLeave={onLinkHoverLeave}
        onClick={handleClick}
        className={`link text-md font-bold bg-primary flex items-center px-6 py-2 cursor-pointer shadow-dark rounded-full gap-2 ${className}`}
      >
        <span className="sr-only">{name}</span>
        <span className="h-8 overflow-hidden flex" aria-hidden>
          <span
            data-letter={letter}
            className="letter inline-block leading-8 tracking-wider relative h-8
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
