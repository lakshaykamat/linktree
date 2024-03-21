import { Blog, Github, Instagram, Linkedin, X,Email } from "@/app/Icons";
const socialMedia = [
    {
      jsx: Email,
      label: "Email",
      username: "ruchisingh.devops@gmail.com",
      url: function url(username: string) {
        return `mailto:${username}`;
      },
    },
    {
      jsx: Instagram,
      label: "Instagram",
      username: "ruchisingh.exe",
      url: function url(username: string) {
        return `https://www.instagram.com/${username}`;
      },
    },
    {
      jsx: Github,
      label: "Github",
      username: "ruchisingh-dev",
      url: function url(username: string) {
        return `https://www.github.com/${username}`;
      },
    },
    {
      jsx: X,
      label: "Twitter",
      username: "ruchisingh_dev",
      url: function url(username: string) {
        return `https://twitter.com/${username}`;
      },
    },
    {
      jsx: Linkedin,
      label: "LinkedIn",
      username: "ruchi-singh-178b142bb",
      url: function url(username: string) {
        return `https://www.linkedin.com/in/${username}`;
      },
    },
    {
      jsx:Blog,
      label:"Hasnode",
      username:"ruchiisingh",
      url:function url(username: string) {
          return `https://${username}.hashnode.dev/`;
        },
    }
  ];
  export default socialMedia