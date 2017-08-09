import store from '../store.js';

const handleButtonAction = (clickedButton, dispatch) => {

    if (clickedButton === 'START GAME') {
        return dispatch => {
            addAnimationClass();
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

    removeAnimationClass();
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

const addAnimationClass = () => {
    var animatableElements = document.getElementsByClassName('animatable');

    for(let elem of animatableElements){
        elem.classList.add("fadeInAndOut")
    }
};

const removeAnimationClass = () => {
    var animatableElements = document.getElementsByClassName('animatable');

    for(let elem of animatableElements) {
        elem.classList.remove("fadeInAndOut")
    }
};

export default handleButtonAction;