import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </section>
  );
};

export default Root;
