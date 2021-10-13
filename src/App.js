import { useState } from 'react';
import MapView from './components/MapView';
import Trackerform from './components/Trackerform';
import TrackerInfoDisplay from './components/TrackerInfoDisplay';

//  App styles
import './css/style.css';

const App = () => {

const [ip, setIp] = useState('142.250.141.26');
const [location, setLocation] = useState('California, US, 94035');
const [timezone, setTimezone] = useState('UTC -07:00');
const [isp, setIsp] = useState('Google LLC');
const [long, setLong] = useState(-122.08385);
const [lat, setLat] = useState(37.38605);
const [coords, setCoords] = useState([51.505, -0.09])
const [showMap, setShowMap] = useState(true)


const getTrackingInfo = (data) => {
  setShowMap(false)
  const {ip, location, isp} = data;
  setIp(ip);
  setLocation(`${location.region}, ${location.country} ${location.postalCode}`)
  setTimezone(`UTC ${location.timezone}`);
  setIsp(isp);
 setCoords([location.lat, location.lng])
 setShowMap(true)

}

  return (
    <div className="App">
      <header></header>
      {showMap && <MapView coords={coords} />}
      <main>
        <h1>IP Address Tracker</h1>
        <Trackerform getTrackingInfo={getTrackingInfo} /> 
        <TrackerInfoDisplay ip={ip} location={location} timezone={timezone} isp={isp} />
      </main>
    </div>
  );
}

export default App;
 