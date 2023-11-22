import Sidebar from "@/app/components/content/Sidebar";

const Page = () => {
  return (
    <div className="min-h-80 bg-white grid grid-flow-col grid-cols-8">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="h-full col-span-4 col-start-3 my-6">
        <div className="flex items-center">
          <h3 className="text-royal font-bold text-lg">What is JavaScript?</h3>
          <span className="mx-4 text-royal font-bold">|</span>
          <span className="text-white bg-emerald px-4 py-2 text-xs h-6 flex justify-center items-center rounded">Lesson</span>
        </div>
      </div>
    </div>
  );
};

export default Page;