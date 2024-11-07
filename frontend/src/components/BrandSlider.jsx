import client1 from "../assets/images/clients/ambience.png";
import client2 from "../assets/images/clients/bharattr.png";
import client3 from "../assets/images/clients/client_logo_1.webp";
import client4 from "../assets/images/clients/client_logo_10.webp";
import client5 from "../assets/images/clients/client_logo_2.webp"
import client6 from "../assets/images/clients/client_logo_3.webp";
import client7 from "../assets/images/clients/client_logo_4.webp";
import client8 from "../assets/images/clients/client_logo_5.webp";
import client9 from "../assets/images/clients/client_logo_6.webp";
import client10 from "../assets/images/clients/client_logo_7.webp";
import client11 from "../assets/images/clients/client_logo_8.webp";
import client12 from "../assets/images/clients/client_logo_9.webp";

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
  { img: client11 },
  { img: client12 },
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
                className="flex items-center justify-center w-40 h-20 p-4 object-contain bg-white rounded-md clip-path-sim"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;
