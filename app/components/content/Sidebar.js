"use client"

import { useState } from "react";
import Image from "next/image";
import progressImage from "@/app/_helpers/progressImage";
import lessons from "@/app/data-mocks/lessons";

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
      className={`fixed w-80 bg-[#FDFDFD] border border-gray-300 min-h-90 transform ${
        isSidebarVisible ? "" : "-translate-x-full"
      } transition-transform`}
    >
      <button onClick={toggleSidebar}>
        <Image
          src={`/assets/${
            isSidebarVisible ? "hide-button" : "list-button"
          }.png`}
          width={41}
          height={41}
          alt="Toggle Sidebar"
          className={`absolute ${ isSidebarVisible ? '-right-4' : '-right-14' } top-6`}
        />
      </button>
      <h3 className="text-xl text-left pl-12 text-gray-900 pb-8 pt-2 border-b border-gray-300">
        JavaScript Basics
      </h3>
      <div className="flex flex-col p-8 pl-12 border-b border-gray-300">
        {lessons.map((lesson, index) => (
          <div
            key={`${lesson.name}-index`}
            className="flex flex-col justify-center"
          >
            <div
              href={lesson.url}
              className="text-gray-900 hover:text-royal text-sm flex items-center"
            >
              <Image
                src={progressImage(lesson.progress)}
                width={21}
                height={21}
                alt="Progress Icon"
                className="w-4 h-4"
              />
              <span className="ml-4">{lesson.name}</span>
            </div>
            {index !== lessons.length - 1 && (
              <div
                className={`border-l-2 border-dashed ml-[7px] ${
                  lesson.progress === 100 ? "border-l-royal" : "border-l-powderBlue"
                } h-8`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-8 ml-12">
        <Image src="/assets/back-arrow.png" width={10} height={10} alt="Back" className="w-2 h-4"/>
        <span className="text-royal ml-4 text-sm">Go Back Home</span>
      </div>
    </div>
  );
};

export default Sidebar;