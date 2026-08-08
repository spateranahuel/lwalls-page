import { useState } from "react";

// TODO: reemplazar por tu endpoint real de Formspree (https://formspree.io -> crear formulario -> copiar el ID)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjwooja";

export default function ContactForm() {
  const [values, setValues] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setValues({ nombre: "", empresa: "", email: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="font-raleway text-4xl font-bold text-primary mb-2">¿Querés más información?</h2>
        <p className="font-openSans text-gray-600">Dejanos tus datos y te contactamos a la brevedad.</p>
      </div>

      {status === "success" ? (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <p className="font-openSans text-gray-900 font-semibold">¡Gracias! Recibimos tus datos y te contactamos a la brevedad.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            value={values.nombre}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={values.empresa}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={values.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje (opcional)"
            value={values.mensaje}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded h-32 resize-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 ease-in-out disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.</p>
          )}
        </form>
      )}
    </section>
  );
}


  {/* CTA FINAL */}
  {/*<div className="mt-12">
    <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 shadow-md">
      Contactanos ahora
    </button>
  </div>*/}