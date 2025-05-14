import { useEffect, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#features');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="features" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        ¿Por qué elegir nuestra app?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center items-stretch">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <div className="group p-6 bg-white shadow-lg rounded-lg h-full flex flex-col transform transition hover:scale-105 hover:shadow-2xl hover:bg-primary hover:text-white">
              <div className="mb-4 text-4xl text-primary group-hover:text-white">
                <i
                  className={`fas ${
                    i === 0
                      ? 'fa-th-large'
                      : i === 1
                      ? 'fa-sync-alt'
                      : 'fa-tachometer-alt'
                  }`}
                ></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {i === 0
                  ? 'Todo en un solo lugar'
                  : i === 1
                  ? 'Seguimiento en tiempo real'
                  : 'Gestión completa'}
              </h3>
              <p className="mb-4">
                {i === 0 &&
                  'Centralizá toda la información de tus obras, presupuestos, clientes, empleados, proveedores, herramientas y caja.'}
                {i === 1 &&
                  'Consultá métricas clave en tiempo real, tanto generales como de obra, y tomá decisiones rápidas desde cualquier dispositivo.'}
                {i === 2 &&
                  'Controlá todos los aspectos de tu empresa desde un solo lugar, optimizando recursos y reduciendo errores.'}
              </p>
              <div className="flex-1 flex items-center justify-center">

                <img
                  src={
                    i === 0
                      ? '/mockup-pc3.png'
                      : i === 1
                      ? '/screen23.png'
                      : '/screen2.png'
                  }
                  alt={
                    i === 0
                      ? 'Todo en un solo lugar'
                      : i === 1
                      ? 'Seguimiento en tiempo real'
                      : 'Gestión completa'
                  }
                  className="w-full h-auto rounded-lg animate-bounce-slow"
                />
              </div>
              
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
