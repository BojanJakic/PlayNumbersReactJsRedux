import React, {Component} from 'react';
import {connect} from 'react-redux'


class UsersInput extends Component {
    render = () => {
        return (
            <div className="input-container">
                <div className="input-group">
                    <input type="text" className="form-control" readOnly="true" value={this.props.input}/>
                    <span className="input-group-btn">
            <button disabled={this.props.disable} className="btn btn-primary btn-delete" type="button" onClick={() => this.props.delete(this.props.last)}>DELETE</button>
            </span>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    var userInput = state.usersInputReducer.inputValue;

    return {
        input : userInput.join(''),
        last :  userInput[userInput.length - 1],
        disable : state.usersInputReducer.isDeleteDisabled
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delete : (last) => dispatch({type : 'DELETE',last : last})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersInput);
