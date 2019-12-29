import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Button
          style={styles.button}
          title="Sign Out"
          onPress={() => {
            signout;
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
  button: {
    marginVertical: 50,
    marginHorizontal: 20
  }
});

export default AccountScreen;
