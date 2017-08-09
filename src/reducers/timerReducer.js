var initTimer = {
    value: '60',
    intervalId: 0
};
const timerReducer = (state = initTimer, action) => {

    switch (action.type) {
        case  'UPDATE TIMER' :
            return {
                ...state, value: (state.value - 1), intervalId: action.payload
            };

        case  'START GAME' :
            return {...state, value : '60', intervalId : 0};

        default :
            return state;
    }

};

export default timerReducer;
