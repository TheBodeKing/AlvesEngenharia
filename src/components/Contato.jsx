import { getEmailJsKey } from "../utils/config";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contato = ({ forRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_t4wd918";
    const templateId = "template_qc1oagq";
    const publicKey = getEmailJsKey();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      to_name: "pompeu",
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
        alert("Falha no envio!");
      });
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
        <h2
          className="text-2xl sm:text-5xl text-center mb-10"
          onClick={() => {
            console.log(publicKey);
          }}
        >
          Entre em Contato
        </h2>
        <div
          className="flex flex-col sm:flex-row relative w-full sm:w-[60%] 
         items-center justify-between "
        >
          <div className="flex flex-1 flex-col w-full items-start sm:items-end justify-center">
            <div className="sm:p-10 p-5 mb-5 sm:mb-10 ml-5">
              <h2 className="text-blue-500">Telefone</h2>
              <p>213412421</p>

              <h2 className="mt-5 text-blue-500">Email</h2>
              <p>alexandre@hotmail.com</p>
            </div>
          </div>
          <form
            className="max-w-xl mx-auto flex flex-[2] flex-col gap-2 text-sm w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="nome"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nome *"
              className="p-2 border border-gray-200 focus:outline-none
               focus:ring-2 focus:ring-gray-300"
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-200 focus:outline-none
               focus:ring-2 focus:ring-gray-300"
            />

            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="p-2 border border-gray-200 focus:outline-none
               focus:ring-2 focus:ring-gray-300"
            />

            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem *"
              className="p-2 border border-gray-200 resize-none 
              focus:outline-none focus:ring-2 focus:ring-gray-300"
            ></textarea>

            <button
              type="submit"
              className="self-center bg-black text-white p-1
               hover:text-black border border-black rounded hover:bg-white 
               transition-all hover:scale-110 cursor-pointer"
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
