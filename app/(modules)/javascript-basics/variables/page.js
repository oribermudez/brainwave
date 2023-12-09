"use client"

import Image from "next/image";

import Sidebar from "@/app/components/content/Sidebar";
import Breadcrumbs from "@/app/components/content/Breadcrums";
import Quiz from "@/app/components/content/Quiz";
import quizzes from "@/app/data-mocks/quizzes";
import PreviousNext from "@/app/components/content/PreviousNext";
import LessonComplete from "@/app/components/content/LessonComplete";
import lessons from "@/app/data-mocks/lessons";
import CodeHighlighter from "@/app/components/content/CodeHighlighter";
import VarLetConst from "@/app/components/content/VarLetConst";
import { declareVariable, assignVariable, camelCase, meaningful, constants, reserved, startsWithLetter, initialization } from "./codeExamples";

const Page = () => {
  return (
    <div className="min-h-80 bg-white grid grid-flow-col grid-cols-8 text-black">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="h-full col-span-4 col-start-3 my-6">
        <div className="mt-8 mb-14">
          <Breadcrumbs />
        </div>
        <div className="flex items-center">
          <h3 className="text-royal font-bold text-3xl">Variables</h3>
          <span className="mx-4 text-royal font-bold">|</span>
          <span className="text-white bg-emerald px-4 py-2 text-xs h-6 flex justify-center items-center rounded">Lesson</span>
        </div>
        <p className="my-8 text-gray-800">
          In this lesson, we&apos;ll dive into the fundamental concept of variables in JavaScript, unlocking the power to store and
          manipulate data within your code. Understanding variables is crucial to building robust and dynamic programs.
        </p>
        <h3 className="text-royal font-bold text-2xl my-8">What are Variables?</h3>
        <p className="bg-emerald/20 p-6 text-royal rounded my-8">
          A <strong>variable</strong> in computer programming is a symbolic name or identifier associated with a storage location in the computer&apos;s memory
          where data can be stored, retrieved, or manipulated. It serves as a placeholder for values or information that may change during
          the execution of a program.
        </p>
        <p>
          To put it in simple words, imagine variables as containers that can hold different types of information. These containers allow you to store and manage
          data in your JavaScript programs.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/container.png" width={400} height={202} alt="Containers" />
        </div>
        <h3 className="text-royal font-bold text-2xl my-8">Declaring and Assigning Variables</h3>
        <div className="my-8">
          In JavaScript, you declare (create) a variable using either <span className="bg-emerald/20 text-emerald-dark p-1 rounded">let</span>, <span className="bg-emerald/20 text-emerald-dark p-1 rounded">const</span> or <span className="bg-emerald/20 text-emerald-dark p-1 rounded">var</span> keywords followed by the name of the variable.
        </div>
        <div className="flex justify-center items-center my-8">
          <CodeHighlighter codeBlock={declareVariable} />
        </div>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/declaration.png" width={600} height={221} alt="Declaration" />
        </div>
        <p className="my-8">Now we have 3 different containers (variables) with the name: <span className="bg-emerald/20 text-emerald-dark p-1 rounded">name</span>, <span className="bg-emerald/20 text-emerald-dark p-1 rounded">age</span> and <span className="bg-emerald/20 text-emerald-dark p-1 rounded">DATE_OF_BIRTH</span>.</p>
        <p>
          Once declared, you can assign a value to the variable using the assignment operator <span className="bg-emerald/20 text-emerald-dark p-1 rounded">=</span>. This process is akin to labeling a box and placing
          something inside it.
        </p>
        <div className="flex justify-center items-center my-8">
          <CodeHighlighter codeBlock={assignVariable} />
        </div>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/assign.png" width={600} height={221} alt="Assignment" />
        </div>
        <p>
          You can also declare and assign a value to a variable in a single line of code. This is called <span className="bg-emerald/20 text-emerald-dark p-1 rounded">initialization</span>.
        </p>
        <div className="flex justify-center items-center my-8">
          <CodeHighlighter codeBlock={initialization} />
        </div>
        <h3 className="text-royal font-bold text-2xl my-8">Variable Scope</h3>
        <p className="my-8">
          We can think of scope as the area of code where a variable is visible. Variables can be local or global, affecting where
          they can be accessed and modified in your code. The scope of a variable is determined by where it is declared.
          We will discuss this in more detail later, but for now, let&apos;s review a high level definition of each of them.
        </p>
        <h4 className="text-royal font-bold text-lg pb-3 list-disc mt-4">Local Variables</h4>
        <p className="bg-emerald/20 p-6 text-royal rounded my-3">
          Local variables help keep things organized. They only affect the part of the code where they are declared.
        </p>
        <p>Local variables are like lights that brighten up a specific room. They only light up that room and not the others. If you
          turn on a lamp (variable) in your bedroom (function), it brightens up the bedroom, but it won&apos;t affect the lighting in the
          kitchen or living room.
        </p>
        <h4 className="text-royal font-bold text-lg pb-3 list-disc mt-4">Global Variables</h4>
        <p className="bg-emerald/20 p-6 text-royal rounded my-3">
          Global variables provide convenience but need careful handling to avoid confusion. They affect the entire code, so changes
          in one part can impact others.
        </p>
        <p>Global variables are like your home&apos;s WiFi. It&apos;s available anywhere in the house. You can connect to it from the kitchen,
          living room, or bedroom. If you set up the WiFi (global variable) in the living room (outside any function), you can use it
          from anywhere in the house.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/scopes.png" width={500} height={221} alt="Scopes" />
        </div>
        <h3 className="text-royal font-bold text-2xl my-8">Var | Let | Const</h3>
        <h4 className="text-royal font-bold text-lg pb-3 list-disc mt-4">Var Keyword</h4>
        <p className="bg-emerald/20 p-6 text-royal rounded my-3">
          <strong>var</strong> was the original keyword for variable declaration in JavaScript. When you declare a variable using the
          <strong className="ml-1">var</strong> keyword, the entire declaration is &apos;hoisted&apos; (moved) to the top of its scope during the compilation phase,
          potentially causing unexpected outcomes. Because of this, and the introduction of let and const, the use of var is now considered
          less preferable in modern JavaScript coding practices.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/var.png" width={650} height={121} alt="Var Keyword" />
        </div>
        <h4 className="text-royal font-bold text-lg pb-3 list-disc mt-4">Let Keyword</h4>
        <p className="bg-emerald/20 p-6 text-royal rounded my-3">
          Introduced to address the shortcomings of var, <strong>let</strong> is a versatile keyword for variable declaration. It allows for block-scoping,
          meaning the variable is confined to the block, statement, or expression where it&apos;s defined. This enhances code predictability
          and reduces unintended side effects. Additionally, let permits reassignment, enabling the variable&apos;s value to change.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/let.png" width={650} height={170} alt="Let Keyword" />
        </div>
        <h4 className="text-royal font-bold text-lg pb-3 list-disc mt-4">Const Keyword</h4>
        <p className="bg-emerald/20 p-6 text-royal rounded my-3">
          <strong>const</strong>, short for <strong>constant</strong>, is used when the intention is to create an unchangeable variable. Once a value is assigned to a const variable,
          it cannot be reassigned. This provides a mechanism to declare constants in code, which are values expected to remain constant
          throughout the program&apos;s execution.
        </p>
        <div className="flex justify-center items-center my-8">
          <Image src="/assets/const.png" width={350} height={181} alt="Const Keyword" />
        </div>
        <VarLetConst />
        <h3 className="text-royal font-bold text-2xl my-8">Naming a Variable</h3>
        <p className="my-6">
          In JavaScript, naming conventions for variables are essential for writing code that is not only functional but also readable and maintainable.
          Adhering to consistent naming conventions helps developers understand the purpose and usage of variables in a program.
          The following are commonly accepted naming conventions for variables in JavaScript:
        </p>
        <div>
          <ul className="ml-6 my-3">
            <li className="list-disc py-2">
              <h4 className="text-royal font-bold text-lg pb-3">Camel Case</h4>
              <div>
                Start your variable name with a lowercase letter. If the name has multiple words, capitalize the first letter of each new word.
                Variable names are <strong>case-sensitive</strong>, so <span className="bg-emerald/20 text-emerald-dark p-1 rounded">bob</span> and <span className="bg-emerald/20 text-emerald-dark p-1 rounded">Bob</span> would be different variables. 
              </div>
            </li>
            <div className="flex justify-center items-center my-8">
              <CodeHighlighter codeBlock={camelCase} />
            </div>
            <li className="list-disc py-2">
              <h4 className="text-royal font-bold text-lg pb-3">Meaningful and Descriptive</h4>
              <p>Choose names that make sense and describe what the variable is for. If it&apos;s holding a score, call it something like totalScore. This helps you and others understand the purpose of the variable just by looking at its name.</p>
            </li>
            <div className="flex justify-center items-center my-8">
              <CodeHighlighter codeBlock={meaningful} />
            </div>
            <li className="list-disc py-2">
              <h4 className="text-royal font-bold text-lg pb-3">Constants</h4>
              <p>When declaring constants, use all-uppercase letters with underscores to separate words. Constants are variables whose values should not change during the execution of the program.</p>
            </li>
            <div className="flex justify-center items-center my-8">
              <CodeHighlighter codeBlock={constants} />
            </div>
            <li className="list-disc py-2">
              <h4 className="text-royal font-bold text-lg pb-3">Avoid Reserved Words</h4>
              <p>
                Reserved words, also known as keywords, are words that have special meanings in a programming language and are reserved for specific
                purposes. These words cannot be used as identifiers (such as variable or function names) because they are already used by the language
                to define its structure, control flow, and functionality. Using reserved words as identifiers would lead to confusion and errors in the code.
              </p>
            </li>
            <div className="flex justify-center items-center my-8">
              <CodeHighlighter codeBlock={reserved} />
            </div>
            <li className="list-disc py-2">
              <h4 className="text-royal font-bold text-lg pb-3">Start with a Letter</h4>
              <p>Variable names must start with a letter (a-z, A-Z) or an underscore (_). Avoid starting variable names with numbers.</p>
            </li>
            <div className="flex justify-center items-center my-8">
              <CodeHighlighter codeBlock={startsWithLetter} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;