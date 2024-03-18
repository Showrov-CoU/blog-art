import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://blog-art-server.vercel.app/blog/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
