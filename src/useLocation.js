import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition( //get current users location. First argument is a callback function with location, second is callback function for error.
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);

    return [lat, errorMessage];
}