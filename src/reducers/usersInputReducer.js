const initInput = {
    inputValue : [],
    result : 0
};

const usersInputReducer = (state = initInput, action) => {
    var temp = state.inputValue;

    switch(action.type){
        case 'ADD_NUMBER' :
        case 'ADD_OPERATOR':
            temp.push(action.payload);
            return {...state, inputValue : temp};

        case  'DELETE' :
            temp.pop();
            return {...state,inputValue : temp};

        case 'END GAME' :
            return {...state, result : getResult(state.inputValue)};

        case 'START GAME' :
            return {...state, inputValue : []};

        default :
            return state;
    }
};

const getResult = (input) => {
    var result;

    try {
        result = eval(input.join(''));
    }catch(e){
        console.log(e)
    }

    return result;
};

export default usersInputReducer;
