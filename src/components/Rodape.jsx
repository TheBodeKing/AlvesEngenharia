const Rodape = () => {
  return (
    <footer className="w-full h-[16vh] sm:h-[24vh] select-text">
      <div
        className="flex flex-col h-full relative justify-between 
      items-center border-t-4 border-gray-600"
      >
        <div className="p-1 sm:p-2 text-center">
          <h2 className="text-xl sm:text-3xl">Nossos contatos</h2>
          <p className="text-lg sm:text-xl mt-1 sm:mt-2">75 99202-9532</p>
          <p className="text-sm sm:text-lg mt-1">lucasshow37@gmail.com</p>
        </div>
        <div className="bg-black w-full text-center text-white py-1">
          <p className="text-xs">© 2025 PompeuProgramador </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
