import Cursor from "./components/cursor/cursor";
import Hero from "./components/home/hero";
import Services from "./components/home/services";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/navbar/sidebar";
import Parallax from "./components/parallex/parallex";

function App() {
  return (
    <main>
      <Cursor />
      <section id="home">
        <Navbar />
        <Sidebar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section>section</section>
      <section>section</section>
      <section>section</section>
      <section>section</section>
      <section>section</section>
    </main>
  );
}

export default App;
