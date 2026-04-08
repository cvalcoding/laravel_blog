import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
