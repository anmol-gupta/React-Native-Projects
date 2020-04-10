import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    mocked: "true",
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      longitude: 20.5937 + increment * tenMetersWithDegrees,
      latitude: 78.9629 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId,
    location: getLocation(counter)
  });
  counter++;
}, 1000);
