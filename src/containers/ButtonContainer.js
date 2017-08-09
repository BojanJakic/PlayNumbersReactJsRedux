import React, {Component} from 'react';
import {connect} from 'react-redux';
import handleButtonAction from '../actions/buttonsAction';
import {bindActionCreators} from 'redux';

class ButtonContainer extends Component {
    render = () => {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 button-container">
                {
                    this.props.buttons.btn.map((current, index) => {
                        return (
                            <button onClick={(evt) => this.props.onClickHandler(evt)} key={index} type="button"
                                    className="btn btn-primary button-button" disabled={current.isDisabled}>{current.text}</button>
                        )
                    })
                }
            </div>
        )
    };
}


const mapStateToProps = (state) => {
    return {
        buttons: state.buttonsReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onClickHandler : evt => handleButtonAction(evt.target.innerText)}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);