import React, { Component, useState } from 'react';
import Table from './Table';

const TicTacToe = () => {
  const [winner, setWinner] = useState('');
  const [turn, setTurn] = useState('0');
  const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]);
  return (
    <>
      <Table />
      {winner && <div>{winner}님의 승리</div>}
    </>
  )
}

export default TicTacToe;