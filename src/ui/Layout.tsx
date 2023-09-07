import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <div className="main">{<Outlet />}</div>
    </div>
  );
}

export default Layout;
