import { cn } from "@/lib/utils";
import { BlockArticleType } from "@/types";
import { Link } from "react-router";
import { Badge } from "../ui/badge";
import { BadgeDelta } from "../ui/badge-delta";
import { BoxStars } from "../ui/box-stars";

interface BlockArticleProps {
  item?: BlockArticleType
  as: "div" | "li";
  className?: string;
}

export const BlockArticle: React.FC<BlockArticleProps> = ({
  item,
  as: Tag = "div",
  className = "",
}) => {
  return (
    <Tag className={cn(className, "relative group rounded-md p-2 md:flex md:flex-row md:items-center mb-4")}>
      <BoxStars className="hidden group-hover:block group-hover:transition-all ease-linear duration-500" />
      <div className="relative w-full h-60 md:h-56">
        <BoxStars className="hidden group-hover:block group-hover:transition-all ease-linear duration-500" />
        <Badge className="absolute top-3 right-3">
          {item?.date || "24 January 2027"}
        </Badge>
        <img src={item?.url || "https://placehold.co/1400"} alt={item?.alt || "HuHa HiHi"} className="object-cover rounded-md size-full bg-secondary" />
        <div className="absolute bottom-3 flex w-full justify-between px-4 item?s-center">
          <Link to={"#si"} className="text-sm hover:underline z-50 font-medium group pl-2">{"@" + item?.author || "@Aulilkez"}</Link>
          {/* Badge Delta Section */}
          <div className="flex gap-x-2">
            <BadgeDelta className="bg-background" variant="complex" deltaType="increase" value={item?.valueIncrease || "16.7"} />
            <BadgeDelta className="bg-background" variant="complex" deltaType="decrease" value={item?.valueDecrease || "18.7"} />
          </div>
        </div>
      </div>
      <div className="sm:ml-6 xl:ml-0 mt-3 md:mt-0 p-1.5">
        <Link to={`/articles`} className="scroll-m-20 pb-2 hover:underline transition-transform text-xl font-semibold tracking-tight first:mt-0">
          {item?.title || "Title"}
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">
          {item?.desc || "Tailwind CSS telah menjadi framework populer untuk membuat desain modern yang responsif. Dalam artikel ini, kami akan memberikan panduan langkah demi langkah untuk memulai menggunakan Tailwind CSS."}
        </p>
      </div>
    </Tag>
  );
}
