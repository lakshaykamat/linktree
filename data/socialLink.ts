import { Blog, Github, Instagram, Linkedin, X, Email, Link } from "@/app/Icons";
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
    jsx: Link,
    label: "Portfolio",
    username: "lakshaykamat.netlify.app",
    url: function url(username: string) {
      return `https://${username}`;
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
    jsx: Github,
    label: "Github",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://www.github.com/${username}`;
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
    jsx: X,
    label: "Twitter",
    username: "lakshaykamat",
    url: function url(username: string) {
      return `https://twitter.com/${username}`;
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
