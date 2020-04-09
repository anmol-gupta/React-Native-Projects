import React, { useContext,useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
const SignupScreen = ({ navigation }) => {
  const { state, signup, tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin()
  },[])
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Signup for Trackify"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        // onSubmit={({ email, password }) => signup({ email, password })}
        onSubmit={signup}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Text style={styles.link}>Already have an account? Signin instead.</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  },
  link: {
    color: "blue",
    marginHorizontal: 12
  }
});

export default SignupScreen;
