import store from '../store.js';
import { startGameAnimation } from '../js/animator.js'

const handleButtonAction = (clickedButton, dispatch) => {

    if (clickedButton === 'START GAME') {
        return dispatch => {
            startGameAnimation();

            setTimeout(() => {
                dispatch(startGame());
                startTimer(dispatch);
            }, 1000);
        }
    } else if (clickedButton === 'END GAME') {
        return dispatch => {
            endGame(dispatch);
        }
    }else if(clickedButton === 'DELETE') {
        var input = store.getState().usersInputReducer.inputValue;
        var last = input[input.length - 1];
        return dispatch => {
            dispatch(deleteInput(last))
        }
    }
};

const startGame = () => {
    return {
        type: 'START GAME'
    }
};

const endGame = (dispatch) => {
    stopTimer();

    dispatch({
        type: 'END GAME'
    });
};

const deleteInput = (last) => {
    return {
        type : 'DELETE',
        payload : last
    }
};

const startTimer = (dispatch) => {
    var counter = 60;
    var intervalId = 0;

    intervalId = setInterval(() => {
        dispatch({
            type: 'UPDATE TIMER',
            payload: intervalId
        });

        counter--;
        if (counter === 0) {
            endGame(dispatch)
        }
    }, 1000)
};

const stopTimer = () => {
    var interval = store.getState().timerReducer.intervalId;
    clearInterval(interval)
};

export default handleButtonAction;