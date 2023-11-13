import { Button } from "@material-tailwind/react";
import Image from "next/image";

const ProgressShortcut = () => {
  return (
    <>
    <div className="w-full bg-royal flex flex-col justify-center py-12 px-6">
        <p className="text-white pl-28 mb-8 text-md">Currently Learning</p>
        <div className="flex items-center text-sm">
          <div className="pl-28">
            <span className="border-2 border-emerald py-2 rounded-md">
              <span className="py-2 px-4 text-white bg-emerald text-center">
                Module
              </span>
              <span className="py-2 px-6">Functions</span>
            </span>
          </div>
          <div className="border border-t-emerald w-14" />
          <div className="flex items-center text-sm">
            <div className="">
              <span className="border-2 border-emerald py-2 rounded-md">
                <span className="py-2 px-4 text-white bg-emerald text-center">
                  Lesson
                </span>
                <span className="py-2 px-6">Async/Await</span>
              </span>
            </div>
          </div>
          <Image src={"/assets/continue.png"} width={10} height={17} alt="arrow" className="ml-8"/>
          <Button className="ml-8 bg-emerald w-[150px] h-[35px] flex items-center justify-center !capitalize text-sm !font-normal hover:bg-emerald-dark">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProgressShortcut;
