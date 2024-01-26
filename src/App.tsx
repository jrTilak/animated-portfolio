import Cursor from "./components/cursor/cursor";
import About from "./components/home/about";
import Contact from "./components/home/about";
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
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <About/>
    </main>
  );
}

export default App;
