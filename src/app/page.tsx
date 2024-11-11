import Heder from "./components/Heder";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Heder />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="w-[571px] text-[32px] text-[#4C4C4C]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. s standard
          </p>
          <button className="bg-[#121212] text-white w-[237px] h-16 text-[28px] mt-3 active:scale-90 hover:text-slate-950 hover:bg-slate-200">Contact US</button>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Image 
            src="/image/5071d41f80ee889a16dd9ca2c1eb5e9e.jfif" 
            alt="Description of image" 
            width={502}
            height={465}
          />
        </div>
      </div>
    </div>
  );
}
