import { FaCheck } from 'react-icons/fa';

export default function Plan() {
  const includes = [
    'Caja',
    'Obras',
    'Presupuestos',
    'Empleados',
    'Clientes',
    'Dashboard',
    'Inventario',
    'Proveedores',
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-raleway text-4xl font-bold text-primary mb-2">
          Un solo plan, todo incluido
        </h2>
        <p className="font-openSans text-gray-600 mb-10">
          Sin letra chica ni módulos por separado: accedés a todo lo que necesitás para gestionar tu empresa.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ul className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            {includes.map((item) => (
              <li key={item} className="font-openSans flex items-center gap-3 text-gray-700">
                <FaCheck className="text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5492257523265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-md">
              Consultanos el precio
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
