import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    )
}

//default props if no props gets passed from App.js.
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;