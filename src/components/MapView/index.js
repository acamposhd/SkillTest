import React, { Component } from "react";
import MapView from "react-native-maps";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Search from "../Search";
import ControlButtons from "../ControlButtons/index";
import styles from "./styles";
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
            followsUserLocation
            loadingEnabled
          />
          <Search />
        </View>

        <ControlButtons props={this.props} flex={0}/>

        {/* <View
          style={{
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={{ color: "#CB2038", fontSize: 16 }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Next</Text>
          </TouchableOpacity>
        </View> */}
      </React.Fragment>
    );
  }
}
