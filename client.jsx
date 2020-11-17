import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import './app.css';

import App from './app.jsx';

const Hot = App;
/*
 * const Hot = hot(App);
 * 으로 핫로더를 적용해 주어야 하지만 antd를 사용하면 오류가 있어서 잠시 적용 안함
 */

ReactDom.render(<Hot />, document.querySelector('#root'));