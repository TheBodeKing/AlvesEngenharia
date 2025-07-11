const Contato = ({ forRef }) => {
  return (
    <section
      id="contato"
      className="w-full h-[80vh]"
      ref={(el) => {
        forRef.current["contato"] = el;
      }}
    >
      <div className="py-15 px-5 w-full items-center justify-between   flex flex-col">
        <h2 className="text-3xl text-center mb-10">Entre em Contato</h2>
        <div className="flex flex-row reltaive w-[60%]  items-center justify-between ">
          <div className="flex flex-1 flex-col w-full items-end justify-center">
            <div className="p-10 mb-10 ml-5">
              <h2 className="text-blue-500">Telefone</h2>
              <p>213412421</p>

              <h2 className="mt-5 text-blue-500">Email</h2>
              <p>alexandre@hotmail.com</p>
            </div>
          </div>
          <form className="max-w-xl mx-auto flex flex-[2] flex-col gap-2 text-sm  w-full ">
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
