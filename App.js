/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Data from "./src/data/heyirys_covid.json";
import CategoryList from "./src/components/CategoryList/index";
import SubCategoryList from "./src/components/SubCategoryList/index";
import ReportView from "./src/components/ReportView/index";
import MapView from "./src/components/MapView/index";
import styles from "./styles";
import I18n from "./src/i18n/config";


const Stack = createStackNavigator();

function App() {
  let options = {
    title: I18n.t("appTitle"),
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: '#F6F2FF'
    },
    cardStyle: { backgroundColor: "#F6F2FF" },
  };
  return (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={options}>
            {(props) => <CategoryList {...props} data={Data} />}
          </Stack.Screen>
          <Stack.Screen name="Details" options={options}>
            {(props) => <SubCategoryList {...props} data={Data} />}
          </Stack.Screen>
          <Stack.Screen name="Report" options={options}>
            {(props) => <ReportView {...props} data={Data} />}
          </Stack.Screen>
          <Stack.Screen name="Map" options={options}>
            {(props) => <MapView {...props} data={Data} />}
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
