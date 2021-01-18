import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const CountryMap = (props) => {
  const latitud = props.latlng[0];
  const longitud = props.latlng[1];
  return (
    <Map
      google={props.google}
      zoom={5}
      style={mapStyles}
      initialCenter={{
        lat: latitud,
        lng: longitud,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_SECRET_KEY,
})(CountryMap);
