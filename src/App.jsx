import React from 'react';

function App() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <form>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-l-lg outline-none"
        />
        <button
          type="submit"
          className="bg-[#0F4C75] p-3 rounded-r-lg text-white tracking-wider font-semibold"
        >
          Pesquisar
        </button>
      </form>

    </div>
  );
}

export default App;
