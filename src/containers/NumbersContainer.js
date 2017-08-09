import React, {Component} from 'react';
import {connect} from 'react-redux';
import Numbers from '../components/Numbers';

class NumbersContainer extends Component {

    render = () => {

        return (
            <div>
                <p className="title">Available Numbers :</p>
                {
                    this.props.numbersValues.numbers.map((number, index) => {
                        return (
                            <Numbers clickHandler={this.props.onNumberClickHandler} disabled={number.isDisabled}
                                     key={index} value={number.value}/>
                        )
                    })
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        numbersValues: state.numbersReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNumberClickHandler: value => dispatch({type: 'ADD_NUMBER', payload: value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumbersContainer)
