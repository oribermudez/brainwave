"use client"

import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-80">
      <div className="flex justify-center items-center bg-[#29DDDE]">
        <Image src="/assets/start.jpg" width={400} height={400} alt="JavaScript Basics Image" />
      </div>
      <div className="flex items-center justify-center bg-slate-50 text-gray-900">
        <div className="p-8 rounded-lg w-[600px]">
          <h1 className="text-6xl font-bold text-center mb-12 text-royal">JavaScript Basics</h1>
          <div className="text-sm text-gray-700">
            <p>
              In this foundational module, you&apos;ll immerse yourself in the essence of JavaScript. Mastery of these concepts
              unlocks pathways to advanced problem-solving and logical thinking, shaping the foundation for your future role
              as a software developer. Ready yourself for a fundamental dive into the heart of JavaScript&apos;s core principles. 
            </p>
          </div>
          <Link
            href="/javascript-basics/javascript-intro"
            className="mt-12 bg-[#29DDDE] text-white font-semibold px-4 py-2 rounded hover:bg-cyan-400 w-full flex gap-4 justify-center items-center"
          >
            Start
          </Link>
          <Link
          href="/"
            className="mt-6 bg-gray-300 text-white font-semibold px-4 py-2 rounded hover:bg-cyan-400 w-full flex gap-4 justify-center items-center"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Page;
