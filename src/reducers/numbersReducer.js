const initNumbers = {
    numbers: [
        {
            value: '?',
            isDisabled: true
        }, {
            value: '?',
            isDisabled: true
        }, {
            value: '?',
            isDisabled: true
        }, {
            value: '?',
            isDisabled: true
        }, {
            value: '?',
            isDisabled: true
        }, {
            value: '?',
            isDisabled: true
        }
    ]
};

const numbersReducer = (state = initNumbers, action) => {
    var isFound = false;

    switch (action.type) {
        case  'START GAME' :
            return {
                ...state, numbers: state.numbers.map((current, index) => {
                    return {...current, value: getValue(index), isDisabled: false}
                })
            };

        case 'ADD_NUMBER' :
            return {
                ...state, numbers: state.numbers.map((current) => current.value === action.payload && !isFound && !current.isDisabled ?
                    (isFound = true, {...current,isDisabled : true}) : current)
            };

        case 'END GAME' :
            return {
                ...state, numbers : state.numbers.map((current) => {
                    return {...current, isDisabled : true}
                })
            };

        case 'DELETE' :
            return {
                ...state, numbers: state.numbers.map((current) => current.value === action.last && !isFound && current.isDisabled ?
                    (isFound = true, {...current, isDisabled: false}) : current)
            };

        default :
            return state;
    }
};

const getValue = (index) => {
    var scope = [];

    if (index < 4) {
        return Math.floor((Math.random() * 9) + 1);
    } else if (index === 4) {
        scope = [10, 15, 20];
        return scope[Math.floor(Math.random() * scope.length)];
    } else {
        scope = [25, 50, 75, 100];
        return scope[Math.floor(Math.random() * scope.length)];
    }


};

export default numbersReducer;
