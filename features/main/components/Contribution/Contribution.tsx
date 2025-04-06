import GitCalendar from "./GitCalendar";

const Contribution = () => {
  const this_year = new Date().getFullYear();

  return (
    <div className="m-4 w-full font-sans font-semibold text-xl">
      <p className="mb-4 text-7xl opacity-80">Contribution</p>
      <div className="flex items-end justify-between gap-4">
        <GitCalendar />
        <div className="items-baseline text-end gap-2">
          <p className="text-6xl opacity-20">209</p>
          <p>in {this_year}</p>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
