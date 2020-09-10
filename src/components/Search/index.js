import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { palette } from "../../../theme";
import I18n from "../../i18n/config";
export default class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder={I18n.t("search")}
        minLength={6}
        placeholderTextColor="#333"
        query={{
          key: "AIzaSyD3iObdCKuJynKlC7JQ61iSzIFxvyWEWUs",
          language: "es",
        }}
        textInputProps={{
          autoCapitalize: "none",
          autoCorrect: false,
        }}
        returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: "absolute",
            top: Platform.select({ ios: 60, android: 50 }),
            width: "100%",
          },
          textInputContainer: {
            marginHorizontal: 10,
            flex: 1,
            backgroundColor: "transparent",
            height: 54,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            height: 54,
            margin: 0,
            padding: 0,
            borderRadius: 9,
            elevation: 5, // Shadow android
            shadowColor: palette.dark.main, // Shadow ios
            shadowOpacity: 0.1, // Shadow ios
            shadowOffset: { x: 0, y: 0 }, // Shadow ios
            shadowRadius: 15, // Shadow ios
            borderWidth: 1,
            borderColor: palette.grayScale.gray100,
            fontSize: 18,
          },
          listView: {
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: palette.grayScale.gray100,
            backgroundColor: palette.primary.contrastText,
            elevation: 5,
            shadowColor: palette.dark.main, // Shadow ios
            shadowOpacity: 0.1, // Shadow ios
            shadowOffset: { x: 0, y: 0 }, // Shadow ios
            shadowRadius: 15, // Shadow ios
            marginTop: 15,

          },
          description: {
            fontSize: 15,
          },
          row: {
            padding: 18,
            height: 58,
          },
        }}
      />
    );
  }
}

