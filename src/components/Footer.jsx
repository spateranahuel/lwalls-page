import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa'; // Iconos para WhatsApp, Instagram, Email, Teléfono y el ícono de empresa

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo e información de la empresa */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img src="/logo2.png" alt="L-WALLS Logo" className="w-32 h-auto" /> {/* Ajuste de tamaño de imagen */}
            </div>
            <p className="text-sm">© 2025 Todos los derechos reservados</p>
          </div>

          {/* Enlaces de contacto */}
          <div className="mt-6 md:mt-0">
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <FaWhatsapp className="inline-block mr-3 text-white" />
                <span className="text-sm">WhatsApp: <a href="https://wa.me/5492257523265" className="text-white hover:text-secondary transition-colors">+5492257523265</a></span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="inline-block mr-3 text-white" />
                <span className="text-sm">Email: <a href="mailto:info@lwalls.com" className="text-white hover:text-secondary transition-colors">info@lwalls.com</a></span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaInstagram className="inline-block mr-3 text-white" />
                <span className="text-sm">Instagram: <a href="https://www.instagram.com/lwalls.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">@lwalls.app</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
