import React, { useState } from 'react'
import RenderGame from "./RenderGame";

const GameCard = ({ game }) => {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="h-[200px] overflow-hidden flex justify-center items-center">
        <img src={game.headerImage} alt={game.title} className="w-full rounded-xl" />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-semibold">{game.title}</h2>
        <p className="text-gray-600">{game.description}</p>
        <button
          onClick={() => setShowGame(true)}
          className="bg-blue-500 mt-5 text-white px-5 py-1 rounded-xl"
        >Play</button>
      </div>

      {showGame && (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90">
          <button onClick={() => setShowGame(false)} className="px-3 py-1 rounded-xl bg-blue-500 m-10 text-white">Back</button>
          <div className="w-full h-[80vh] flex justify-center items-center">
            <RenderGame config={game.config} />
          </div>
        </div>
      )}
    </div>
  )
}

export default GameCard
