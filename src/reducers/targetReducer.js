var  targetValue= {
    currentTarget : '? ? ?'
};

const targetReducer = (state = targetValue, action) => {

    switch (action.type) {
        case 'START GAME' :
            return {
                ...state, currentTarget: Math.floor((Math.random() * 1000))
            };

        default :
            return state;
    }

};

export default targetReducer;
