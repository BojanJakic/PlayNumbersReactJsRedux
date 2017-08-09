const initOperators = {
    operators: [
        {
            value: '+',
            isDisabled: true
        },
        {
            value: '-',
            isDisabled: true
        },
        {
            value: '*',
            isDisabled: true
        },
        {
            value: '/',
            isDisabled: true
        },
        {
            value: '(',
            isDisabled: true
        },
        {
            value: ')',
            isDisabled: true
        }
    ]
};

const operatorsReducer = (state = initOperators, action) => {

    switch (action.type) {
        case 'START GAME' :
            return {
                ...state, operators: state.operators.map((current) => {
                    return {...current, isDisabled: false}
                })
            };

        case 'END GAME' :
            return {
                ...state, operators: state.operators.map((current) => {
                    return {...current, isDisabled: true}
                })
            };

        default :
            return state
    }

};

export default operatorsReducer;
