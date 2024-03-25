import RoadmapsHeader from "@/components/roadmaps-page/header";
import Roadmaps from "@/components/roadmaps-page/roadmaps";
import RoadmapsFilter from "@/components/roadmaps-page/roadmaps-filter";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const RoadMapsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 py-4">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto text-center">
        <RoadmapsHeader />
        <section className="flex gap-2 justify-center items-center max-w-[768px] px-6 mx-auto mt-12">
          <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-700"></div>
          <p>أو</p>
          <div className="w-full h-[1px] bg-neutral-300 dark:bg-neutral-700"></div>
        </section>
        <section>
          <h2 className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b  dark:text-neutral-50 text-neutral-900 py-8">
            استكشف خرائط التعلم المتاحة
          </h2>
        </section>
        <RoadmapsFilter />
        <Roadmaps />
      </div>
    </main>
  );
};

export default RoadMapsPage;
