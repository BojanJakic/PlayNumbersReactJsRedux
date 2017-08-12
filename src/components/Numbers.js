import React from 'react';

const Numbers = (props) => {
    return (

        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 number-container animatable">
            <button onClick={() => props.clickHandler(props.number)} className="btn btn-primary btn-xs number-button"
                    type="button" disabled={props.disabled}>
                {props.number}
            </button>
        </div>
    )
};

export default Numbers;
