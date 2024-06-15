import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

// create route paths.
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

// exporting router as default.
export default router;
