const Contato = () => {
  return (
    <section id="contato" className="w-full h-[100vh]">
      <div className="py-15 px-5 w-full flex flex-col">
        <h2 className="text-3xl text-center mb-10">Entre em Contato</h2>
        <div className="flex flex-col reltaive w-[80%] border  border-black">
          <div>
            <h2>Telefone</h2>
          </div>
          <form className="max-w-xl mx-auto flex flex-col gap-2 text-sm w-[100%]">
            <div className="flex flex-col">
              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="Nome *"
                className="p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email *"
                className="p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                className="p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                required
                placeholder="Mensagem *"
                className="p-2 border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="self-center bg-black text-white p-1 hover:text-black border border-black hover:bg-white transition-all hover:scale-110"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
