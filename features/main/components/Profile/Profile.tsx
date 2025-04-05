import MyImg from "@/public/img/myImg.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="m-4 mt-14 w-full font-sans font-semibold text-xl">
      <div className="flex justify-between gap-10">
        <p className="text-7xl opacity-80">Profile</p>

        <div className="flex items-start gap-6">
          <Image
            src={MyImg}
            className="aspect-square min-w-72 grayscale"
            alt="myimg"
            width={300}
            height={100}
          />
          <div className="flex w-full max-w-lg flex-col gap-10">
            <div>
              <div>
                <p className="h-full text-6xl">273*</p>
                <p className="-mt-1 text-xl">tuna-sand / Kei</p>
              </div>
              <p className="mt-2 text-lg leading-5 opacity-80">
                Webなどのソフトウェア開発を中心に、趣味でものづくりを楽しんでいる人。サイクリングやキャンプなどのアウトドアや、ピアノも楽しんでいる。
                現在はWeb、スマホアプリを幅広く開発している企業で従事している。
              </p>
            </div>
            <div className="mt-2 flex w-full items-end justify-between text-end font-mono text-sm opacity-80">
              <p>Links</p>
              <div>
                <p>Shiga, Japan</p>
                <p>Bachelor of Engineering</p>
                <p>Web Engineer</p>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
