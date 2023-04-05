import { useEffect, useState } from "react";

const GameBoard = () => {
  const [hint, setHint] = useState("0 ~ 100 사이의 숫자를 맞춰보세요!");
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 101)); // 랜덤함수 추출 및 Math.floor로 숫자 정수화
  const [choiceNum, setChoiceNum] = useState("");
  const [point, setPoint] = useState(5);

  const onChangeChoice = (e) => {
    setChoiceNum(e.target.value);
  }; // input 태그 안에 글자를 집어넣기 위한 onChange 함수 (useState("") 값에 onChange를 붙히지 않으면 값이 바뀌지않음)

  useEffect(() => {
    console.log(`랜덤 숫자는 ${randomNum}입니다.`);
  }, [randomNum]); // 의존성 배열 값 변할때 마다 useEffect 실행됨 (randomNum 추적하는 기능으로 쓰여짐)

  // useEffect(() => {
  //   console.log(`유저가 선택한 숫자는 ${choiceNum}입니다.`);
  // }, [choiceNum]);

  useEffect(() => {
    console.log(`현재 포인트는 ${point}입니다.`);
  }, [point]);

  const onClickCheck = (e) => {
    e.preventDefault(); // onSubmit 실행시 e.preventDefault() 없이 엔터키를 누르면 항상 새로고침 되기에 새로고침을 막는 기능

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
      setHint("정답입니다! 랜덤 값을 초기화 합니다.");

      if (point > 0) {
        // 1. 기존의 점수 불러옴
        let savedPoint = localStorage.getItem("point");
        // 2. 현재 점수와 기존의 점수 합침 및 저장
        localStorage.setItem("point", parseInt(savedPoint) + point);
      }

      setRandomNum(Math.floor(Math.random() * 101));
      setChoiceNum("");
      setPoint(5);
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다.`);
      setPoint(point - 1);
      setChoiceNum("");
    } else if (randomNum < checkNum) {
      setHint("정답은 " + checkNum + "보다 낮은 숫자입니다."); // `` 쓰지 않고 사용하는 방법
      setPoint(point - 1);
      setChoiceNum("");
    }
  };

  return (
    <div className=" w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <form onSubmit={onClickCheck}>
          <input
            className="border-2 rounded-lg px-4 py-2 focus:outline-pink-300 shadow-lg"
            type="text"
            value={choiceNum}
            onChange={onChangeChoice}
            placeholder="숫자를 입력하세요."
          />
          <input
            className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
            type="submit"
            value="확인"
          />
          {/* <button
          onClick={onClickCheck}
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
        >
          확인
        </button> */}
        </form>
      </div>
    </div>
  );
};

export default GameBoard;
