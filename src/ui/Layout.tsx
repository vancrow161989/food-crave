import { Outlet } from "react-router-dom";
import Header from "./Header";
import useDarkMode from "@/hooks/useDarkMode";

function Layout() {
  useDarkMode();

  return (
    <div>
      <Header />
      <div className="main">{<Outlet />}</div>
    </div>
  );
}

export default Layout;
