// import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
