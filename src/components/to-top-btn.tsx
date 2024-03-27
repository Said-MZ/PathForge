"use client";

import { Button } from "./ui/button";
import { MdArrowDropUp } from "react-icons/md";

const ToTopBtn = () => {
  return (
    <Button
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full shadow-lg w-12 h-12 group "
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <MdArrowDropUp className="w-full h-full" />
      <div
        className={` hidden group-hover:block absolute -top-10 right-0 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 p-2 rounded-md shadow-lg`}
      >
        <p className="text-sm">Go to top</p>
      </div>
    </Button>
  );
};

export default ToTopBtn;
