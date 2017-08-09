import React,{Component} from 'react';
import { connect } from 'react-redux';
import Operators from '../components/Operators';

class OperatorsContainer extends Component{
    render = () => {
        return(
            <div>
                <p className="title">Operators : </p>
                {
                    this.props.operatorsValue.operators.map((current, index) => {
                        return(
                            <Operators clickHandler={this.props.onOperatorClickHandler} disabled={current.isDisabled} key={index} value={current.value}/>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        operatorsValue : state.operatorsReducer
    }
};

const mapDispatchToProps =(dispatch) => {
    return {
        onOperatorClickHandler : value => dispatch({type : 'ADD_OPERATOR', payload : value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OperatorsContainer)