import MarqueeWidget from "../../../Marquee/Marquee";

const techData = [
  { tool_name: "Typescript", icon_name: "Typescript", level: 4 },
  { tool_name: "Javascript", icon_name: "Javascript", level: 1 },
  { tool_name: "React", icon_name: "React", level: 2 },
  { tool_name: "Next.js", icon_name: "Nextdotjs", level: 5 },
  { tool_name: "TailwindCSS", icon_name: "Tailwindcss", level: 3 },
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
