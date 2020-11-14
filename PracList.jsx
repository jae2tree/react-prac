import React, { useState, useRef } from 'react';
import GuGuDan from './game/GuGuDan';
import NumberBaseball from './game/numberbaseball/NumberBaseball';
import ResponseCheck from './game/ResponseCheck';
import RSP from './game/RSP';
import Lotto from './game/lotto/Lotto';
import TicTacToe from './game/tictactoe/TicTacToe';

function getList() {
  return [
    'GuGuDan',
    'NumberBaseball',
    'ResponseCheck',
    'RSP',
    'Lotto',
    'TicTacToe'
  ]
}

const PracList = () => {
  const [list, setList] = useState(getList());
  const [view, setView] = useState(null);

  const onClickList = (v) => () => {
    console.log(v);
    switch(v) {
      case 'GuGuDan': setView(<GuGuDan />); break;
      case 'NumberBaseball': setView(<NumberBaseball />); break;
      case 'ResponseCheck': setView(<ResponseCheck />); break;
      case 'RSP': setView(<RSP />); break;
      case 'Lotto': setView(<Lotto />); break;
      case 'TicTacToe': setView(<TicTacToe />); break;
      default : setView(null);
    }
  }

  return(
    <>
      <div id="PracList">
        {list.map((v, i) => {
          return <li key={i} onClick={onClickList(v)} >{v}</li>
        })}
      </div>
      <div>{view}</div>
    </>
  )
}

export default PracList;