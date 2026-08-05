import { FaHardHat, FaDraftingCompass, FaTools, FaBuilding } from 'react-icons/fa';

export default function UseCases() {
  const cases = [
    {
      icon: <FaHardHat />,
      title: 'Constructoras',
      desc: 'Manejá varias obras a la vez sin perder el control de la caja, los presupuestos y los equipos asignados a cada una.',
    },
    {
      icon: <FaDraftingCompass />,
      title: 'Estudios de arquitectura',
      desc: 'Seguí el avance de cada proyecto por etapas y compartí el estado real con tus clientes cuando lo necesiten.',
    },
    {
      icon: <FaTools />,
      title: 'Contratistas independientes',
      desc: 'Controlá herramientas, materiales e indumentaria, y llevá un registro claro de ingresos y gastos por obra.',
    },
    {
      icon: <FaBuilding />,
      title: 'Desarrolladoras inmobiliarias',
      desc: 'Centralizá presupuestos, proveedores y empleados de todos tus desarrollos en un solo dashboard.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-raleway text-4xl font-bold text-center text-primary mb-12">
          Pensado para vos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center flex flex-col items-center"
            >
              <div className="text-3xl text-primary mb-4">{c.icon}</div>
              <h3 className="font-raleway text-lg font-semibold mb-2">{c.title}</h3>
              <p className="font-openSans text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
