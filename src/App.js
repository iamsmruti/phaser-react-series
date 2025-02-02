import './App.css';
import GameCard from "./components/GameCard";
import RenderGame from "./components/RenderGame";
import gameIndex from "./data/gameIndex";
import exampleConfig from "./phaser/ExampleGame";

function App() {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold bg-blue-500 text-white px-10 py-5">My Phaser Games</h2>
      <div className="mx-auto p-10">
      <div className="grid grid-cols-3 gap-10">
        {gameIndex.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
