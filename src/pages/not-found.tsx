import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function NotFound() {
  return (
    <MainLayout
      withFooter={false}
      classNameContent="flex relative min-h-[100dvh] flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="absolute h-[100dvh] pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-bold tracking-tight text-primary">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Oops, the page you're looking for could not be found.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}

export default NotFound;
