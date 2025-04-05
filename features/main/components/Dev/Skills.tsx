import Marquee from "./Marquee";

const Skills = () => {
  return (
    <div className="m-4 w-full font-sans font-semibold text-xl">
      <p className="mb-4 text-7xl opacity-80">Skills</p>
      <div className="flex flex-col gap-6">
        <Marquee title="Language" />
        <Marquee title="FW / Lib" />
        <Marquee title="Tool" />
      </div>
    </div>
  );
};

export default Skills;
