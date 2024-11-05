import shapeAngle from "../assets/shape_angle_2.webp";
import shape from "../assets/shape_space_1.svg";
import titleUnderline from "../assets/shape_title_under_line.svg"

const services = [
  {
    icon: "", // Add icons if necessary
    title: "NFT & Blockchain Development",
    list: [
      "Blockchain architecture",
      "Blockchain integration",
      "Blockchain as a service",
      "Business Implementation",
      "Blockchain & Token Audit",
      "Security Assessment & Identify vulnerabilities",
      "Smart Contract Review potential bugs or exploits",
      "Tokenomics Analysis token distribution and supply mechanisms",
      "Performance Evaluation Assess the efficiency and speed"
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Web Development",
    list: [
      "Frontend development",
      "Backend development",
      "E-commerce platforms",
      "API integration",
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Custom Software Development",
    list: [
      "Software architecture design",
      "System integration services",
      "Data migration services",
      "Legacy app modernization",
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Audit & IT Consulting Services",
    list: [
      "TechGuard Audit",
      "CyberSafe Audit & IT Consulting",
      "AssuranceEdge & IT Consulting",
      "IT Sentry Audit & IT Consulting",
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Web Application Design and Development",
    list: [
      "Web app development services",
      "Web portal development services",
      "Website development services",
      "Offshore web development",
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Mobile App Development",
    list: [
      "Android development services",
      "iOS app development services",
      "Mobile application design services",
      "Enterprise mobile app development",
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Best UI/UX Design Services",
    list: [
      "PixelPerfection UI/UX Design",
      "DesignCraft UI/UX Design",
      "CreativeWave UI/UX Design",
      "InterfaceGenius UI/UX Design",
    ],
  },
  {
    icon: "", // Add icons if necessary
    title: "Maintenance and Customer Support",
    list: [
      "CareCraft Maintenance",
      "FixItPro Maintenance",
      "TechCare Maintenance",
      "AssistEdge Maintenance",
    ],
  },
];

function OurServices() {
  return (
    <div className="bg-light">
      <div className="flex">
        {/* First Image with Shape Angle */}
        <img
          src={shapeAngle}
          alt="Shape Angle Image"
          className="w-[282px] object-contain"
        />

        {/* Second Image with Shape Space */}
        <img
          src={shape}
          alt="Shape Space Image"
          className="h-[28px] object-contain"
        />
      </div>
      <div className="relative -top-32 flex flex-col items-center justify-center text-dark">
        <span className="text-xl uppercase text-center">Our Services</span>
        <img src={titleUnderline} alt={titleUnderline} className="-mt-2" />
        <h1 className="text-5xl font-bold tracking-wide mt-6">
          How We Can <span className="text-secondary">Help</span> You
        </h1>
      </div>
      {/* Services */}
      <div className="relative -top-32 grid grid-cols-4 gap-4 mt-12 px-4 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 border rounded-lg shadow-md bg-white clip-path-diamond"
          >
            {/* Icon (If available) */}
            {service.icon && (
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 object-contain mb-4"
              />
            )}

            {/* Title */}
            <h2 className="text-2xl font-semibold text-primary mb-2">
              {service.title}
            </h2>

            {/* List */}
            <ul className="space-y-2">
              {service.list.map((item, idx) => (
                <li key={idx} className="text-sm text-body">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
