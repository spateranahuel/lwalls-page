import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function About() {
  const faqs = [
    {
      q: '¿Necesito instalar algo?',
      a: 'No, L-WALLS es una plataforma web. Accedés desde el navegador de cualquier computadora, tablet o celular con conexión a internet.',
    },
    {
      q: '¿Cuánto tarda la implementación?',
      a: 'Depende de la cantidad de obras, usuarios y datos a cargar. Escribinos y coordinamos los tiempos según tu caso.',
    },
    {
      q: '¿Voy a tener acompañamiento al empezar?',
      a: 'Sí, te acompañamos en la puesta en marcha para que la transición sea simple para vos y tu equipo.',
    },
    {
      q: '¿Puedo pedir una demo antes de contratar?',
      a: 'Sí, escribinos por WhatsApp y coordinamos una demo para que veas la plataforma en funcionamiento.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-raleway text-4xl font-bold text-primary mb-4">Quiénes somos</h2>
          <p className="font-openSans text-gray-600">
            L-WALLS nació para que quienes gestionan obras dejen de depender de planillas sueltas
            y mensajes dispersos. Reunimos en un solo lugar la información que antes estaba
            repartida entre cuadernos, chats y archivos, para que cada decisión se tome con datos
            claros y actualizados.
          </p>
        </div>

        <h3 className="font-raleway text-2xl font-bold text-center text-primary mb-6">
          Preguntas frecuentes
        </h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="font-openSans w-full flex items-center justify-between text-left px-5 py-4 font-semibold text-gray-800"
                >
                  {faq.q}
                  <FaChevronDown
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="font-openSans px-5 pb-4 text-gray-600">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
