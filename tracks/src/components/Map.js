import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  View
} from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import { Icon } from "react-native-elements";

const deviceWidth = Dimensions.get("window").width;

const Map = () => {
  const {
    state: { currentLocation, locations }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View style={styles.container}>
      {/* <Icon
        raised
        name="map-pin"
        type="font-awesome"
        color="#0000ff"
        style={styles.mapIcon}
      /> */}
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        {/* <Polyline coordinates={points} /> */}
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />

        <MapView.Marker
          coordinate={{ ...currentLocation.coords }}
          title={"Current Location"}
          // description={"description"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  map: {
    height: 300,
    borderColor: "gray",
    borderWidth: 5,
    width: deviceWidth - 32,
    borderRadius: 10,
    alignSelf: "center",
    marginHorizontal: 10
  }
  // mapIcon: {
  //   position: "absolute",
  //   top: 10,
  //   left: 50
  // }
});

export default Map;
