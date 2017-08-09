import React, {Component} from 'react';
import {connect} from 'react-redux';
import ModalSuccess from '../components/ModalSuccess';
import ModalErrorResult from '../components/ModalErrorResult';
import ModalErrorInput from '../components/ModalErrorInput';

class ModalContainer extends Component {
    render = () => {

        if (this.props.openModal) {
            if (isNaN(this.props.result)) {
                return (
                    <ModalErrorInput open={this.props.openModal} closeModal={this.props.closeModal}/>
                )
            } else if (this.props.target !== this.props.result) {
                return (
                    <ModalErrorResult open={this.props.openModal} closeModal={this.props.closeModal}
                                      target={this.props.target}
                                      result={this.props.result}/>
                )
            } else if (this.props.target === this.props.result) {
                return (
                    <ModalSuccess open={this.props.openModal} closeModal={this.props.closeModal}
                                  target={this.props.target}
                                  result={this.props.result}/>
                )
            }
        } else {
            return (
                <div></div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        openModal: state.modalsReducer.open,
        target: parseInt(state.targetReducer.currentTarget),
        result: parseInt(state.usersInputReducer.result)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch({type: 'CLOSE'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)