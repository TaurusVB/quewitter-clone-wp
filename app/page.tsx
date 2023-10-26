import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            <Sidebar />
            <div className="text-3xl text-sky-500 border border-purple-700 rounded-3xl">
              Hello world
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
