import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <News></News>,
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
