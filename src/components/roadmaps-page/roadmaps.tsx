import { roadmaps } from "@/lib/tempData";
import Roadmap from "./roadmap";

const Roadmaps = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
      {roadmaps.map((roadmap) => (
        <Roadmap key={roadmap.id} roadmap={roadmap} />
      ))}
    </div>
  );
};

export default Roadmaps;
