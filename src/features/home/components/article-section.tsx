import { BlockArticle } from "@/components/block/block-article";
import { BoxSuper } from "@/components/block/box-super";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router";
const articles = [
  {
    id: 1,
    title: "Islam dan Muslim: Beda Tipis, Tapi Bikin Bingung!",
    slug: "islam-dan-muslim-beda-tipis",
    body: "Ketika kita mendengar kata Islam dan Muslim, terkadang ada kebingungan yang muncul. Apakah keduanya sama? Artikel ini menjelaskan perbedaan antara Islam sebagai agama dan Muslim sebagai penganut agama Islam dengan gaya santai.",
    status: "published",
    author: "John Doe",
    timeCreated: "2024-11-18T10:00:00Z",
    category: "Religion",
    tags: ["Islam", "Muslim", "Religion"],
    likes: 150,
    views: 1025,
  },
  {
    id: 2,
    title: "Rahasia Produktivitas: 5 Kebiasaan yang Mengubah Hidup",
    slug: "rahasia-produktivitas",
    body: "Produktivitas adalah kunci keberhasilan di era modern. Dalam artikel ini, kita akan membahas lima kebiasaan penting yang dapat membantu meningkatkan produktivitas Anda, mulai dari manajemen waktu hingga mindfulness.",
    status: "published",
    author: "Jane Smith",
    timeCreated: "2024-11-17T14:30:00Z",
    category: "Personal Development",
    tags: ["Productivity", "Self-Improvement", "Habits"],
    likes: 250,
    views: 1800,
  },
  {
    id: 3,
    title: "Cara Mendapatkan 967 Juta per Bulan dengan Mudah",
    slug: "belajar-tailwind-css",
    body: "Tailwind CSS telah menjadi framework populer untuk membuat desain modern yang responsif. Dalam artikel ini, kami akan memberikan panduan langkah demi langkah untuk memulai menggunakan Tailwind CSS.",
    status: "draft",
    author: "Alice Johnson",
    timeCreated: "2024-11-15T08:15:00Z",
    category: "Web Development",
    tags: ["CSS", "Tailwind", "Frontend"],
    likes: 75,
    views: 600,
  },
];
function ArticlesSection() {
  return (
    <section className="max-w-5xl mx-auto px-3 md:px-6 mb-6 py-3 mt-4">
      <BoxSuper
        title="Articles"
        icon={Newspaper}
        description={
          "The article section on this web provides a space for users to write and read in-depth pieces on various topics. Articles can include opinions, news, personal stories, or other engaging and informative discussions. Each article is typically enriched with images, videos, or relevant links, offering a richer and more interactive reading experience. Readers can leave comments or share the article on other platforms as a form of engagement."
        }
      >
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-7 gap-x-6 items-start px-2.5 mt-7">
          {articles.map((article, idx: number) => (
            <BlockArticle as="li" item={article} key={idx} />
          ))}
        </ul>

        <div className="flex w-full justify-center">
          <Button className="w-full mt-3 max-w-[14rem] mx-auto" asChild>
            <Link to="/articles" className="flex items-center gap-2">
              <span>View More</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </BoxSuper>
    </section>
  );
}

export default ArticlesSection;
