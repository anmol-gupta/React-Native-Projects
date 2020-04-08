import React from "react";
import {View,StyleSheet,Text,Button} from "react-native"

const SignupScreen = ({navigation}) => {
    return (
        <View>
            <Text>SignUp Screen</Text>
            <Button title="Sign In" onPress = {() => navigation.navigate("Signin")} />
            <Button title="Main Flow" onPress = {() => navigation.navigate("mainFlow")} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SignupScreen;