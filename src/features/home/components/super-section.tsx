import { BoxSuper } from "@/components/block/box-super";
import { BoxStars } from "@/components/ui/box-stars";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Boxes, List } from "lucide-react";

function SuperSection() {
  return (
    <section className="max-w-5xl mx-auto px-3 md:px-6 mb-6 py-3 mt-4 relative">
      <Card className="lg:px-2">
        <BoxSuper
          className="pt-7 px-7 z-50 pb-2"
          title="Tools & Projects"
          icon={List}
          description={
            "The tools and projects section showcases various tools or applications that assist users in their work, as well as projects they are working on or have completed. Each tool or project is typically accompanied by a brief description and a link for further access or viewing."
          }
        >
          <div className="relative">
            <Card className="py-3 mt-5 flex overflow-x-scroll overflow-y-hidden relative overscroll-none border-none space-x-2 pl-2 scrollbar-thin shadow-none">
              {Array.from({ length: 12 }).map((_, idx) => (
                <Card
                  className="group w-48 min-w-48 border-2 relative flex items-center p-0 hover:bg-accent"
                  key={idx}
                >
                  {/* Isi konten utama */}
                  <CardContent className="py-4 px-0 w-full space-y-3 items-center flex-col flex">
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                      <Boxes />
                      <CardTitle>Pdf to Word</CardTitle>{" "}
                    </div>
                    <Button size="sm" className="capitalize w-4/5 mx-auto">
                      Get started!
                    </Button>
                  </CardContent>
                  {/* Elemen Plus */}
                  <BoxStars className="hidden group-hover:block transition-opacity duration-500" />
                </Card>
              ))}
            </Card>
            <div className="absolute -right-1 top-0 bottom-0 w-12 bg-gradient-to-l from-background blur-sm to-transparent z-50" />
          </div>
        </BoxSuper>
      </Card>
    </section>
  );
}

export default SuperSection;
