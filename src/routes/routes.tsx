import HomeLayout from "@/layouts/HomeLayout";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ResumePage from "@/pages/ResumePage";
import ServicePage from "@/pages/ServicePage";
import WorkPage from "@/pages/WorkPage";
import { createBrowserRouter } from "react-router-dom";

// create route paths.
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

// exporting router as default.
export default router;
