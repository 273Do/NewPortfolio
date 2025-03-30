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
    <div className="am-1 full flex flex-col items-center justify-center">
      <div className="ap-1 h-svh w-full bg-blue-800 xl:h-[960px] xl:w-[1280px]">
        <LogoThree />
      </div>
      <div className="h-[400px] w-full bg-green-500 p-1 xl:w-[1280px]">
        <Information />
      </div>
      <div className="h-64 w-full bg-blue-800 p-1 xl:w-[1280px]">
        <GitHubStatus />
      </div>
      <div className="h-[600px] w-full bg-green-500 p-1 xl:w-[1280px]">
        <Tech />
      </div>
      <div className="h-52 w-full bg-blue-800 p-1 xl:w-[1280px]">
        <Item />
      </div>
      <div className="h-80 w-full bg-green-500 p-1 xl:w-[1280px]">
        <FAQ />
      </div>
    </div>
  );
}
