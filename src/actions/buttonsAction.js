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
            stopTimer();
        }
    }
};

const startGame = () => {
    return {
        type: 'START GAME'
    }
};

const endGame = (dispatch) => {
    var interval = store.getState().timerReducer.intervalId;
    stopTimer(interval);

    dispatch({
        type: 'END GAME'
    });
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

const stopTimer = (interval) => {
    clearInterval(interval)
};

export default handleButtonAction;