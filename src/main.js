import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

import style from './styles/Main.scss'

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Hello></Hello>,
  document.getElementById('app')
);