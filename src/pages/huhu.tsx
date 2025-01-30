import MainLayout from "@/components/layouts/main-layout";

function HuHu() {
  return (
    <MainLayout
      withFooter={false}
      classNameContent="flex min-h-[100svh] flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] px-2 items-center justify-center bg-background"
    >
      <div className="absolute h-[100vh] pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-5xl font-bold tracking-tight text-primary">
          Ya Sana Kerja Gobl*k
        </h1>
      </div>
    </MainLayout>
  );
}

export default HuHu;
