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
        <div className="flex flex-col w-96 gap-6 border ">
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
        {/* <div className="relative h-[450px] lg:h-[500px] shadow-xl border-4">
          <div
            className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
            style={{
              zIndex: 0,
              transformOrigin: "left",
              backgroundColor: "white",
              color: "black",
              transform: "translateX(0%) scale(1) translateZ(0px)",
           
            }}
          >
            <h1>“Amazing software services”</h1>
            <p>
              The solutions they're providing is helping our business run more
              smoothly. We've been able to make quick developments with them,
              meeting our product vision within the timeline we set up. Listen
              to them because they can give strong advice about how to build
              good products. Maverick Phoenix Board Member, UNIQA Seattle, USA
              “Amazing software services” Respect for the customer,
              understanding of the requirements and team needs, meticulous,
              almost obsessive research and attention to details, extreme
              success willing. Those who seek the best are willing to pay for
              quality
            </p>
          </div>
          <div
            className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
            style={{
              zIndex: 0,
              transformOrigin: "left",
              backgroundColor: "white",
              color: "black",
              transform: "translateX(0%) scale(1) translateZ(0px)",
            }}
          >
            <h1>“Amazing software services”</h1>
            <p>
              The solutions they're providing is helping our business run more
              smoothly. We've been able to make quick developments with them,
              meeting our product vision within the timeline we set up. Listen
              to them because they can give strong advice about how to build
              good products. Maverick Phoenix Board Member, UNIQA Seattle, USA
              “Amazing software services” Respect for the customer,
              understanding of the requirements and team needs, meticulous,
              almost obsessive research and attention to details, extreme
              success willing. Those who seek the best are willing to pay for
              quality
            </p>
          </div>
        </div> */}
       <StackedCard/>
      </div>
    </div>
  );
}

export default Reputation;
