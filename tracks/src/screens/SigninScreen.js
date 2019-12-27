import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import { Context as AuthContext } from "../context/authContext";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        // onSubmit={() => console.log("sign in btn pressed")}
        submitButtonText="Sign in"
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead!"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SigninScreen;
