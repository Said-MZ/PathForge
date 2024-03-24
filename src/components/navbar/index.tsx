import { ThemeToggle } from "./theme-toggle";
import { Inter } from "next/font/google";
import UserButton from "./user-button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="w-full  border-b-2 dark:border-neutral-900 border-neutral-300 shadow-md ">
      <div className="max-w-[1200px] px-4 sm-px-6 flex justify-between items-center mx-auto py-2 ">
        <div>
          <Link
            href="/"
            className={`text-2xl font-bold transition-all hover:dark:brightness-75 hover:opacity-65 ${inter.className}`}
          >
            PathForge
          </Link>
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
