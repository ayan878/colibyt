import shape2 from "../assets/shape_space_2.svg";

function About() {
  return (
    <div className="relative bg-aboutBackground bg-cover bg-no-repeat bg-center pt-[280px] pb-[881px] px-0 bg-primary">
      <img
        src={shape2}
        alt="Shape"
        className="absolute top-0 left-48 w-[800px] h-auto"
      />
      {/* Adding a space below */}
      <div className="h-96"></div>
    </div>
  );
}

export default About;
