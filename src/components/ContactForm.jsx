export default function ContactForm() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contactanos</h2>
      <form className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Empresa"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Mensaje (opcional)"
          className="p-3 border border-gray-300 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}