import React from "react";

const contato = () => {
  return (
    <section id="contato" className="w-full bg-gray-100 py-16 px-5 sm:px-20">
      <h2 className="text-4xl font-bold text-center mb-10">Entre em Contato</h2>

      <form className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="nome" className="mb-1 font-medium">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone" className="mb-1 font-medium">
            Telefone (opcional)
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="mensagem" className="mb-1 font-medium">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="5"
            required
            className="p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="self-center bg-teal-600 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-teal-700 transition-all hover:scale-105"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

export default contato;
