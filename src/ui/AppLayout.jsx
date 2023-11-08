import { Outlet } from "react-router-dom";
import Header from "./Header";
import SidebarComponent from "./SidebarComponent";

function AppLayout() {
  return (
    <div className="app">
      <SidebarComponent />
      <main className="content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
