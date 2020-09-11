import React, { Component } from "react";
import MapView from "react-native-maps";
import { View, Image } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Search from "../Search";
import ControlButtons from "../ControlButtons/index";
import PlacesInput from "react-native-places-input";
import I18n from "../../i18n/config";

export default class Map extends Component {
  state = {
    region: null,
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        region: {
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        },
      });
    });
  }

  render() {
    const { region, destination } = this.state;

    return (
      <React.Fragment>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            region={region}
            showsUserLocation
            loadingEnabled
          />
          {/* <Search props={this.props} /> */}
          <PlacesInput
            placeHolder={I18n.t("mapSearch")}
            stylesContainer={{
              position: "absolute",
              alignSelf: "stretch",
              top: 60,
              left: 10,
              right: 10,
            }}
            stylesList={{
              top: 0,
              left: -1,
              right: -1,
            }}
            googleApiKey={"AIzaSyD3iObdCKuJynKlC7JQ61iSzIFxvyWEWUs"}
            onSelect={(place) =>
              this.setState({
                region: {
                  latitude: place.result.geometry.location.lat,
                  longitude: place.result.geometry.location.lng,
                  latitudeDelta: 0.0143,
                  longitudeDelta: 0.0134,
                },
              })
            }
          />
        </View>
        <View
          style={{
            left: "50%",
            marginLeft: -24,
            marginTop: -48,
            position: "absolute",
            top: "50%",
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 35,
              width: 35,
            }}
            source={require("../../assets/marker.png")}
          />
        </View>
        <ControlButtons props={this.props} flex={0} />
      </React.Fragment>
    );
  }
}
