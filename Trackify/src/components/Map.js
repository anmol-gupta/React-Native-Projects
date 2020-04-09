import React from "react";
import MapView,{Polyline} from "react-native-maps";
import { Text, StyleSheet } from "react-native";

const Map = () => {
    let points = [];
    for(let i=0;i<=20;i++) {
        points.push({
            latitude: 20.5937+i*0.01,
            longitude: 78.9629+1*0.01
        })
    }
  return (
    <MapView
      style={{ height: 300 }}
      initialRegion={{
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
        <Polyline coordinates={points}/>
    </MapView>
  );
};

const styles = StyleSheet.create({});

export default Map;
