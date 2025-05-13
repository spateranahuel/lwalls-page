import { useEffect, useState } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#features');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="features" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        ¿Por qué elegir nuestra app?
      </h2>
      <div
        className={`grid md:grid-cols-3 gap-8 text-center transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="group p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-primary hover:text-white">
          <div className="mb-4 text-4xl text-primary group-hover:text-white">
            <i className="fas fa-th-large"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Todo en un solo lugar</h3>
          <p>
            Centralizá toda la información de tus obras, presupuestos, clientes,
            empleados, proveedores, herramientas y caja.
          </p>
        </div>
        <div className="group p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-primary hover:text-white">
          <div className="mb-4 text-4xl text-primary group-hover:text-white">
            <i className="fas fa-sync-alt"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Seguimiento en tiempo real</h3>
          <p>
            Consultá métricas clave en tiempo real, tanto generales como de obra, y
            tomá decisiones rápidas desde cualquier dispositivo.
          </p>
        </div>
        <div className="group p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-primary hover:text-white">
          <div className="mb-4 text-4xl text-primary group-hover:text-white">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Gestión completa</h3>
          <p>
            Controlá todos los aspectos de tu empresa desde un solo lugar,
            optimizando recursos y reduciendo errores.
          </p>
        </div>
      </div>
    </section>
  );
}
