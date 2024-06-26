import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getRandomEmoji } from "@/lib/emojis";

const Roadmap = ({
  roadmap,
}: {
  roadmap: {
    id: number;
    name: string;
    description: string;
    category: string;
    sharedBy: {
      name: string;
      avatar: string;
    };
    blocks: {
      blockNumber: number;
      blockContent: {
        name: string;
        description: string;
        resources: {
          resourceName: string;
          resourceLink: string;
        }[];
        color: string;
        textColor: string;
      }[];
    }[];
  };
}) => {
  return (
    <Link
      href={`/roadmaps/${roadmap.id}`}
      className="w-full p-4 dark:bg-neutral-900 bg-neutral-100  dark:text-neutral-100 text-neutral-900 shadow-md rounded-md border-2 relative group dark:hover:brightness-125 hover:brightness-90 transition-all"
    >
      <div className="absolute -top-4 right-2 sm:text-5xl text-3xl group-hover:rotate-[20deg] transition-transform duration-500">
        {getRandomEmoji()}
      </div>
      <div className="flex items-center mb-4 gap-2">
        <Avatar className="shadow-sm border-[1px]">
          <AvatarImage src={roadmap.sharedBy.avatar} />
          <AvatarFallback>
            {roadmap.sharedBy.name
              .split(" ")
              .map((name) => name[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span>{roadmap.sharedBy.name}</span>
      </div>

      <h2 className="text-2xl font-bold mb-4">{roadmap.name}</h2>
      <p>{roadmap.description}</p>
    </Link>
  );
};

export default Roadmap;
