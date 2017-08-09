import React, {Component} from 'react';
import Target from '../components/Target';
import {connect} from 'react-redux'

class TargetContainer extends Component {

    render = () => {
        return (
            <Target target={this.props.target}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        target: state.targetReducer.currentTarget
    }
};

export default connect(mapStateToProps)(TargetContainer);
