
export default function ContactForm() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">¿Querés más información?</h2>
        <p className="text-gray-600">Dejanos tus datos y te contactamos a la brevedad.</p>
      </div>

      <form className="max-w-xl mx-auto grid gap-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Nombre"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Empresa"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Mensaje (opcional)"
          className="p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}


  {/* CTA FINAL */}
  {/*<div className="mt-12">
    <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 shadow-md">
      Contactanos ahora
    </button>
  </div>*/}