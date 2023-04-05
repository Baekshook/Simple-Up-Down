import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GameResult />
      <GameBoard />
    </div>
  );
}

export default App;
