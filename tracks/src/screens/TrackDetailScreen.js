import React, { useContext } from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";

const deviceWidth = Dimensions.get("window").width;

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;
  const coords = track.locations.coords;

  return (
    <>
      <Text h3 style={styles.title}>
        {track.name}
      </Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        <MapView.Marker
          coordinate={track.locations.map(loc => loc.coords).slice(-1)[0]}
          title={"Finish Location"}
          // description={"description"}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/flag_marker.png")}
          />
        </MapView.Marker>
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginVertical: 20
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
});

export default TrackDetailScreen;
