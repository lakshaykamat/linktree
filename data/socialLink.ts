import { Blog, Github, Instagram, Linkedin, X, Email, Link } from "@/app/Icons";
const socialMedia = [
  {
    jsx: Email,
    label: "Email",
    username: "anamikasinghrajraj@gmail.com",
    url: function url(username: string) {
      return `mailto:${username}`;
    },
  },
  // {
  //   jsx: Link,
  //   label: "Portfolio",
  //   username: "lakshaykamat.netlify.app",
  //   url: function url(username: string) {
  //     return `https://${username}`;
  //   },
  // },
  {
    jsx: Linkedin,
    label: "LinkedIn",
    username: "anamikasinghraj",
    url: function url(username: string) {
      return `https://www.linkedin.com/in/${username}`;
    },
  },
  {
    jsx: Github,
    label: "Github",
    username: "anamikasinghraj",
    url: function url(username: string) {
      return `https://www.github.com/${username}`;
    },
  },
  // {
  //   jsx: X,
  //   label: "Twitter",
  //   username: "lakshaykamat",
  //   url: function url(username: string) {
  //     return `https://twitter.com/${username}`;
  //   },
  // },
];
export default socialMedia;
