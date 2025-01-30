import { BoxArticle } from "@/components/block/box-article";
import { BoxSuper } from "@/components/block/box-super";
import MainLayout from "@/components/layouts/main-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeDelta } from "@/components/ui/badge-delta";
import { BoxStars } from "@/components/ui/box-stars";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Boxes, Newspaper, TowerControl } from "lucide-react";
import { Link } from "react-router";

function ArticlesPage() {
  return (
    <MainLayout title="Artucles">
      <section className="max-w-5xl mx-auto px-3 md:px-6 mb-6 py-3 mt-4">
        <BoxSuper
          title="Tweet"
          icon={TowerControl}
          description={
            "This web tweet platform allows you to write whatever you want about your day. With a simple interface, you can share your thoughts, feelings, or interesting events that happened throughout the day without any text length restrictions. Each tweet can be followed, replied to, or liked by others, allowing easy sharing of stories."
          }
        >
          <div className="relative">
            <Card className="py-3 mt-5 flex overflow-x-scroll overflow-y-hidden [scrollbar-width:none] relative overscroll-none border-none space-x-3 pl-2 scrollbar-thin shadow-none">
              {Array.from({ length: 12 }).map((_, idx) => (
                <Card
                  className="group w-60 min-w-64 h-80 border-2 relative flex items-center p-0"
                  key={idx}
                >
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Link
                      to={"/aulilkez"}
                      className="font-bold hover:underline transition-transform"
                    >
                      @Avatar Me
                    </Link>
                  </div>
                  {/* Isi konten utama */}
                  <CardContent className="py-4 px-0 w-full space-y-3 items-center flex-col flex">
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                      <Boxes />
                      <CardTitle className="px-4 text-center blur-sm group-hover:blur-none transition-all ease-linear duration-300">
                        Pdf to Word Hallo Worlr say good Bye!
                      </CardTitle>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-3 right-3 flex gap-x-2">
                    <BadgeDelta
                      variant="complex"
                      deltaType="increase"
                      className="hover:border-green-400"
                      value="13.3%"
                    />
                    <BadgeDelta
                      variant="complex"
                      deltaType="decrease"
                      value="1.9%"
                    />
                  </div>
                  {/* Elemen Plus */}
                  <BoxStars className="hidden group-hover:block transition-opacity duration-500" />
                </Card>
              ))}
            </Card>
          </div>
        </BoxSuper>
        <BoxSuper title="Articles" icon={Newspaper}>
          <ul className="grid mt-7 grid-cols-1 xl:grid-cols-3 gap-y-3 gap-x-6 items-start px-2.5">
            {Array.from({ length: 10 }).map((_, idx: number) => (
              <BoxArticle key={idx} />
            ))}
          </ul>
        </BoxSuper>
      </section>
    </MainLayout>
  );
}

export default ArticlesPage;
