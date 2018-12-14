import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null //so a value of null means essentially we don't know what the latitude or number is it yet we will know eventually.
            ,errorMessage: ''
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition( //get current users location. First argument is a callback function with location, second is callback function for error.
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />
    }

    render() {
        return (
            <div className={{border: 'red'}}>
            {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
