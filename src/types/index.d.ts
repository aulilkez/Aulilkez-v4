export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  classNameContent?: string;
  withHeader?: boolean;
  withFooter?: boolean;
}
export interface SEOProps {
  title?: string; // Judul halaman
  description?: string; // Deskripsi halaman
  keywords?: string; // Kata kunci SEO
  author?: string; // Penulis konten
  image?: string; // Gambar untuk sosial media
  url?: string; // URL halaman
}

export interface ImageSkillsType {
  image: string;
  title: string;
}

export interface BlockArticleType {
  id?: number
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
