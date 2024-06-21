import React from "react";
import router from "@/routes/routes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// CSS and font imports
import "@/index.css";
import "@/assets/fonts/JetBrains_Mono/JetBrainsMono-VariableFont_wght.ttf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
