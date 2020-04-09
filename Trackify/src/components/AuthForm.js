import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        onChangeText={newEmail => setEmail(newEmail)}
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        onChangeText={newPassword => setPassword(newPassword)}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      {errorMessage ? <Text style={styles.err}>{errorMessage}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
    err: {
        fontSize: 16,
        color: "red",
        marginHorizontal: 12
}});

export default AuthForm;
