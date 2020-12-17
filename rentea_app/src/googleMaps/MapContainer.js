import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { API_KEY } from "../renteaSecrets/GoogleMapsAPISecrets";


const mapStyles = {
  width: "400px",
  height: "400px",
};

const MapContainer = (props) => {
  return (
    <Container>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: props.latitude,
          lng: props.longitude,
        }}
      />
    </Container>
  );
};

MapContainer.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

MapContainer.defaultProps = {
  latitude: -1.2884,
  longitude: 36.8233,
};

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
