import {
  FaCashRegister,
  FaHardHat,
  FaFileInvoice,
  FaUsers,
  FaUserFriends,
  FaChartBar,
  FaTools,
  FaTruck, // <- ícono para Proveedores
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Modules() {
  const modules = [
    { icon: <FaCashRegister />, name: 'Caja' },
    { icon: <FaHardHat />, name: 'Obras' },
    { icon: <FaFileInvoice />, name: 'Presupuestos' },
    { icon: <FaUsers />, name: 'Empleados' },
    { icon: <FaUserFriends />, name: 'Clientes' },
    { icon: <FaChartBar />, name: 'Dashboard' },
    { icon: <FaTools />, name: 'Herramientas (próximamente)' },
    { icon: <FaTruck />, name: 'Proveedores (próximamente)' }, // <- Nuevo módulo agregado
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Módulos disponibles</h2>
      <div className="relative max-w-5xl mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
          className="px-10"
        >
          {modules.map((mod, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md h-40">
                <div className="text-3xl text-primary mb-2">{mod.icon}</div>
                <p className="text-lg font-medium">{mod.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
