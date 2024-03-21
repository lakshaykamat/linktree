import authorInfo from "@/data";
import Link from "next/link";

const SocialSection = () => {
  return (
    <div className="flex flex-col gap-2">
      {authorInfo.socialMedia.map((socialLink) => {
        return (
          <Link
            key={socialLink.username}
            href={socialLink.url(socialLink.username)}
            className="flex items-center gap-3 px-4 py-2 hover:underline hover:outline outline-purple-100 rounded-lg"
          >
            <socialLink.jsx />

            <span className="sm:text-sm">{socialLink.username}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialSection;
