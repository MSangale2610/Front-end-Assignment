import React,{useState, useEffect} from 'react'
const GeolocationComponent=()=>{
const [location ,setLocation]=useState(null);
const[error,setError]=useState(null);
useEffect(()=>{
    const getLoaction =()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                //successfully retrive the location
                const { latitude, longitude}= position.coords;
                setLocation({ latitude, longitude});
                },
        (err)=>{
            setError(err.message);
        }
        );
    }
         else {
            setError('Geolocation is not supported by your browser');
        }
    };
    getLoaction();
}, []);//empty dependencies array ensure useEffect runs only ones,similar to
return(
    <div>
        {location ? (
            <div>
                <p> Latitude: {location.latitude}</p>
                <p>Longitude: {location.longitude}</p>
            </div>
        ): (
            <p>{error || 'fetching location...'}</p>
        )}
    </div>
);
};
export default GeolocationComponent;
