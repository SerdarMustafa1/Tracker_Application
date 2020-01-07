import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import Map from "../components/Map";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <ScrollView>
        <Text style={styles.title} h3>
          Track a new activity
        </Text>
        <Map />
        {err ? (
          <Text style={styles.permission}>Please enable location services</Text>
        ) : null}
        <TrackForm />
      </ScrollView>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({
  permission: {
    color: "red",
    fontSize: 22,
    textAlign: "center",
    textTransform: "uppercase",
    margin: 20
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20
  }
});

export default withNavigationFocus(TrackCreateScreen);
