import client1 from "../assets/logo/Cadbury-Logo-600x400.png.webp";
import client2 from "../assets/logo/Citibank-Logo-600x400.png.webp";
import client3 from "../assets/logo/Dior-Logo-600x400.png.webp";
import client4 from "../assets/logo/IBM-Logo-600x400.png.webp";
import client5 from "../assets/logo/Louis-Vuitton-Logo-600x400.png.webp"
import client6 from "../assets/logo/Royal-Bank-of-Canada-Logo-600x400.png.webp";
import client7 from "../assets/logo/Shein-Logo-600x400.png.webp";
import client8 from "../assets/logo/Societe-Generale-Logo-600x400.png.webp";
import client9 from "../assets/logo/Supreme-Logo-600x400.png.webp";
import client10 from "../assets/logo/Walmart-Logo-600x400.png.webp";

const brands = [
  { img: client1 },
  { img: client2 },
  { img: client3 },
  { img: client4 },
  { img: client5 },
  { img: client6 },
  { img: client7 },
  { img: client8 },
  { img: client9 },
  { img: client10 },
];

function BrandSlider() {
  return (
    <div className="bg-secondary py-4">
      <div className="flex items-center mt-16">
        <h1 className="w-56 text-xl font-bold mb-4 ml-8 px-6 text-white">
          Brands We Help to Build
        </h1>
        <div className="relative overflow-hidden w-full">
          <div className="flex space-x-4 animate-slideLeft">
            {/* Duplicate the logos for seamless scrolling */}
            {brands.concat(brands).map((brand, index) => (
              <img
                key={index}
                src={brand.img}
                alt={`Brand logo ${index + 1}`}
                className="flex items-center justify-center w-40 h-20 object-contain bg-white rounded-md clip-path-sim"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
