import { BadgeDelta } from "@/components/ui/badge-delta";
import { MDXProvider } from "@mdx-js/react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import Post from "../__data_sample__/__article_detail_data.mdx"; // Ekstensi ".mdx"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainLayout from "@/components/layouts/main-layout";

function ArticleDetailPage() {
  return (
    <MainLayout>
      <div className="prose lg:prose-xl px-3 prose-zinc dark:prose-invert max-w-4xl mx-auto">
        <MDXProvider>
          <div className="relative aspect-video  group mb-7 max-w-3xl mx-auto w-full">
            <Badge className="absolute top-3 right-3">"12 January 2024"</Badge>
            <img
              src={"https://placehold.co/100%"}
              alt={"Placeholder image"}
              className="aspect-video border-2 rounded-xl bg-background"
            />
            <div className="absolute bottom-3 flex w-full justify-between px-4 items-center">
              <Link
                to={"#profile/:aulilkez"}
                className="text-sm hover:underline z-50 font-medium group pl-2"
              >
                {"@Aulilkez"}
              </Link>
              <div className="flex gap-x-2">
                <BadgeDelta
                  variant="complex"
                  deltaType="increase"
                  value={"13.3%"}
                />
                <BadgeDelta
                  variant="complex"
                  deltaType="decrease"
                  value={"1.9%"}
                />
              </div>
            </div>
          </div>
          <Post />
          <div>
            <div className="grid gap-y-2">
              {Array.from({ length: 7 }).map(() => (
                <Card>
                  <CardHeader className="flex flex-row items-center gap-x-3">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>@Name</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed facilis nihil libero laborum fugit? Officiis quasi
                    dolorem pariatur illum deserunt itaque dolorum odit,
                    obcaecati rerum amet accusantium explicabo fuga id.
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid w-full gap-2 mt-7">
              <Textarea placeholder="Type your message here." />
              <Button>Send message</Button>
            </div>
          </div>
        </MDXProvider>
      </div>
    </MainLayout>
  );
}

export default ArticleDetailPage;
