import Profile from "@/features/main/components/Profile/Profile";

export default function Home() {
  return (
    <div className="full flex flex-col items-center justify-center">
      <div className="h-svh w-full bg-background">
        <p>hello</p>
      </div>
      <div className="w-full max-w-[1280px]">
        <Profile />
      </div>
    </div>
  );
}
