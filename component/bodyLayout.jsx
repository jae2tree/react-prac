import React, {useContext, useEffect} from 'react';
import { Layout, Breadcrumb } from 'antd';
import { RootContext } from '../app';

import GuGuDan from '../game/GuGuDan';
import NumberBaseball from '../game/numberbaseball/NumberBaseball';
import ResponseCheck from '../game/ResponseCheck';
import RSP from '../game/RSP';
import Lotto from '../game/lotto/Lotto';
import TicTacToe from '../game/tictactoe/TicTacToe';

import MouseTracker from '../docsexample/render-props/MouseTracker'

const { Content } = Layout;

const BodyLayout = () => {
  const { state } = useContext(RootContext);

  const changeContents = () => {
    switch(state.content) {
      case 'GuGuDan': return <GuGuDan />;
      case 'NumberBaseball':  return <NumberBaseball />
      case 'ResponseCheck': return <ResponseCheck />
      case 'RSP': return <RSP />
      case 'Lotto': return <Lotto />
      case 'TicTacToe': return <TicTacToe />
      case 'MouseTracker': return <MouseTracker />
      default : ;
    }
  }

  const displayNav = () => {
    return (
      <>
        <Breadcrumb.Item>{state.main}</Breadcrumb.Item>
        <Breadcrumb.Item>{state.sub}</Breadcrumb.Item>
      </>
    )
  }

  const displayHome = () => {
    return (
      <>
        <h1>Home</h1>
      </>
    )
  }

  return (
    <>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {
            state.content === 'Home'? '': displayNav()
          }
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {changeContents()}
          {
            state.content === 'Home'? displayHome() : ''
          }
        </div>
      </Content>
    </>
  )
}

export default BodyLayout;