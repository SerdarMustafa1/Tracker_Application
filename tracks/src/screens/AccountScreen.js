import React, { useContext } from "react";
import { StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";

const AccountScreen = ({ navigation }) => {
  const { signout, signin } = useContext(AuthContext);

  const goToSignIn = async () => {
    await signout;
    navigation.navigate("Signin");
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Button
          style={styles.signout}
          title="Sign Out"
          onPress={() => {
            Alert.alert("Sign Out", "Are you sure you want to sign out?", [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "CONFIRM",
                onPress: () => {
                  goToSignIn();
                }
              }
            ]);
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
  signout: {
    marginVertical: 50,
    marginHorizontal: 20,
    color: "red"
  },
  signin: {
    marginVertical: 50,
    marginHorizontal: 20,
    color: "green"
  }
});

export default AccountScreen;
