import React from "react";
import { MainLayoutProps, SEOProps } from "@/types";
import Footer from "../block/footer";
import Header from "../block/header";
import SEOHeader from "../block/seo/box-seo";
import { cn } from "@/lib/utils";

const MainLayout: React.FC<MainLayoutProps & SEOProps> = ({
  children,
  withHeader = true,
  withFooter = true,
  classNameContent,
  className,
  title,
  description,
  keywords,
  author,
  image,
  url,
}: MainLayoutProps & SEOProps) => {
  return (
    <div className={cn(className, "overflow-x-hidden relative")}>
      {/* SEO Configuration */}
      <SEOHeader
        title={title}
        description={description}
        keywords={keywords}
        author={author}
        image={image}
        url={url}
      />

      {/* Layout Structure */}
      {withHeader && <Header />}
      <main className={cn(classNameContent)}>{children}</main>
      {withFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
