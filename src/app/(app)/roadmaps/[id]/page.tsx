import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { roadmaps } from "@/lib/tempData";
import React from "react";

const SingleRoadmapPage = ({ params: id }: { params: { id: string } }) => {
  const roadmapId = id.id;
  console.log(roadmapId);
  const roadmap = roadmaps.find(
    (roadmap) => roadmap.id === parseInt(roadmapId)
  );

  if (!roadmap) {
    return (
      <>
        <h1>404</h1>
        <p>roadmap not found</p>
      </>
    );
  }

  const {
    id: roadMapID,
    name,
    description,
    blocks,
    category,
    sharedBy,
  } = roadmap;

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 py-4">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto">
        <div className="flex items-center gap-2">
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
        <h2 className="text-6xl font-bold capitalize text-center">
          {roadmap.name}
        </h2>
        <section className="flex flex-col gap-4">
          {roadmap.blocks.map((block) => (
            <div key={block.blockNumber} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-neutral-50 mt-8">
                Block: {block.blockNumber}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                {block.blockContent.map((step) => (
                  <div
                    key={step.name}
                    style={{
                      borderColor: "#" + step.color || "#fefefe",
                    }}
                    className={`flex flex-col gap-4 p-4 border-2 rounded-md bg-neutral-900 text-neutral-100 w-full min-h-48`}
                  >
                    <h4 className="text-3xl font-bold">{step.name}</h4>
                    <p>{step.description}</p>
                    <div className="flex flex-col gap-2 opacity-50 text-xs">
                      <h4>resources:</h4>
                      {step.resources.map((resource) => (
                        <a
                          key={resource.resourceName}
                          href={resource.resourceLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {resource.resourceName}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default SingleRoadmapPage;
