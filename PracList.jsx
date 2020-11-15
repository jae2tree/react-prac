import React, { useState, useRef } from 'react';
import GuGuDan from './game/GuGuDan';
import NumberBaseball from './game/numberbaseball/NumberBaseball';
import ResponseCheck from './game/ResponseCheck';
import RSP from './game/RSP';
import Lotto from './game/lotto/Lotto';
import TicTacToe from './game/tictactoe/TicTacToe';

import MouseTracker from './docsexample/render-props/MouseTracker'

function getGameList() {
  return [
    'GuGuDan',
    'NumberBaseball',
    'ResponseCheck',
    'RSP',
    'Lotto',
    'TicTacToe'
  ]
}

function getDocsExampleList() {
  return [
    'MouseTracker',
  ]
}

const PracList = () => {
  const [gameList, setGameList] = useState(getGameList());
  const [docsExampleList, setDocsExampleList] = useState(getDocsExampleList());
  const [view, setView] = useState(null);
  const concatList = getGameList().concat(getDocsExampleList());

  const onClickList = (v) => () => {
    console.log(v);
    switch(v) {
      case 'GuGuDan': setView(<GuGuDan />); break;
      case 'NumberBaseball': setView(<NumberBaseball />); break;
      case 'ResponseCheck': setView(<ResponseCheck />); break;
      case 'RSP': setView(<RSP />); break;
      case 'Lotto': setView(<Lotto />); break;
      case 'TicTacToe': setView(<TicTacToe />); break;
      case 'MouseTracker': setView(<MouseTracker />); break;
      default : setView(null);
    }
  }

  return(
    <>
      <div id="PracList">
        {
          concatList.map((v, i) => {
          return <li key={i} onClick={onClickList(v)} >{v}</li>
        })}
      </div>
      <div>{view}</div>
    </>
  )
}

export default PracList;