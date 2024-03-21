import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  previewLink,
  repoLink,
}: {
  title: string;
  description: string;
  previewLink?: string;
  repoLink: string;
}) => {
  return (
    <div className="w-full px-6 rounded-lg bg-gray-950 00 py-7 drop-shadow outline outline-gray-400 outline-1">
      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="flex gap-5 mt-3">
        {previewLink && (
          <Link target="_blank" href={previewLink}>
            <button className="px-4 py-2 text-sm bg-blue-600 rounded-md drop-shadow">
              Preview
            </button>
          </Link>
        )}
        <Link target="_blank" href={repoLink}>
          <button className="px-4 py-2 text-sm bg-gray-500 rounded-md drop-shadow">
            Source Code
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
