import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { API_KEY } from "../renteaSecrets/GoogleMapsAPISecrets.js";
import { getLandlordFromAddress } from "../services";

const GoogleMapsAddressSearchTextInput = (props) => {
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const autoCompleteRef = useRef(null);
  let autoComplete;

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, props.setAddress, autoCompleteRef)
    );
  }, []);

  async function handlePlaceSelect(updateQuery, upadateAddress) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    upadateAddress(addressObject);
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

  function handleScriptLoad(updateQuery, upadateAddress, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery, upadateAddress)
    );
  }

  const handleSearchAddress = () => {
    getLandlordFromAddress(props.address).then((response) => {
      response
        .json()
        .then((data) => {
          if (data["landlord_data"] != null) {
            props.setLandlordData(data["landlord_data"][0]);
          } else {
            console.log('No Address Found')
          }
        })
        .catch((error) => {
          setIsError(true);
        });
    });
  };

  return (
    <div className="search-location-input">
      {isError && <>'Error!'</>}
      <Button onClick={handleSearchAddress}>Submit</Button>
      <input
        ref={autoCompleteRef}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter a City"
        value={query}
      />
    </div>
  );
};

GoogleMapsAddressSearchTextInput.propTypes = {
  address: PropTypes.object.isRequired,
  displayReviewModal: PropTypes.bool,
};

GoogleMapsAddressSearchTextInput.defaultProps = {
  displayReviewModal: false,
};

export default GoogleMapsAddressSearchTextInput;
