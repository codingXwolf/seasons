import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null //so a value of null means essentially we don't know what the latitude or number is it yet we will know eventually.
        };

        window.navigator.geolocation.getCurrentPosition( //get current users location. First argument is a callback function with location, second is callback function for error.
            (position) => {
                this.setState({
                    lat:position.coords.latitude
                })
            },
            (err) => console.log(err)
        )
    }

    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
