import authorInfo from "@/data";
import Link from "next/link";
import Image from "next/image";
import { Location } from "./Icons";
import SocialSection from "./components/SocialSection";
import TechStack from "./components/TechStack";
import ProjectCard from "./components/ProjectCard";
import Education from "./components/Education";

const HomePage = () => {
  return (
    <>
      <h2 className="py-3 text-2xl font-bold text-center bg-purple-300 border-b-2 border-b-gray-400">
        {authorInfo.headline}
      </h2>
      <div className="flex flex-col gap-10 px-6 py-10 lg:flex-row">
        <div className="sm:max-w-[20rem] flex flex-col items-center gap-5 sm:flex-row lg:flex-col sm:gap-10">
          <Image
            src="/red_dot.jpg"
            alt="shiku"
            width={288}
            height={288}
            className="p-1 rounded-full outline outline-4 outline-purple-300 w-72 h-72"
          />
          <div className="flex flex-col w-full gap-3">
            <div className="">
              <h1 className="text-3xl font-bold sm:text-4xl">
                {authorInfo.name}
              </h1>
              <p className="mt-4 text-base text-gray-700">{authorInfo.bio}</p>
              <p className="mt-4 text-base text-gray-700 flex gap-2">
                <Location />
                New Delhi, India
              </p>
            </div>
            <hr className="h-[2px] bg-gray-400" />
            <SocialSection />
            <TechStack />
            <Education />
          </div>
        </div>
        <div className="flex-grow">
          <h1 className="mb-4 text-2xl font-bold">My Work</h1>
          <div className="flex flex-col gap-5">
            {authorInfo.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                previewLink={project.previewLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
