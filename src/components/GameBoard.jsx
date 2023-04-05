const GameBoard = () => {
  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">
        0 ~ 100 사이의 숫자를 맞춰보세요!
      </div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
        />
        <button className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg">
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
