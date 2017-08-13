import React, {Component} from 'react';
import {connect} from 'react-redux'


class UsersInput extends Component {
    render = () => {
        return (
            <div className="input-container animatable">
                <div>
                    <input id="usersInput" type="text" className="form-control" readOnly="true" value={this.props.input}/>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    var userInput = state.usersInputReducer.inputValue;

    return {
        input : userInput.join(''),
    }
};

export default connect(mapStateToProps)(UsersInput);
