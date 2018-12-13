import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition( //get current users location. First argument is a callback function with location, second is callback function for error.
        (position) => console.log(position),
        (err) => console.log(err)
    )
    return <div>Orale Ese!</div>
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
