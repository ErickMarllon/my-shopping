import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { FirstView, SecondView } from "@/views";
import { PrivateLayout, PublicLayout } from "@/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<FirstView />} />
        <Route path="login" element={<FirstView />} />
        <Route path="register" element={<SecondView />} />
      </Route>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="user" element={<FirstView />} />
        <Route path="dashboard" element={<FirstView />} />
      </Route>
    </>
  )
);

export { router };
