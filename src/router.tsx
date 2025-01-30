import React from "react";
import { createBrowserRouter } from "react-router";

{
  /* Hak Access */
}
const HomePage = React.lazy(() => import("@/pages/home"));
const ArticlePage = React.lazy(() => import("@/pages/articles"));
const ArticleDetailPage = React.lazy(() => import("@/pages/aricle-detail"));

const AuthPage = React.lazy(() => import("@/pages/auth"));
{
  /*  Error Page */
}
//const HuHuPage = React.lazy(() => import("@/pages/huhu"));
const NotFoundPage = React.lazy(() => import("@/pages/not-found"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  { path: "author", element: <AuthPage /> },

  { path: "articles", element: <ArticlePage /> },
  { path: "articles/:slug", element: <ArticleDetailPage /> },

  /*
     {
    path: "articles/cara-mendapatkan-967-juta-per-bulan-dengan-mudah",
    element: <HuHuPage />,
  },
  */
  { path: "*", element: <NotFoundPage /> },
]);
