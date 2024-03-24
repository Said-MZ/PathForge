import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const RoadMapsPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 py-4">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto text-center">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b  dark:from-neutral-50 from-neutral-900 dark:to-neutral-500 to-neutral-600 py-8">
          خرائط التعلم
        </h1>
        <p className="text-lg sm:text-2xl dark:text-neutral-300 relative z-20">
          استكشف خرائط التعلم المتاحة وابدأ رحلتك في تعلم المهارات
        </p>

        <div className="flex gap-4 justify-center items-center mt-6">
          <Link
            href="/add-roadmap"
            className={buttonVariants({ variant: "default" })}
          >
            إنشاء خريطة تعلم
          </Link>
          <Link
            href="/my-roadmaps"
            className={buttonVariants({ variant: "outline" })}
          >
            خرائطي
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RoadMapsPage;
