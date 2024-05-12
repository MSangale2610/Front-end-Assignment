import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Locationcomponent=()=>{
    const [location,setLocation]=useState('');
    useEffect(()=>{
        const apikey='YOUR_GOOGLE_MAPS_API_KEY';
        const latitude=18.517493933895025;
        const longitude=73.84178533940312;
        axios.get('https://maps.googleapis.com/maps/ap1/geocode/json?latlng=${latitude},${longitude}&KEY=${apikey}');
        .then(response=>{
            const address=response.data.results[0].formatted_address;
            setLocation(address);
        })
       .catch(error =>{
        console.error('error fetching location:',error);
       });
    }, []);
 return (
    <div>
     <h1>Current Location</h1>
     <p>{location}</p>
    </div>
  );
 };
  export default Locationcomponent;
  
