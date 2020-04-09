import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Signin to your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={styles.link}>New Member? Signup instead.</Text>
      </TouchableOpacity>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
