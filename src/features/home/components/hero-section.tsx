import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Plus } from "lucide-react";

function HeroSection() {
  const words = [
    "Baik",
    "Ganteng",
    "Penyayang",
    "Ramah",
    "Baik hati",
    "Intelek",
    "Ceria",
  ];
  const theme = useTheme();
  const shadowColor = theme.theme === "dark" ? "white" : "black";
  return (
    <div className="p-2 px-3 md:px-9">
      <div className="relative w-full h-svh max-h-[600px] mx-auto rounded-xl max-w-6xl bg-zinc-300/30 p-[3px] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] dark:bg-zinc-700/30">
        <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black z-50" />
        <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black z-50" />
        <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black z-50" />
        <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black z-50" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center items-center size-full">
          <div className="uppercase z-50">
            <div
              className="font-bold text-5xl md:text-5xl pl-5 lg:text-6xl"
              translate="no"
            >
              I'am
            </div>
            <div className="text-9xl font-extrabold md:hidden">Aulil</div>
            <div
              className="text-9xl font-extrabold hidden md:block"
              translate="no"
            >
              ulil{" "}
              <LineShadowText className="italic" shadowColor={shadowColor}>
                Absor
              </LineShadowText>
            </div>
            <div className="flex items-center px-1.5 md:px-4">
              <Button className="flex-1 h-11 md:h-14 relative ">
                <FlipWords
                  words={words}
                  className="dark:text-black text-white text-2xl md:text-3xl capitalize"
                />
                <Plus className="absolute h-9 w-9 md:block hidden -top-3 -left-3 dark:text-white text-black" />
                <Plus className="absolute h-9 w-9 md:block hidden -bottom-3 -left-3 dark:text-white text-black" />{" "}
                <Plus className="absolute h-9 w-9 md:block hidden -top-3 -right-3 dark:text-white text-black" />
                <Plus className="absolute h-9 w-9 md:block hidden -bottom-3 -right-3 dark:text-white text-black" />
              </Button>
              <div className="flex flex-col flex-1 text-right font-semibold md:text-2xl">
                <span>A Junior</span>
                <span>Dev or others</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
