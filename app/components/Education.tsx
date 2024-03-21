import authorInfo from "@/data";

const Education = () => {
  return (
    <div className="mb-3">
      <h3 className="text-xl mb-3 font-semibold">Education</h3>
      <div className="flex gap-2 items-center flex-wrap">
        <ul className="list-disc pl-3 flex flex-col gap-2">
          {authorInfo.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
