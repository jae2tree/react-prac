import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

//import Temp from './temp';
//const Hot = hot(Temp);

// import NumberBaseball from './NumberBaseball';
// const Hot = hot(NumberBaseball);

//import ResponseCheck from './ResponseCheck';
//const Hot = hot(ResponseCheck);

//import RSP from './RSP';
//const Hot = hot(RSP);

import Lotto from './Lotto';
const Hot = Lotto;

ReactDom.render(<Hot />, document.querySelector('#root'));