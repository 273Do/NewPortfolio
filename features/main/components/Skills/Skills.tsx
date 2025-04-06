import MarqueeWidget from "../../../Marquee/Marquee";

const techData = [
  { name: "Typescript", level: 4 },
  { name: "Javascript", level: 1 },
  { name: "React", level: 2 },
  { name: "Nextdotjs", level: 5 },
  { name: "Tailwindcss", level: 3 },
];

const Skills = () => {
  return (
    <div className="m-4 w-full font-sans font-semibold text-xl">
      <p className="mb-4 text-7xl opacity-80">Skills</p>
      <div className="flex flex-col gap-6">
        <MarqueeWidget title="Language" techData={techData} />
        <MarqueeWidget title="FW / Lib" techData={techData} />
        <MarqueeWidget title="Tool" techData={techData} />
      </div>
    </div>
  );
};

export default Skills;
