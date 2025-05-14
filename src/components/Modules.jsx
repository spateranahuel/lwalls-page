import {
  FaCashRegister,
  FaHardHat,
  FaFileInvoice,
  FaUsers,
  FaUserFriends,
  FaChartBar,
  FaTools,
  FaTruck,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Modules() {
  const modules = [
    { icon: <FaCashRegister />, name: 'Caja', desc: 'Gestión de ingresos y egresos.' },
    { icon: <FaHardHat />, name: 'Obras', desc: 'Seguimiento de avances y tareas.' },
    { icon: <FaFileInvoice />, name: 'Presupuestos', desc: 'Creación y control de presupuestos.' },
    { icon: <FaUsers />, name: 'Empleados', desc: 'Gestión de personal y pagos.' },
    { icon: <FaUserFriends />, name: 'Clientes', desc: 'Información y contacto de clientes.' },
    { icon: <FaChartBar />, name: 'Dashboard', desc: 'Panel visual de indicadores.' },
    { icon: <FaTools />, name: 'Herramientas (próximamente)', desc: 'Módulo en desarrollo.' },
    { icon: <FaTruck />, name: 'Proveedores (próximamente)', desc: 'Módulo en desarrollo.' },
  ];

  return (
    <section className="py-16 px-6 bg-primary">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Módulos disponibles</h2>
      <div className="relative max-w-5xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true} // Habilita la navegación
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
          className="px-4"
        >
          {modules.map((mod, idx) => (
            <SwiperSlide key={idx}>
              <div className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center p-6 bg-white/10 rounded-xl shadow-md h-48 text-white text-center">
                <div className="text-3xl bg-white/20 p-4 rounded-full mb-3">{mod.icon}</div>
                <p className="text-lg font-semibold">{mod.name}</p>
                <p className="text-sm text-white/80 mt-1">{mod.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Aquí es donde se cambian los estilos de las flechas */}
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: white !important; /* Cambiar el color de las flechas a blanco */
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            color: white !important; /* Asegurarse que también cambian de color al pasar el mouse */
          }
        `}
      </style>

      {/*<div className="text-center mt-12">
        <button className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Ver todos los módulos
        </button>
      </div>*/}

      <div className="text-center mt-12">
        <a
          href="https://wa.me/5492257523265"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 shadow-md">
            Contactanos ahora
          </button>
        </a>
      </div>

    </section>
  );
}
