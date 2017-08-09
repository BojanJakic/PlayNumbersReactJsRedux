
var initModal = {
    open : false
};

const modalsReducer = (state = initModal, action) => {

    switch(action.type){
        case 'END GAME' :
            return {...state, open : true};

        case 'CLOSE' :
            return {...state, open : false};

        default :
            return state;
    }
};

export default modalsReducer;
