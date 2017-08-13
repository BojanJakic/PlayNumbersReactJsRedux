var initButtons = {
    btn: [
        {
            text: 'START GAME',
            isDisabled: false
        },
        {
            text: 'END GAME',
            isDisabled: true
        },
        {
            text: 'DELETE',
            isDisabled: true
        }
    ]
};


const buttonReducer = (state = initButtons, action) => {

    switch (action.type) {
        case 'START GAME' :
            return {
                ...state,
                btn: state.btn.map((current) => current.text === 'START GAME' ?
                    {...current, isDisabled: true} : {...current, isDisabled: false})
            };

        case 'END GAME' :
            return {
                ...state, btn: state.btn.map((current, index) => current.text !== 'START GAME' ?
                    {...current, isDisabled: true} : {...current, isDisabled: false})
            };

        default :
            return state;
    }

};

export default buttonReducer;
