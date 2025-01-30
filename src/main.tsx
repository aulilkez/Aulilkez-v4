import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "./components/providers/theme-provider";
import "./index.css";
import { Loading } from "./pages/loading";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
