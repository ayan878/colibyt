// import case1 from "../assets/images/case/case_image_1.webp";
// import case2 from "../assets/images/case/case_image_2.webp";
// import case3 from "../assets/images/case/case_image_3.webp";
// import Python from "../assets/images/case/icon_python.svg?react";
// import Postgre from "../assets/images/case/icon_elephent.svg?react";
// import Angular from "../assets/images/case/icon_angular.svg?react";
// import Dotnet from "../assets/images/case/icon_netcore.svg?react";
// import Vue from "../assets/images/case/vuejs.svg?react";
// import ButtonLink from "./ButtonLink";

// const App1 = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Sticky Card 1 */}
//       <div className="sticky top-0 flex flex-col md:flex-row bg-white text-white py-2 mt-12 rounded-lg">
//         <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1">
//           <h2 className="text-zinc-400 text-xl uppercase">Computer Software</h2>
//           <h1 className="text-4xl sm:text-5xl font-bold text-primary">
//             Astarte Medical
//           </h1>
//           <p className="text-zinc-400">
//             Creating software for Astarte Medical involves a meticulous process
//             aimed at addressing their specific needs and objectives. It begins
//             with thorough research and planning to understand the requirements
//             and goals of the project.
//           </p>
//           <div className="space-x-4">
//             <span className="font-bold text-primary">Industry:</span>
//             <span className="text-zinc-400">Computer software</span>
//             <span className="font-bold text-primary">Country:</span>
//             <span className="text-zinc-400">Germany, Issum</span>
//           </div>
//           <div className="space-x-4">
//             <span className="font-bold text-primary">Core technologies:</span>
//             <Angular className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
//             <Postgre className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
//           </div>
//           <ButtonLink className="w-fit" name="READ CASE" />
//         </div>
//         <div className="w-full md:w-1/2">
//           <img
//             className="w-full h-auto object-cover"
//             src={case1}
//             alt="Astarte Medical"
//           />
//         </div>
//       </div>

//       {/* Sticky Card 2 */}
//       <div className="sticky top-0 -mt-6 flex flex-col md:flex-row bg-white text-white py-2 rounded-lg">
//         <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1">
//           <h2 className="text-zinc-400 text-xl uppercase">Healthcare</h2>
//           <h1 className="text-4xl sm:text-5xl font-bold text-primary">
//             CAE Blue Phantom
//           </h1>
//           <p className="text-zinc-400">
//             CAE Blue Phantom is a cutting-edge simulation technology designed to
//             revolutionize medical training and education. Utilizing advanced
//             virtual reality and artificial intelligence, CAE Blue Phantom
//             provides.
//           </p>
//           <div className="space-x-4">
//             <span className="font-bold text-primary">Industry:</span>
//             <span className="text-zinc-400">Wellness & Fitness</span>
//             <span className="font-bold text-primary">Country:</span>
//             <span className="text-zinc-400">Germany, Issum</span>
//           </div>
//           <div className="space-x-4">
//             <span className="font-bold text-primary">Core technologies:</span>
//             <Angular className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
//             <Dotnet className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
//           </div>
//           <ButtonLink className="w-fit" name="READ CASE" />
//         </div>
//         <div className="w-full md:w-1/2">
//           <img
//             className="w-full h-auto object-cover"
//             src={case2}
//             alt="Healthcare"
//           />
//         </div>
//       </div>

//       {/* Sticky Card 3 */}
//       <div className="sticky top-0 -mt-6 flex flex-col md:flex-row bg-white text-white py-2 rounded-lg">
//         <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1">
//           <h2 className="text-zinc-400 text-xl uppercase">Real Estate</h2>
//           <h1 className="text-4xl sm:text-5xl font-bold text-primary">
//             Liberkeys
//           </h1>
//           <p className="text-zinc-400">
//             Liberkeys is a modern real estate platform that is revolutionizing
//             the way people buy, sell, and rent properties. With a focus on
//             transparency, efficiency, and customer satisfaction, Liberkeys
//             streamlines.
//           </p>
//           <div className="space-x-4">
//             <span className="font-bold text-primary">Industry:</span>
//             <span className="text-zinc-400">Real Estate</span>
//             <span className="font-bold text-primary">Country:</span>
//             <span className="text-zinc-400">France, Paris</span>
//           </div>
//           <div className="space-x-4">
//             <span className="font-bold text-primary">Core technologies:</span>
//             <Vue className="inline-block h-12 w-12 px-3 bg-zinc-200 rounded-full" />
//             <Python className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
//           </div>
//           <ButtonLink className="w-fit" name="READ CASE" />
//         </div>
//         <div className="w-full md:w-1/2">
//           <img
//             className="w-full h-auto object-cover"
//             src={case3}
//             alt="Real Estate"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App1;

