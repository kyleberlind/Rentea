import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { API_KEY } from "../renteaSecrets/GoogleMapsAPISecrets.js";

const GoogleMapsAddressSearchTextInput = (props) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  let autoComplete;

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, props.setAddress, autoCompleteRef)
    );
  }, []);

  async function handlePlaceSelect(updateQuery, updateAddress) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateAddress(addressObject);
    updateQuery(query);
  }

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoad(updateQuery, updateAddress, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery, updateAddress)
    );
  }

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter an Address"
        value={query}
      />
    </div>
  );
};

GoogleMapsAddressSearchTextInput.propTypes = {
  address: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired
};

GoogleMapsAddressSearchTextInput.defaultProps = {
};

export default GoogleMapsAddressSearchTextInput;
