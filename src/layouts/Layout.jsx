import { Outlet } from "react-router-dom";
import { useMobile } from "../hooks/useMobile";

const Layout = () => {
  useMobile();

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