import case1 from "../assets/images/case/case_image_1.webp";
import case2 from "../assets/images/case/case_image_2.webp";
import case3 from "../assets/images/case/case_image_3.webp";
import Python from "../assets/images/case/icon_python.svg?react";
import Postgre from "../assets/images/case/icon_elephent.svg?react";
import Angular from "../assets/images/case/icon_angular.svg?react";
import Dotnet from "../assets/images/case/icon_netcore.svg?react";
import Vue from "../assets/images/case/vuejs.svg?react";
import ButtonLink from "./ButtonLink";

const StickyCards = () => {
  return (
    <div className="container mx-auto p-4 mt-4">
      {/* Sticky Card 1 */}
      <div className="sticky top-0 flex flex-col md:flex-row bg-white text-white py-2 rounded-lg">
        <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8">
          <h2 className="text-zinc-400 text-xl uppercase">Computer Software</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Astarte Medical
          </h1>
          <p className="text-zinc-400">
            Creating software for Astarte Medical involves a meticulous process
            aimed at addressing their specific needs and objectives. It begins
            with thorough research and planning to understand the requirements
            and goals of the project.
          </p>
          <div className="space-x-4">
            <span className="font-bold text-primary">Industry:</span>
            <span className="text-zinc-400">Computer software</span>
            <span className="font-bold text-primary">Country:</span>
            <span className="text-zinc-400">Germany, Issum</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold text-primary">Core technologies:</span>
            <Angular className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
            <Postgre className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
          </div>
          <ButtonLink className="w-fit" name="READ CASE" />
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-[250px] md:h-[490px] object-cover"
            src={case1}
            alt="Astarte Medical"
          />
        </div>
      </div>

      {/* Sticky Card 2 */}
      <div className="sticky top-0 -mt-14 flex flex-col md:flex-row bg-white text-white py-2 rounded-lg">
        <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8">
          <h2 className="text-zinc-400 text-xl uppercase">Healthcare</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            CAE Blue Phantom
          </h1>
          <p className="text-zinc-400">
            CAE Blue Phantom is a cutting-edge simulation technology designed to
            revolutionize medical training and education. Utilizing advanced
            virtual reality and artificial intelligence, CAE Blue Phantom
            provides.
          </p>
          <div className="space-x-4">
            <span className="font-bold text-primary">Industry:</span>
            <span className="text-zinc-400">Wellness & Fitness</span>
            <span className="font-bold text-primary">Country:</span>
            <span className="text-zinc-400">Germany, Issum</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold text-primary">Core technologies:</span>
            <Angular className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
            <Dotnet className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
          </div>
          <ButtonLink className="w-fit" name="READ CASE" />
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-[250px] md:h-[490px] object-cover"
            src={case2}
            alt="Healthcare"
          />
        </div>
      </div>

      {/* Sticky Card 3 */}
      <div className="sticky top-0 -mt-14 flex flex-col md:flex-row bg-white text-white py-2 rounded-lg">
        <div className="px-8 md:px-16 space-y-4 mt-6 md:mt-14 flex-1 py-8">
          <h2 className="text-zinc-400 text-xl uppercase">Real Estate</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Liberkeys
          </h1>
          <p className="text-zinc-400">
            Liberkeys is a modern real estate platform that is revolutionizing
            the way people buy, sell, and rent properties. With a focus on
            transparency, efficiency, and customer satisfaction, Liberkeys
            streamlines.
          </p>
          <div className="space-x-4">
            <span className="font-bold text-primary">Industry:</span>
            <span className="text-zinc-400">Real Estate</span>
            <span className="font-bold text-primary">Country:</span>
            <span className="text-zinc-400">France, Paris</span>
          </div>
          <div className="space-x-4">
            <span className="font-bold text-primary">Core technologies:</span>
            <Vue className="inline-block h-12 w-12 px-3 bg-zinc-200 rounded-full" />
            <Python className="inline-block h-12 w-12 p-2 bg-zinc-200 rounded-full" />
          </div>
          <ButtonLink className="w-fit" name="READ CASE" />
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-[250px] md:h-[490px] object-cover"
            src={case3}
            alt="Real Estate"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyCards;
