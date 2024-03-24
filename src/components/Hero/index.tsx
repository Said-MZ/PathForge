import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";

export function Hero() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-center">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b  dark:from-neutral-50 from-neutral-900 dark:to-neutral-500 to-neutral-600 py-8">
          تعلم المهارات بمنهجية وبدون تشتت
        </h1>
        <p className="text-lg sm:text-2xl dark:text-neutral-300 relative z-20">
          وجهتك الأولى للتعلم الذاتي والتطوير الشخصي والمهني
        </p>

        <div className="flex gap-4 justify-center items-center mt-6">
          <Link
            href="/roadmaps"
            className={buttonVariants({ variant: "default" })}
          >
            تصفح خرائط التعلم
          </Link>
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
}
