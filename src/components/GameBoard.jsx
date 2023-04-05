import { useEffect, useState } from "react";

const GameBoard = () => {
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100)); // 랜덤함수 추출 및 Math.floor로 숫자 정수화 

  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다.`)
  },[randomNum]) // 의존성 배열 값 변할때 마다 useEffect 실행됨 (randomNum 추적하는 기능으로 쓰여짐)

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
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
