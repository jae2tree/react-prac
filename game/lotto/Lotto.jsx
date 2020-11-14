import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while(candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length -1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length -1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => [...prevWinBalls, winNumbers[i]]);
      }, (i+1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    }
  } , [timeouts.current]);

  const onClickRedo = useCallback(() => {
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);

    timeouts.current = [];
  }, [winNumbers]);
  // useCallback은 함수를 다시 선언? 해주는 문제를 해결하기 위해 있는데
  // useCalback으로 감싼 함수를 기억해준다.
  // 하지만 useCallback에서 state를 사용시 그변하기 전의 값까지 계속 기억해 버려서
  // 두번째 인자의 배열에 사용하는 state의 값을 넣어줘야 한다.

  // 주로 자식컴퍼넌트에 props로 넘겨줄 함수를 useCallback으로 감싼다

  // useMemo도 마찬가지로 함수를 다시 선언해주지 않고 기억시키기 위해 사용한다.

  return (
    <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) =><Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={onClickRedo}>한 번 더!</button>}
      </>
  )
}

export default Lotto;