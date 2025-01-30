import MainLayout from "@/components/layouts/main-layout";
import AboutSection from "@/features/home/components/about-section";
import ArticlesSection from "@/features/home/components/article-section";
import HeroSection from "@/features/home/components/hero-section";
import SkillsSection from "@/features/home/components/skill-section";
import SuperSection from "@/features/home/components/super-section";

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <SuperSection />
      <ArticlesSection />
    </MainLayout>
  );
}

export default HomePage;
