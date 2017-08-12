export const isInputValid = (currentInput, allInputs) => {
    var isValid = true;

    if (allInputs.length === 0) {
        isValid = checkFirstInput(currentInput)
    } else {
        isValid = checkInput(currentInput, allInputs)
    }

    return isValid;
};

const checkFirstInput = (currentInput) => {

    if (!isNaN(parseInt(currentInput)) || currentInput === '(') {
        return true;
    } else {
        return false;
    }
};

const checkInput = (currentInput, allInputs) => {
    var previous = allInputs[allInputs.length - 1];

    if ((currentInput === '*' || currentInput === '/' || currentInput === '+' || currentInput === '-' || currentInput === '*') && (!isNaN(parseInt(previous)) || previous === ')')) {
        return true;
    } else if (!isNaN(currentInput) && (isNaN(previous) || previous === ')')) {
        return true;
    } else if (currentInput === '(' && (previous === '*' || previous === '/' || previous === '+' || previous === '-' || previous === '*')) {
        return true;
    } else if (currentInput === ')' && !isOpenParenthesesMissing(allInputs) && (!isNaN(parseInt(previous)) || previous === ')')) {
        return true;
    } else {
        return false;
    }

};

const isOpenParenthesesMissing = (allInputs) => {
    var open = 0;
    var close = 0;

    for (let value of allInputs) {
        if (value === '(') {
            open++;
        } else if(value === ')') {
            close++;
        }
    }

    if (open < close) {
        return true;
    } else {
        return close;
    }
};

