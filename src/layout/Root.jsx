import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";

const Root = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <header className="py-2">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer></footer>
    </section>
  );
};

export default Root;
