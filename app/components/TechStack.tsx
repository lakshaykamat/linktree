import authorInfo from "@/data";

const TechStack = () => {
  return (
    <div className="mb-3">
      <h3 className="text-xl mb-2 font-semibold">Tech Stack</h3>
      <div className="flex gap-2 items-center flex-wrap text-sm">
        {authorInfo.techStack.map((tech) => (
          <TechItem key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
};

const TechItem = ({ name }: { name: string }) => {
  return <span className="bg-purple-100 px-3 py-2 rounded-lg">{name}</span>;
};
export default TechStack;
