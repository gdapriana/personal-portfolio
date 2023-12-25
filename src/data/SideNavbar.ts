import GithubIcon from "@/assets/images/github.png";
import WhatsappIcon from "@/assets/images/whatsapp.png";
import InstagramIcon from "@/assets/images/instagram.png";
import TwitterIcon from "@/assets/images/twitter.png";
import FacebookIcon from "@/assets/images/facebook.png";
import DiscordIcon from "@/assets/images/discord.png";

const metadata: {
  name: string;
  tag: string;
  hired: boolean;
  navigations: { name: string; path: string; icon?: string }[];
  social: { name: string; path: string; icon?: any }[];
  footer: string;
} = {
  name: "Gede Apriana",
  tag: "@gdaprianaa",
  hired: true,
  navigations: [
    {
      name: "Dashboard",
      path: "/",
      icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
    },
    {
      name: "Project",
      path: "/projects",
      icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    },
    {
      name: "Blog",
      path: "/blogs",
      icon: "M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75",
    },
    {
      name: "Education",
      path: "/educations",
      icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    },
    {
      name: "Accomplishment",
      path: "/accomplishments",
      icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
    },
  ],
  social: [
    {
      name: "github",
      path: "https://github.com/icequeenwand",
      icon: GithubIcon,
    },
    { name: "whatsapp", path: "wa.me/6281339486902", icon: WhatsappIcon },
    {
      name: "instagram",
      path: "https://instagram.com/gdaprianaa",
      icon: InstagramIcon,
    },
    {
      name: "twitter",
      path: "https://twitter.com/gdaprianaa",
      icon: TwitterIcon,
    },
    {
      name: "facebook",
      path: "https://facebook.com/gdapriana",
      icon: FacebookIcon,
    },
    {
      name: "discord",
      path: "https://github.com/icequeenwand",
      icon: DiscordIcon,
    },
  ],
  footer: "Create with ❤️ by",
};

export default metadata
