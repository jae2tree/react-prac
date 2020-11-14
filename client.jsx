import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import PracList from './PracList';
const Hot = PracList;

ReactDom.render(<Hot />, document.querySelector('#root'));