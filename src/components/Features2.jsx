import { useEffect, useRef, useState } from 'react';


export default function Features() {
  const features = [
    {
      title: 'Todo en un solo lugar',
      description:
        'Centralizá toda la información de tus obras, presupuestos, clientes, empleados, proveedores, herramientas y caja.',
      image: '/mockup-pc3.png',
      icon: 'fa-th-large',
    },
    {
      title: 'Seguimiento en tiempo real',
      description:
        'Consultá métricas clave en tiempo real, tanto generales como de obra, y tomá decisiones rápidas desde cualquier dispositivo.',
      image: '/screen23.png',
      icon: 'fa-sync-alt',
    },
    {
      title: 'Gestión completa',
      description:
        'Controlá todos los aspectos de tu empresa desde un solo lugar, optimizando recursos y reduciendo errores.',
      image: '/screen2.png',
      icon: 'fa-tachometer-alt',
    },
  ];

  const featureRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 } // Al menos 50% en pantalla
    );

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleIndexes]);


  return (
    <section id="features" className='bg-gray-100'>
      <div className='w-[80%] mx-auto'>
      <h2 className="text-3xl font-bold text-center py-10 ">
        ¿Por qué elegir nuestra app?
      </h2>

      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        const isVisible = visibleIndexes.includes(i);
        const imageAnimationClass = isVisible
          ? isEven
            ? 'animate-slide-right opacity-100'
            : 'animate-slide-left opacity-100'
          : 'opacity-0';

        const cardAnimationClass = isVisible ? 'animate-fade-up opacity-100' : 'opacity-0';


        return (
          <div
            key={i}
            ref={el => (featureRefs.current[i] = el)}
            data-index={i}
            className={`flex flex-col md:flex-row ${
              !isEven ? 'md:flex-row-reverse' : ''
            } items-center gap-8 pb-36 px-6 bg-gray-100`}
          >
            {/* Imagen */}
            <div className={`w-full md:w-1/2 ${imageAnimationClass}`}>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Card */}
            <div
              className={`flex flex-1 justify-center items-center text-center ${cardAnimationClass}`}
            >
              <div className="group hover:bg-primary w-[400px] bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-6">
                <div className="mb-4 text-4xl text-primary group-hover:text-white">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="group-hover:text-white text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="group-hover:text-white">{feature.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      </div>

    </section>
  );
}
