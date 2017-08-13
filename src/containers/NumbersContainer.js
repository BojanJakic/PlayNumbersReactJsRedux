import React, {Component} from 'react';
import {connect} from 'react-redux';
import Numbers from '../components/Numbers';
import { isInputValid } from '../js/validator.js'
import { errorInputAnimation } from '../js/animator.js'

class NumbersContainer extends Component {

    render = () => {

        return (
            <div>
                <p className="title">Available Numbers :</p>
                {
                    this.props.numbersValues.numbers.map((number, index) => {
                        return (
                            <Numbers clickHandler={this.onNumberClickHandler} disabled={number.isDisabled}
                                     key={index} number={number.value}/>
                        )
                    })
                }
            </div>
        )
    };

    onNumberClickHandler = value => {
        if(isInputValid(value, this.props.input)) {
            this.props.dispatchNumberAction(value)
        }else {
            errorInputAnimation()
        }
    }

}

const mapStateToProps = (state) => {
    return {
        numbersValues: state.numbersReducer,
        input : state.usersInputReducer.inputValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNumberAction : value => dispatch({type: 'ADD_NUMBER', payload : value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumbersContainer)
