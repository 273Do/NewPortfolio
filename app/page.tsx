import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import FAQ from "@/features/main/components/FAQ/FAQ";
import GitHubStatus from "@/features/main/components/GitHubStatus/GitHubStatus";
import Information from "@/features/main/components/Information/Information";
import Item from "@/features/main/components/Item/Item";
import LogoThree from "@/features/main/components/LogoThree/LogoThree";
import Tech from "@/features/main/components/Tech/Tech";

export default function Home() {
  return (
    // <div className="flex items-center">
    //   <Button variant="default" size="default">
    //     Hello World
    //   </Button>
    //   <ModeToggle />
    //   <div className="h-5 w-5 bg-primary-foreground" />
    // </div>
    // MEMO: m-1,p-1を動的に変更
    <div className="am-1 full flex items-center flex-col justify-center">
      <div className="ap-1 bg-blue-800 w-full xl:w-[1280px] h-svh xl:h-[960px]">
        <LogoThree />
      </div>
      <div className="p-1 bg-green-500 w-full xl:w-[1280px] h-[400px]">
        <Information />
      </div>
      <div className="p-1 bg-blue-800 w-full xl:w-[1280px] h-64">
        <GitHubStatus />
      </div>
      <div className="p-1 bg-green-500 w-full xl:w-[1280px] h-[600px]">
        <Tech />
      </div>
      <div className="p-1 bg-blue-800 w-full xl:w-[1280px] h-52">
        <Item />
      </div>
      <div className="p-1 bg-green-500 w-full xl:w-[1280px] h-80">
        <FAQ />
      </div>
    </div>
  );
}
