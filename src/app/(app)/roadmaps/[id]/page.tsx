import React from "react";

const SingleRoadmapPage = ({ params: id }: { params: { id: string } }) => {
  const roadmapId = id.id;
  console.log(roadmapId);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-950 dark:to-neutral-900 py-4">
      <div className="max-w-[1200px] px-4 sm:px-6 mx-auto">
        {" "}
        <h1 className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b  dark:text-neutral-50 text-neutral-800 py-8">
          Single Roadmap Page
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Here you can see the roadmap with id: {roadmapId}
        </p>
      </div>
    </main>
  );
};

export default SingleRoadmapPage;
