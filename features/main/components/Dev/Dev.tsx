import GitCalendar from "./GitCalendar";
import Skills from "./Skills";

const Dev = () => {
  return (
    <div className="m-4 w-full font-sans font-semibold text-xl">
      <div className="mb-4 text-7xl opacity-80">
        <p>Skill &</p>
        <p>Contributions</p>
      </div>
      <div className="mb-2 flex w-full items-start gap-4">
        <Skills />
        <div className="mt-8 flex flex-col">
          <GitCalendar />
          <p className="text-right text-7xl opacity-20">209</p>
        </div>
      </div>
    </div>
  );
};

export default Dev;
