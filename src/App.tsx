import Cursor from "./components/cursor/cursor";
import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
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

      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
