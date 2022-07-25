import React from 'react';

function Card() {
    return (
        <div className="bg-[#3282B8] p-6 mt-10 rounded-lg text-[#BBE1FA] shadow-lg shadow-cyan-500/50">
            <div className="text-center">
                <span className="block text-xl font-bold text-white">Cidade</span>
                <span className="text-sm font-medium">Estado, País</span>
            </div>

            <div className="text-white font-bold flex mt-3 mb-2">
                <span className="text-7xl">27</span>
                <span className="text-2xl mt-2">°C</span>
            </div>

            <div className="text-center">
                <span className="block">Ícone</span>
                <span className="font-medium">Céu</span>
            </div>
        </div>
    );
}

export default Card;
