import React from 'react';

const Timer = (props) => {
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="title">Time :</div>
            <div className="timer animatable">{props.time}</div>
        </div>
    )
};

export default Timer;
