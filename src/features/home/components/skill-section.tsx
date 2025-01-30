import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function SkillsSection() {
  const imageUrls = [
    "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=13674&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=13654&format=png&color=000000",
    "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_LightBlue.png",
    "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
  ];
  return (
    <InfiniteMovingCards
      items={imageUrls}
      speed="slow"
      direction="left"
      className="max-w-4xl mx-auto mt-4 z-50"
    />
  );
}

export default SkillsSection;
