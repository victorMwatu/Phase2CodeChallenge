import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
