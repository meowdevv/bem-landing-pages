import { SectionLabel } from "../atoms";

const MinistrySection = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#F8F1FD] to-secondary dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-900">
      <div className="w-full max-w-6xl py-20 mx-auto">
        <div className="flex flex-col w-full max-w-md gap-4 items-center mx-auto">
          <SectionLabel title="Kementtrian" />
          <h1 className="text-2xl lg:text-4xl dark:text-gray-300 text-center font-bold leading-normal">
            Struktur kementrian bem stmik ikmi cirebon
          </h1>
        </div>
        <div className="grid w-full lg:grid-cols-2 gap-6 lg:gap-8 px-6 lg:px-0 py-20">
          <div className="aspect-[3/1] rounded-xl dark:bg-slate-800 dark:shadow-none bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300"></div>
          <div className="aspect-[3/1] rounded-xl dark:bg-slate-800 dark:shadow-none bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300"></div>
          <div className="aspect-[3/1] rounded-xl dark:bg-slate-800 dark:shadow-none bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300"></div>
          <div className="aspect-[3/1] rounded-xl dark:bg-slate-800 dark:shadow-none bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300"></div>
          <div className="aspect-[3/1] rounded-xl dark:bg-slate-800 dark:shadow-none bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300"></div>
          <div className="aspect-[3/1] rounded-xl dark:bg-slate-800 dark:shadow-none bg-white hover:shadow-md hover:shadow-gray-200 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default MinistrySection;
