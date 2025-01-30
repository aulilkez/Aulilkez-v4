import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ImageSkillsType } from "@/types";

function SkillsSection() {
  const images: ImageSkillsType[] = [
    {
      image:
        "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
      title: "React",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
      title: "TypeScript",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      title: "JavaScript",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000",
      title: "NestJS",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
      title: "Express.js",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      title: "Python",
    },
    {
      image: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_LightBlue.png",
      title: "Go",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      title: "Tailwind CSS",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
      title: "MySQL",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      title: "PostgreSQL",
    },
  ];
  return (
    <InfiniteMovingCards
      items={images}
      speed="slow"
      direction="left"
      className="max-w-4xl mx-auto mt-4 z-50"
    />
  );
}

export default SkillsSection;
