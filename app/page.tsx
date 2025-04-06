import Contact from "@/features/main/components/Contact/Contact";
import Contribution from "@/features/main/components/Contribution/Contribution";
import FAQ from "@/features/main/components/FAQ/FAQ";
import LogoThree from "@/features/main/components/LogoThree/LogoThree";
import Profile from "@/features/main/components/Profile/Profile";
import Skills from "@/features/main/components/Skills/Skills";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center">
      <div className="h-svh w-full relative">
        {/* 3Dコンテンツ */}
        <div className="absolute inset-0 w-full h-full z-0">
          <LogoThree />
        </div>

        {/* オーバーレイテキスト - 左下に配置 */}

        {/* <div className="bg-amber-500 absolute inset-0 h-full z-10 pointer-events-none flex items-start justify-start">
          <div className="bg-slate-700 mx-4 bg-transparenta max-w-[1440px] h-full">
            <div className="text-9xl font-semibold">
              <p>Hi</p>
            </div>
          </div>
        </div> */}

        <div className="absolute ax-w-[1440px]  inset-0 h-full z-10 pointer-events-none flex items-start justify-start">
          <div className="max-w-[1440px] w-full mx-auto">
            <div className="text-9xl font-semibold">
              <p>Hi</p>
            </div>
          </div>
        </div>
        {/* オーバーレイテキスト - 左下に配置 */}
        <div className="px-4 absolute inset-0 w-full h-full z-10 pointer-events-none flex items-end justify-start">
          <div className="max-w-[1440px] w-full mx-auto">
            <div className="text-9xl font-semibold">
              <p>WELCOME TO</p>
              <p>273*</p>
              <p>PORTFOLIO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-background z-40 w-full flex flex-col items-center justify-center px-4">
        <div className="bg-background z-40 flex w-full max-w-[1440px] flex-col items-center gap-10">
          <Profile />
          <Skills />
          <Contribution />
          <FAQ />
          <Contact />
        </div>
      </div>
    </div>
  );
}
