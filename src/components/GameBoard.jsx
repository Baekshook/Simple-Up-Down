import { useEffect, useState } from "react";

const GameBoard = () => {
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 101)); // 랜덤함수 추출 및 Math.floor로 숫자 정수화
  const [choiceNum, setChoiceNum] = useState("");

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  }; // input 태그 안에 글자를 집어넣기 위한 onChange 함수 (useState("") 값에 onChange를 붙히지 않으면 값이 바뀌지않음)

  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다.`);
  }, [randomNum]); // 의존성 배열 값 변할때 마다 useEffect 실행됨 (randomNum 추적하는 기능으로 쓰여짐)

  // useEffect(() => {
  //   console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`);
  // }, [choiceNum]);

  const onClickCheck = () => {
    // 1. 문자 입력시 setHint 변환
    let checkNum = parseInt(choiceNum);
    if (isNaN(checkNum)) {
      //isNaN = Not a Number
      setHint("숫자를 입력해주세요!");
      return;
    }
    // 2. 0~100 이외의 숫자 입력 시 setHint 변환
    if (0 > checkNum || checkNum > 100) {
      setHint("숫자를 잘못 입력하셨습니다.");
      return;
    }

    // 3. 랜덤 숫자와 유저가 선택한 숫자 비교
    if (randomNum === checkNum) {
      setHint("정답입니다!");
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
    } else if (randomNum < checkNum) {
      setHint(`정답은 ${checkNum}보다 낮은 숫자입니다.`);
    }
  };

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
          value={choiceNum}
          onChange={onChangeChoice}
        />
        <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
