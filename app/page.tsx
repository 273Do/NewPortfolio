import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // <div className="flex items-center">
    //   <Button variant="default" size="default">
    //     Hello World
    //   </Button>
    //   <ModeToggle />
    //   <div className="h-5 w-5 bg-primary-foreground" />
    // </div>
    <div className="bg-red-800 w-full flex items-center flex-col justify-center">
      <div className="w-full bg-blue-800 w-full xl:w-[1280px] h-svh xl:h-[960px]">
        <p>Area1</p>
      </div>
      <div className="bg-green-500 w-full xl:w-[1280px] h-[400px]">Area2</div>
      <div className="bg-blue-800 w-full xl:w-[1280px] h-52">Area3</div>
      <div className="bg-green-500 w-full xl:w-[1280px] h-[600px]">Area4</div>
      <div className="bg-blue-800 w-full xl:w-[1280px] h-52">Area5</div>
      <div className="bg-green-500 w-full xl:w-[1280px] h-80">Area5</div>
    </div>
  );
}
