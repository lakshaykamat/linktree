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
    <div className="">
      <h2 className="py-3 text-2xl font-bold text-center bg-pink-300 border-b-2 border-b-gray-400">
        {authorInfo.headline}
      </h2>
      <div className="flex flex-col gap-10 px-6 py-10 lg:flex-row">
        <div className="sm:max-w-[20rem] flex flex-col items-center gap-5 sm:flex-row lg:flex-col sm:gap-10">
          <Image
            src={authorInfo.avatar}
            alt="shiku"
            width={288}
            height={288}
            className="p-1 rounded-full outline outline-4 outline-pink-300 w-72 h-72"
          />
          <div className="flex flex-col w-full gap-3">
            <div className="">
              <h1 className="text-3xl font-bold sm:text-4xl">
                {authorInfo.name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-gray-700">
                {authorInfo.bio}
              </p>
              <p className="mt-4 text-base text-gray-700 flex gap-2">
                <Location />
                MP, India
              </p>
            </div>
            <hr className="h-[2px] bg-gray-400" />
            <SocialSection />
            <TechStack />
            <Education />
            <div className="mb-3">
              <h3 className="text-xl mb-3 font-semibold">Achivements</h3>
              <div className="flex gap-2 items-center flex-wrap">
                <ul className="list-disc pl-3 flex flex-col gap-2">
                  <li>
                    Certified in JavaScript and React at HackerRank.{" "}
                    <a
                      className="underline text-blue-500"
                      href="https://www.hackerrank.com/certificates/bea7c9684550"
                    >
                      Javascript
                    </a>{" "}
                    <a
                      className="underline text-blue-500"
                      href="https://www.hackerrank.com/certificates/bfdea6c06129"
                    >
                      Reactjs
                    </a>
                  </li>
                  <li>
                    Achieved a 3-star rating in Java, Python, and SQL at
                    HackerRank and earned a 2-star rating in C
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-3">
              <h3 className="text-xl mb-3 font-semibold">Resume</h3>
              <ul className="list-disc pl-3 flex flex-col gap-2">
                <li>
                  <a
                    className="text-blue-500 underline"
                    href="https://docs.google.com/document/d/16NCAOhfSQya0_4y_UeDTcoYgspQgPQDfUvzx_lZMqy8/edit?usp=sharing"
                  >
                    Resume drive Link
                  </a>
                </li>
                {/* <li>
                  <a
                    className="text-blue-500 underline"
                    href="Resume.pdf"
                    download={true}
                  >
                    Download resume
                  </a>
                </li> */}
              </ul>
            </div>
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
    </div>
  );
};
export default HomePage;
