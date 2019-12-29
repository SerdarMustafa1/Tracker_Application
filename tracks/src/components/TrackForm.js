import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { StyleSheet } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  //   console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          required
          placeholder="Enter Name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      {recording ? (
        <Button
          buttonStyle={styles.buttonStop}
          title="Stop Recording"
          onPress={stopRecording}
        />
      ) : (
        <Button
          buttonStyle={styles.buttonStart}
          title="Start Recording"
          onPress={startRecording}
        />
      )}
      {!recording && locations.length ? (
        <Button
          buttonStyle={styles.buttonSave}
          title="Save Recording"
          onPress={saveTrack}
        />
      ) : null}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({
  buttonStart: {
    margin: 20,
    backgroundColor: "green"
  },
  buttonStop: {
    margin: 20,
    backgroundColor: "red"
  },
  buttonSave: {
    margin: 20
  }
});
