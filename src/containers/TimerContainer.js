import React, {Component} from 'react';
import {connect} from 'react-redux';
import Timer from '../components/Timer';

class TimerContainer extends Component {

    render = () => {
        return (
            <Timer time={this.props.timer.value}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timer: state.timerReducer
    }
};

export default connect(mapStateToProps)(TimerContainer);
