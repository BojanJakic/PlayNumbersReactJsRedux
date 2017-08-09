import {combineReducers} from 'redux';
import targetReducer from './targetReducer';
import timerReducer from './timerReducer';
import numbersReducer from './numbersReducer';
import operatorsReducer from './operatorsReducer';
import buttonsReducer from './buttonsReducer';
import usersInputReducer from './usersInputReducer';
import modalsReducer from './modalsReducer';

const allReducers = combineReducers({
    targetReducer,
    timerReducer,
    numbersReducer,
    operatorsReducer,
    buttonsReducer,
    usersInputReducer,
    modalsReducer
});

export default allReducers;