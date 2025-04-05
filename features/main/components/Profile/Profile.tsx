import MyImg from "@/public/img/myImg.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="m-4 w-full font-sans font-semibold text-xl">
      <p className="text-7xl opacity-80">Profile</p>
      <hr className="my-4 bg-muted" />
      <div className="flex items-start gap-6">
        <div className="flex flex-col gap-2">
          <Image
            src={MyImg}
            className="aspect-square min-w-52 border-1 border-muted-foreground p-3 grayscale"
            alt="myimg"
            width={300}
            height={100}
          />
        </div>
        <div>
          <div>
            <p className="h-full text-6xl">273*</p>
            <p className="-mt-1 text-xl">tuna-sand / Kei</p>
          </div>
          <div className="mt-2 text-lg opacity-80">
            <p className="leading-5">
              Webなどのソフトウェア開発を中心に、趣味でものづくりを楽しんでいる人。サイクリングやキャンプなどのアウトドアや、ピアノも楽しんでいる。
              現在はWeb、スマホアプリを幅広く開発している企業で従事している。
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full justify-between text-end font-mono text-sm opacity-80">
        <p>Links</p>
        <div className="-mt-15">
          <p>Shiga, Japan</p>
          <p>Bachelor of Engineering</p>
          <p>Web Engineer</p>
          <p>Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
