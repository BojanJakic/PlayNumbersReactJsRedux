import React,{Component} from 'react';
import { connect } from 'react-redux';
import Operators from '../components/Operators';
import { isInputValid } from '../js/validator.js';

class OperatorsContainer extends Component{
    render = () => {
        return(
            <div>
                <p className="title">Operators : </p>
                {
                    this.props.operatorsValue.operators.map((current, index) => {
                        return(
                            <Operators clickHandler={this.onOperatorClickHandler} disabled={current.isDisabled} key={index} value={current.value}/>
                        )
                    })
                }
            </div>
        )
    };

    onOperatorClickHandler = value => {
        if(isInputValid(value, this.props.input)) {
            this.props.dispatchOperatorAction(value)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        operatorsValue : state.operatorsReducer,
        input : state.usersInputReducer.inputValue
    }
};

const mapDispatchToProps =(dispatch) => {
    return {
        dispatchOperatorAction : value => dispatch({type : 'ADD_OPERATOR', payload : value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorsContainer)