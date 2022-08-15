import { Outlet } from "react-router";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
