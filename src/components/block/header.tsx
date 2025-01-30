import {
  HelpCircle,
  Home,
  LucideIcon,
  Newspaper,
  Settings,
  ShieldIcon,
} from "lucide-react";
import { ExpandableTabs } from "../ui/expandable-tabs";

function Header() {
  const tabs = [
    { title: "Home", href: "/", icon: Home },
    { title: "Settings", href: "/settings", icon: Settings },
    { title: "Help", href: "/help", icon: HelpCircle },
    { title: "Articles", href: "/articles", icon: Newspaper },
    { title: "Auth", href: "/author", icon: ShieldIcon },
  ] as { title: string; href: string; icon: LucideIcon }[];

  return (
    <>
      <header className="mx-auto w-fit top-4 sticky z-[999]">
        <ExpandableTabs tabs={tabs} />
      </header>
    </>
  );
}

export default Header;
