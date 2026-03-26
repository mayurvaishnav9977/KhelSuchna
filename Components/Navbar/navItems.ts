import { HomeIcon, NewspaperIcon, UserIcon } from "@heroicons/react/24/outline";
import { TrophyIcon, PlayIcon } from "@heroicons/react/24/solid";

export const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/tournaments", label: "Tournaments", icon: TrophyIcon },
  { href: "/events/completed", label: "Live Score", icon: PlayIcon },
  { href: "/news", label: "News", icon: NewspaperIcon },
  { href: "/login", label: "Login", icon: UserIcon },
];