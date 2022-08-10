import React from 'react';
import propTypes from 'prop-types';

function Card({ data }) {
    const {
        location,
        current,
    } = data;

    return (
        <div className="bg-[#3282B8] p-6 mt-10 rounded-lg text-[#BBE1FA] shadow-lg shadow-cyan-500/50 min-w-[220px]">
            <div className="text-center">
                <span className="block text-xl font-bold text-white">{location.name}</span>
                <span className="text-sm font-medium">{`${location.region}, ${location.country}`}</span>
            </div>

            <div className="text-white font-bold flex mt-3 mb-2 justify-center">
                <span className="text-7xl">{current.temp_c}</span>
                <span className="text-2xl mt-2">°C</span>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img src={current.condition.icon} alt="Ícone" />
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    data: propTypes.object,
}.isRequired;