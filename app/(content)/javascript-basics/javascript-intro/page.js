import Sidebar from "@/app/components/content/Sidebar";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-80 bg-white grid grid-flow-col grid-cols-8 text-black">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="h-full col-span-4 col-start-3 my-6">
        <div className="flex items-center">
          <h3 className="text-royal font-bold text-3xl">JavaScript Intro</h3>
          <span className="mx-4 text-royal font-bold">|</span>
          <span className="text-white bg-emerald px-4 py-2 text-xs h-6 flex justify-center items-center rounded">Lesson</span>
        </div>
        <p className="my-8 text-gray-800">
          In this lesson, we&apos;re diving into the exciting world of JavaScript, a programming language that brings life and
          interactivity to the web. If you&apos;ve never heard of JavaScript before, don&apos;t worry – we&apos;ll start from the basics
          and explore its importance in the world of web development.
        </p>
        <h3 className="text-royal font-bold text-2xl my-8">What is JavaScript?</h3>
        <p>
          Imagine a website as a house. HTML (HyperText Markup Language) is like the structure of the house, determining how
          many rooms there are and where the doors and windows are. CSS (Cascading Style Sheets) is like the paint and decorations,
          deciding how the house looks and feels.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/HtmlCssJs.png" width={400} height={156} alt="HTML, CSS and JS Logos" />
        </div>
        <p className="my-8">
          Now, JavaScript is the magic that happens inside the house. It&apos;s the electricity that powers the appliances, the plumbing
          that brings water to the taps, and the automation that makes everything work together seamlessly. JavaScript is the
          programming language that makes websites come alive.
        </p>
        <p>
          JavaScript was born in 1995, originally going by the name LiveScript. While it might share a bit of its name with Java, it&apos;s
          important to know that JavaScript is a whole different language from Java. Now, let&apos;s see an official definition:
        </p>
        <p className="bg-emerald/20 p-8 text-teal-800 rounded my-8">
          <strong>JavaScript</strong> is a dynamic, lightweight, interpreted, and high-level programming language that uses first class functions.
        </p>
        <p className="my-8">
          It is considered <strong>lightweight</strong>, demanding minimal memory usage during execution, ensuring efficiency in its operations.
          JavaScript stands as an <strong>interpreted</strong> programming language, executing code directly by translating each line into machine
          code on the fly. This real-time translation allows for quick and dynamic execution of programs.
        </p>
        <p className="my-8">
          Notably, JavaScript boasts the distinction of being a language with <strong>first-class functions</strong>. In practical
          terms, this means that functions are treated akin to any other variable. They can be seamlessly passed as arguments to
          other functions, returned as values from functions, and even assigned to variables. This characteristic flexibility
          empowers developers, allowing them to employ functions dynamically within their code, enhancing the language&apos;s
          expressiveness and adaptability.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/js-versatility.gif" width={600} height={263} alt="JavaScript Logo" />
        </div>
        <p>
          Originally designed for front-end web development, JavaScript has evolved into a multi-paradigm language that can be
          used across different domains, including back-end development and mobile app development. It enables developers to
          create interactive and dynamic content, manipulate the Document Object Model (DOM), and execute code on both the client
          and server sides.
        </p>
      </div>
    </div>
  );
};

export default Page;