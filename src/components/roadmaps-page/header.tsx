import Link from "next/link";
import { buttonVariants } from "../ui/button";

const RoadmapsHeader = () => {
  return (
    <section>
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
    </section>
  );
};

export default RoadmapsHeader;
