import MyImg from "@/public/img/myImg.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full text-xl font-sans font-semibold  m-4">
      <p className="text-7xl opacity-80">Profile</p>
      <hr className="my-4 bg-muted" />
      <div className="flex items-start gap-6">
        <div className="flex flex-col gap-2">
          <Image
            src={MyImg}
            className="grayscale min-w-64"
            alt="myimg"
            width={400}
            height={100}
          />
          {/* <p className="text-sm font-mono opacity-80">Links</p> */}
        </div>
        <div>
          <div>
            <p className="text-6xl h-full">273*</p>
            <p className="text-xl">tuna-sand / Kei</p>
          </div>
          <div className="opacity-80 text-lg mt-2">
            <p className="leading-5">
              Webなどのソフトウェア開発を中心に、趣味でものづくりを楽しんでいる人。また、サイクリングやキャンプなどのアウトドア、ピアノも楽しんでいる。
              現在はWeb、スマホアプリを幅広く開発している企業で従事している。
            </p>
            {/* <p>
              現在はWeb、スマホアプリを幅広く開発している企業で従事している。
            </p> */}
          </div>
        </div>
      </div>
      <div className="text-end font-mono text-sm opacity-80 flex w-full justify-between">
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
