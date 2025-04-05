import Contact from "@/features/main/components/Contact/Contact";
import Dev from "@/features/main/components/Dev/Dev";
import FAQ from "@/features/main/components/FAQ/FAQ";
import Profile from "@/features/main/components/Profile/Profile";

export default function Home() {
  return (
    <div className="full flex flex-col items-center justify-center">
      <div className="h-svh w-full bg-background- bg-gray-800">
        <p>hello</p>
      </div>
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-10 px-4">
        <Profile />
        <Dev />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}
