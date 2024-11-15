import titleUnderline from "../assets/images/shapes/shape_title_under_line.svg";

import C from "../assets/images/icons/icon_c.svg";
import G2 from "../assets/images/icons/icon_g2.svg";
import StackedCard from "./ui/StackedCard";

function Reputation() {
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
      <div className="flex flex-col lg:flex-row gap-8 p-8">
        <div className="flex flex-col w-2/5 gap-6  ">
          <h1 className="text-5xl font-bold text-dark">
            <span className="text-primary">900+</span>{" "}
            <span>customers win deals with Colibyt</span>
          </h1>
          <div className="flex">
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
        </div>
       <StackedCard/>
      </div>
    </div>
  );
}

export default Reputation;
