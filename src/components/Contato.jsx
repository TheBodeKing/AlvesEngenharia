import { getEmailJsKey } from "../utils/config";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailImg, zapImg } from "../utils";

const Contato = ({ forRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_2ql7bo5";
    const templateId = "template_0zuz03c";
    const publicKey = await getEmailJsKey();

    if (!publicKey) {
      alert("Erro ao obter chave de autenticação.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      to_name: "Alexandre",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email enviado com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
      })
      .catch((error) => {
        console.error(error);
        alert("Falha no envio!");
      });

    setIsSending(false);
  };

  return (
    <section
      id="contato"
      className="w-full min-h-screen"
      ref={(el) => {
        forRef.current["contato"] = el;
      }}
    >
      <div className="sm:py-15 py-5 px-5 w-full items-center justify-between flex flex-col">
        <h2 className="text-4xl sm:text-5xl text-center mb-15 roboto-grosso">
          Entre em Contato
        </h2>
        <div
          className="flex flex-col sm:flex-row roboto-fino relative w-full sm:w-[65%] 
         items-center justify-between "
        >
          <div
            className="flex flex-1 flex-col w-full items-start justify-center
          sm:p-10 p-5 mb-5 sm:mb-10 mx-5 text-xl"
          >
            <h2 className="text-blue-500">Telefone</h2>
            <a
              href="https://wa.me/557599116033"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              <img
                src={zapImg}
                alt="Whatsapp"
                className="w-[35px] h-[35px] group-hover:scale-130 
                  hover:cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.6)] rounded-full transition-all"
              />{" "}
              (75) 99911-6033
            </a>

            <h2 className="mt-5 text-blue-500">Email</h2>
            <a
              href="mailto:eng.alexandrealves@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              <img
                src={emailImg}
                alt="Outlook"
                className="w-[35px] h-[35px] group-hover:scale-130 
                  hover:cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.6)] rounded-full transition-all"
              />{" "}
              eng.alexandrealves@hotmail.com
            </a>
          </div>
          <form
            className="max-w-xl mx-auto flex flex-[2] flex-col gap-2 text-sm w-full"
            onSubmit={handleSubmit}
          >
            <label htmlFor="nome" className="sr-only">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nome *"
              className="p-2 border border-gray-400 focus:outline-none
               focus:ring-2 focus:ring-gray-500"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-400 focus:outline-none
               focus:ring-2 focus:ring-gray-500"
            />
            <label htmlFor="telefone" className="sr-only">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="p-2 border border-gray-400 focus:outline-none
               focus:ring-2 focus:ring-gray-500"
            />
            <label htmlFor="menssagem" className="sr-only">
              Menssagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem *"
              className="p-2 border border-gray-400 resize-none 
              focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>

            <button
              disabled={isSending}
              type="submit"
              className="self-center bg-black text-white p-1
               hover:text-black border border-black rounded hover:bg-white 
               transition-all hover:scale-110 cursor-pointer duration-75"
            >
              {isSending ? "ENVIANDO..." : "ENVIAR"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
