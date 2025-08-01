import { emailImg, zapImg } from "../utils";

const Rodape = () => {
  return (
    <footer className="w-full min-h-[16vh] select-text">
      <div
        className="flex flex-col h-full relative justify-between 
      items-center border-t-4 border-gray-600"
      >
        <div className="p-1 sm:p-2 text-center">
          <address className="p-1 sm:p-2 text-center not-italic">
            <h2 className="text-xl sm:text-3xl">Nossos contatos</h2>
            <p className="text-lg sm:text-xl mt-1 sm:mt-2">
              <a
                href="https://wa.me/557599116033"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex  underline hover:text-gray-900"
              >
                <img
                  src={zapImg}
                  alt="Whatsapp"
                  className="w-[30px] h-[30px] inline-flex group-hover:scale-130 mr-2
                  hover:cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.6)] rounded-full transition-all"
                />{" "}
                (75) 99911-6033
              </a>
            </p>

            <p className="text-sm sm:text-lg mt-1">
              <a
                href="mailto:eng.alexandrealves@hotmail.com"
                className="underline hover:text-gray-900 group inline-flex"
              >
                <img
                  src={emailImg}
                  alt="Outlook"
                  className="w-[30px] h-[30px] group-hover:scale-130 mr-2
                  hover:cursor-pointer shadow-[0_4px_4px_rgba(0,0,0,0.6)] rounded-full transition-all"
                />{" "}
                eng.alexandrealves@hotmail.com
              </a>
            </p>
          </address>
        </div>
        <div className="bg-black w-full text-center text-white py-1">
          <p className="text-xs">© 2025 PompeuProgramador </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
