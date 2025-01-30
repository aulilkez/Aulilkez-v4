import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { Badge } from "../ui/badge";
import { BadgeDelta } from "../ui/badge-delta";
import { BoxStars } from "../ui/box-stars";
import { GridPattern } from "../ui/grid-pattern";

interface BoxArticleType {
  url?: string;
  slug?: string;
  alt?: string;
  valueDecrease?: string;
  valueIncrease?: string;
  desc?: string;
  title?: string;
  date?: string;
  author?: string;
}

export const BoxArticle = ({
  title,
  url,
  alt,
  valueDecrease,
  valueIncrease,
  desc,
  date,
  author,
  slug,
}: BoxArticleType) => {
  return (
    <li className="relative flex group flex-col md:items-center sm:flex-row xl:flex-col items-start p-2 hover:shadow-sm rounded-md transition-colors">
      <BoxStars className="hidden group-hover:block group-hover:transition-all ease-linear duration-500" />
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "md:group-hover:[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] transition-colors ease-linear delay-100 duration-500 group-hover:[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] group-hover:block hidden rounded-xl",
        )}
      />
      <div className="order-1 sm:ml-6 xl:ml-0 mt-3 md:mt-0">
        <Link
          to={`/articles/${slug?.replace(/ /g, "-").toLowerCase()}`}
          className="scroll-m-20 pb-2 hover:underline transition-transform text-xl font-semibold tracking-tight first:mt-0"
        >
          {title || "TITLE Lorem, ipsum dolor sit amet consectetur adipisicing"}
        </Link>
        <div className="mt-2 text-sm text-muted-foreground">
          <p>
            {desc ||
              "Tailwind CSS telah menjadi framework populer untuk membuat desain modern yang responsif. Dalam artikel ini, kami akan memberikan panduan langkah demi langkah untuk memulai menggunakan Tailwind CSS."}
          </p>
        </div>
      </div>
      <div className="relative group">
        <BoxStars className="hidden group-hover:block group-hover:transition-all ease-linear duration-500" />
        <Badge className="absolute top-3 right-3">
          {date || "12 January 2024"}
        </Badge>
        <img
          src={url || "https://placehold.co/1400"}
          alt={alt || "Placeholder image"}
          className="aspect-video border-2 rounded-xl md:max-w-sm"
        />
        <div className="absolute bottom-3 flex w-full justify-between px-4 items-center">
          <Link
            to={"#profile/:aulilkez"}
            className="text-sm hover:underline z-50 font-medium group pl-2"
          >
            {author || "@Aulilkez"}
          </Link>
          <div className="flex gap-x-2">
            <BadgeDelta
              className="bg-background"
              variant={"complex"}
              deltaType="increase"
              value={valueIncrease || "13.3%"}
            />
            <BadgeDelta
              className="bg-background"
              variant="complex"
              deltaType="decrease"
              value={valueDecrease || "13.3%"}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
