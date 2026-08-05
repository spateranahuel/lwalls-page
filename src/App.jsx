import Hero from "./components/Hero";
import Modules from "./components/Modules";
import CTA from "./components/CTA";
import Features2 from "./components/Features2";
import Gallery from "./components/Gallery";
import UseCases from "./components/UseCases";
import Plan from "./components/Plan";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="font-sans text-gray-800">
      <Hero />
      <Features2 />
      <Gallery />
      <Modules />
      <UseCases />
      <Plan />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
