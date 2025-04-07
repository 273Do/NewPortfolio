import Contact from "@/features/main/components/Contact/Contact";
import Contribution from "@/features/main/components/Contribution/Contribution";
import FAQ from "@/features/main/components/FAQ/FAQ";
import LogoThree from "@/features/main/components/LogoThree/LogoThree";
import Profile from "@/features/main/components/Profile/Profile";
import Skills from "@/features/main/components/Skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="relative h-svh w-full">
        {/* 3Dコンテンツ */}
        <div className="absolute inset-0 z-0 h-full w-full">
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

        <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-start justify-start px-4">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="font-mono text-sm">
              <div className="h-11" />
              <p>Web / Mobile App Develop</p>
              <p>Design</p>
              <p>Sensor Analysis</p>
            </div>
          </div>
        </div>
        {/* オーバーレイテキスト - 左下に配置 */}
        <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-end justify-start px-4">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="font-semibold text-9xl">
              <p>WELCOME TO</p>
              <p>273*</p>
              <p>PORTFOLIO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-40 flex w-full flex-col items-center justify-center border-t bg-background px-4">
        <div className="z-40 flex w-full max-w-[1440px] flex-col items-center gap-10 bg-background">
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
