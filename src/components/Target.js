import React from 'react';

const Target = (props) => {
    return(
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="title">Target :</div>
        <div className="target">{props.target}</div>
        </div>
    )
};

export default Target;
