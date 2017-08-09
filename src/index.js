import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameBoard from './components/GameBoard';
import { Provider } from 'react-redux';
import store from './store.js';


ReactDOM.render(<Provider store = {store}>
        <GameBoard />
    </Provider>, document.getElementById('root'));
