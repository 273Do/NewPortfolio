const Marquee = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-2xl">{title}</p>
        <div className="flex flex-row items-center gap-2">
          <p className="font-mono text-lg">techname</p>
          <div className="h-1 w-30 bg-muted-foreground" />
        </div>
      </div>
      <div className="h-24 bg-slate-700" />
    </div>
  );
};

export default Marquee;
