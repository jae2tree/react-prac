import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Temp from './temp';

const Hot = hot(Temp);

ReactDom.render(<Hot />, document.querySelector('#root'));