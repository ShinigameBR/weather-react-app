import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
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

      <Card />

    </div>
  );
}

export default App;
