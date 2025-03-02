import { createBrowserRouter } from "react-router-dom";

import { FirstView } from "@/views";
import { PrivateLayout, PublicLayout } from "@/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <FirstView />,
      },
      {
        path: "login",
        element: <FirstView />,
      },
      {
        path: "register",
        element: <FirstView />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "user",
        element: <FirstView />,
      },
      {
        path: "dashboard",
        element: <FirstView />,
      },
    ],
  },
]);

export { router };
