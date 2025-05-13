import Hero from "./components/Hero";
import Features from "./components/Features";
import Modules from "./components/Modules";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <main className="font-sans text-gray-800">
      <Hero />
      <Features />
      <Modules />
      <CTA />
      <ContactForm />
    </main>
  );
}
