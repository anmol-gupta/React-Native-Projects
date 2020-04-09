import React,{useContext} from "react";
import {View,StyleSheet} from "react-native"
import {Text,Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import {SafeAreaView} from "react-navigation";
const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top:'always'}}>
             <Text style={{fontSize: 38,marginHorizontal: 35, marginVertical: 40}}>Are you really going :( Please comeback soon!</Text>
             <Spacer/>
             <Button title="Sign out" onPress={signout}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default AccountScreen;