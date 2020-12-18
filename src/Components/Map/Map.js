import React from "react";
import { MapContainer, Marker,TileLayer,Popup } from "react-leaflet";
import { country_api, state_api } from "../../api/mapIndex";

import MarkerClusterGroup from 'react-leaflet-markercluster';


/** 
 const covidCounties = new L.Icon({
  iconUrl: covidIMG,
  iconSize: [20, 20],
 });
const covidCounties = new L.Icon({
  iconUrl: covidIMG,
  iconSize: [20, 20],
});
*/

class MyMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 3,
      country: [],
      states: [],
    };
  }

  async componentDidMount() {
    const countrydata = await country_api();
    const statesdata = await state_api();

    this.setState({ 
      country: countrydata, 
      states: statesdata
     });

    //console.log(countrydata);
    console.log(statesdata);
  }

  

  render() {
    const position = [this.state.lat, this.state.lng];
    const countrydata = this.state.country;
    const statesdata = this.state.states;
    
    //console.log(statesdata)
    return ( 
          
      <MapContainer
        className="map"
        center={position}
        zoom={this.state.zoom}
      >

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap="true"
        />
         <MarkerClusterGroup>
        {countrydata.map((country,place) => (
          //console.log(data)
          <Marker
            key={place}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            //icon={html}
          >
            <Popup>
              <div>
                <h1 className="countryname">
                <img className="country_flag"
                      src={country.countryInfo.flag}
                      alt={country} />
                  {country.country }
                </h1>
                <ul>
                  <li><strong>Confirmed:</strong> {country.cases}</li>
                  <li><strong>Deaths:</strong> {country.deaths}</li>
                  <li><strong>Recovered:</strong> {country.recovered}</li>
                  <li>
                    <strong>Last Update: </strong>
                     {new Date().toLocaleString()}
                  </li>
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      
    
      <MarkerClusterGroup>
        {statesdata.map((states,place) => (
          //console.log(data)

          <Marker
            key={place}
            position={[states.coordinates.latitude, states.coordinates.longitude]}
            //icon={html}
          >
            <Popup>
              <div>
                <h1 className="Statename">
                  {states.province}   
                </h1>
                <ul>
                  <li><strong>Confirmed:</strong> {states.stats.confirmed}</li>
                  <li><strong>Deaths:</strong> {states.stats.deaths}</li>
                  <li><strong>Recovered:</strong> {states.stats.recovered}</li>
                  <li>
                    <strong>Last Update: </strong>
                     {new Date().toLocaleString()}
                  </li>
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>

      </MapContainer>
    );
     
   }
}

export default MyMap;
