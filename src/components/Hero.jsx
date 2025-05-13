import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Icono de WhatsApp

export default function Hero() {
  // Estado para controlar la visibilidad de la flecha
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;

      if (scrollPercentage > 10) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-primary text-white min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <img src="/logo2.png" alt="Logo" className="w-64 mb-6 drop-shadow-lg animate-fade-in" />

      <h1 className="font-raleway text-4xl sm:text-5xl font-extrabold mb-4 max-w-xl text-white leading-tight animate-slide-left">
  Gestioná tu constructora desde un solo lugar
</h1>

<p className="italic font-openSans text-sm sm:text-base mb-10 text-white/80 max-w-md animate-fade-up">
  Control de obras, caja, presupuestos, empleados y mucho más.
</p>

<button className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-blue-100 shadow-md transition duration-300 animate-fade-up">
  Solicitá una demo
</button>


      {/* Fondo decorativo SVG */}
      <div className="absolute bottom-0 left-0 w-screen z-0">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-32">
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Flecha indicadora de scroll encima del SVG */}
      {showArrow && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}

      {/* Icono de WhatsApp flotante */}
<a
  href="https://wa.me/5492257523265"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-10 right-10 z-50 group"
>
  <div className="bg-[#25D366] p-4 rounded-full shadow-xl transition-transform duration-300 group-hover:scale-110 animate-bounce-slow">
    <FontAwesomeIcon icon={faWhatsapp} className="text-white text-4xl sm:text-5xl" />
  </div>
</a>


    </section>
  );
}
