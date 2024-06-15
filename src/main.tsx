import router from "@/routes/routes";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./assets/fonts/JetBrains_Mono/JetBrainsMono-Italic-VariableFont_wght.ttf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
