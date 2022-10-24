import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pos",
    element: <div />,
  },
  {
    path: "/settings",
    element: <div />,
  },
  {
    path: "/logout",
    element: <div />,
  },
]);

export default router;
