import { ThemeToggle } from "./theme-toggle";
import { Inter } from "next/font/google";
import UserButton from "./user-button";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="w-full  border-b-2 border-neutral-900 shadow-md ">
      <div className="max-w-[1200px] px-4 sm-px-6 flex justify-between items-center mx-auto py-2 ">
        <div>
          <h1 className={`text-2xl font-bold ${inter.className}`}>PathForge</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
