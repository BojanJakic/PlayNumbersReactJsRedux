
export const errorInputAnimation = () => {
    var element = document.getElementById('usersInput');

    element.style.animation = 'errorInput 1s linear';

    element.addEventListener('animationend', () => {
        element.style.animation = '';
    })
};

export const startGameAnimation = () => {
    var animatableElements = document.getElementsByClassName('animatable');

    for(let value of animatableElements) {
        value.style.animation = 'fadeInAndOut 2s linear';

        value.addEventListener('animationend', () => {
            value.style.animation = '';
        })
    }
};
