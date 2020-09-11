import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlacesInput from "react-native-places-input";
import { palette } from "../../../theme";
import I18n from "../../i18n/config";
export default class Search extends Component {
  render() {
    return (
      <PlacesInput
        placeHolder={I18n.t("mapSearch")}
        stylesContainer={{
          position: "absolute",
          alignSelf: "stretch",
          top: 60,
          left: 10,
          right: 10,
          bottom: 0,
          marginBottom: 0,
        }}
        stylesList={{
          top: 0,
          left: -1,
          right: -1,
        }}
        googleApiKey={"AIzaSyD3iObdCKuJynKlC7JQ61iSzIFxvyWEWUs"}
        onSelect={(place) => this.setState({ place })}
      />
    );
  }
}
