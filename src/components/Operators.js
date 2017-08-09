import React from 'react';

const Operators = (props) => {
    return(
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 operator-container animatable">
            <button onClick={() => props.clickHandler(props.value)} type="button" className="btn btn-primary btn-xs operator-button" disabled={props.disabled}>{props.value}</button>
        </div>
    )
};

export default Operators;
