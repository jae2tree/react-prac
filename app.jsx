import React, { createContext, useContext, useReducer, useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './component/sidebar';
import BodyLayout from './component/bodyLayout';
import {initState, reducer} from './context';

const { Header, Footer} = Layout;

export const RootContext = createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <RootContext.Provider value={{ state: state , dispatch: dispatch }}>
        <Sidebar />
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <BodyLayout />
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </RootContext.Provider>
      </Layout>
    </>
  )
}

export default App;