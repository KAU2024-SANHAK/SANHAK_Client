// import Start from "../pages/Start/Start";
// import Login from "../components/Login";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

/*이런 식으로 작성하기*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      //   {
      //     path: "/",
      //     element: <Start />,
      //   },
      //   {
      //     path: "/api/oauth/kakao/login",
      //     element: <Login />,
      //   },
    ],
  },
]);

export default router;
