import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/static/Layout";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
