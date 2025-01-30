import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, User } from "lucide-react";
import { Link } from "react-router";

function AboutSection() {
  return (
    <section className="w-full flex mt-6 justify-center items-center py-7 px-3 md:py-8 flex-col lg:py-11 border relative dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-3xl w-full">
        <Card className="px-3 w-full relative z-50 rounded-none">
          <div>
            <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          </div>
          <CardHeader className="mb-0 flex flex-row justify-between items-center w-full">
            <div className="flex items-center">
              <Button size={"icon"}>
                <User />
              </Button>
              <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl ml-2 inline-block align-bottom">
                About Me
              </CardTitle>
            </div>
            <Link
              // to={`${window.location.origin}/public/CV_ULIL ABSOR.pdf`}
              to={
                "https://drive.google.com/file/d/1yYNcD3p3TeEX9PLfB0o-1b9iyTEVFt9W/view?usp=drivesdk"
              }
              className={badgeVariants({ variant: "outline" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              See CV
            </Link>
          </CardHeader>
          <CardContent className="px-2.5">
            <CardDescription>
              A Vocational High School graduate in Computer and Network
              Engineering with a strong passion for starting a career in
              technology. Possesses the ability to analyze and understand
              computer systems and networks, and is committed to continuously
              learning and developing technical skills. Although lacking formal
              experience, I bring enthusiasm, determination, and creativity
              tackle challenges. Seeking opportunities to contribute, learn, and
              grow within an innovative company.
            </CardDescription>
          </CardContent>
        </Card>
        <div className="h-3 mx-auto w-[90%] md:w-[95%] bg-accent opacity-90 relative border-b-2 border-x-2">
          <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        </div>
        <div className="h-3 mx-auto w-[80%] md:w-[90%] bg-accent opacity-75 relative border-b-2 border-x-2">
          <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
