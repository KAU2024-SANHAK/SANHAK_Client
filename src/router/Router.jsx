import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

/*이런 형식으로 작성하도록 합니다.*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Start />,
      // },
      // {
      //   path: "/api/oauth/kakao/login",
      //   element: <Login />,
      // },
    ],
  },
]);

export default router;
