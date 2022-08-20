import { Outlet } from "react-router";
import FilterBar from "./FilterBar";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="App">
        <FilterBar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
