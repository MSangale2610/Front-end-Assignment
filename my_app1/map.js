import Reac from "react";
import{GoogleMap,LoadScript,Marker} from '@react-google-map/api';
const MapComponent =()=>{
    const [position,setPosition]=useState(nul);
    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            const {latitude, longitude}=position.coords;
            setPosition({lat:latitude,lang:longitude});
        },
        (error)=>{
            console.error('Error getting user location:',error);
        }
    );
    }, []);
    const mapStyles={
        height:'400px',
        width:'100%',
    };
    return(
        <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
            <GoogleMap mapContainerStyle={mapStyles} center={position} zoom={15}>
                {position && <Marker position={position}/>}
            </GoogleMap>
        </LoadScript>
    )
}

