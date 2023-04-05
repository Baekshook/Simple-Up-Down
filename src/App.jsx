import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

function App() {
  useEffect(() => {
    let savedPoint = localStorage.getItem("point");

    if(!savedPoint) {
      localStorage.setItem("point", 0)
    }
  },[])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GameResult />
      <GameBoard />
    </div>
  );
}

export default App;
