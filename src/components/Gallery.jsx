export default function Gallery() {
  const shots = [
    {
      image: `${import.meta.env.BASE_URL}mockup-pc.png`,
      caption:
        'Cada obra, con toda su información a mano: dirección, estado, fechas y avance en tiempo, pagos y trabajo.',
    },
    {
      image: `${import.meta.env.BASE_URL}mockup-tablet.png`,
      caption: 'Accedé al detalle de cada obra desde cualquier dispositivo.',
    },
    {
      image: `${import.meta.env.BASE_URL}screen1.png`,
      caption:
        'Métricas generales y por obra: presupuesto vs. gasto, pagos adeudados, obras en progreso y mucho más.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-raleway text-4xl font-bold text-center text-primary mb-12">
          Así se ve por dentro
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {shots.map((shot, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img src={shot.image} alt={shot.caption} className="w-full h-auto" />
              <p className="font-openSans text-sm text-gray-600 p-4">{shot.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
