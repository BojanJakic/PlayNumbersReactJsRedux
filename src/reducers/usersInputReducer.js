const initInput = {
    inputValue : [],
    result : 0,
    isDeleteDisabled : true
};

const usersInputReducer = (state = initInput, action) => {
    var temp = state.inputValue;

    switch(action.type){

        case 'ADD_NUMBER' :
            temp.push(action.payload);
            return {
                ...state, inputValue : temp
            };

        case 'ADD_OPERATOR' :
            temp.push(action.payload);
            return {
                ...state, inputValue : temp
            };

        case  'DELETE' :
            temp.pop();
            return {...state,inputValue : temp};

        case 'END GAME' :
            return {...state, result : getResult(state.inputValue), isDeleteDisabled : true};

        case 'START GAME' :
            return {...state, inputValue : [], isDeleteDisabled : false};

        default :
            return state;
    }
};

const getResult = (input) => {
    var result;

    try {
        console.log(input)
        result = eval(input.join(''));
        console.log(result)
    }catch(e){
        console.log(e)
    }

    return result;
};

export default usersInputReducer;
