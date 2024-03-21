import { Blog, Github, Instagram, Linkedin, X, Email } from "@/app/Icons";
const socialMedia = [
  {
    jsx: Email,
    label: "Email",
    username: "lakshaykamat.dev@gmail.com",
    url: function url(username: string) {
      return `mailto:${username}`;
    },
  },
  {
    jsx: Instagram,
    label: "Instagram",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://www.instagram.com/${username}`;
    },
  },
  {
    jsx: Github,
    label: "Github",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://www.github.com/${username}`;
    },
  },
  {
    jsx: X,
    label: "Twitter",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://twitter.com/${username}`;
    },
  },
  {
    jsx: Linkedin,
    label: "LinkedIn",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://www.linkedin.com/in/${username}`;
    },
  },
  {
    jsx: Blog,
    label: "Hasnode",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://${username}.hashnode.dev/`;
    },
  },
];
export default socialMedia;
