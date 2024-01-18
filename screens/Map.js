import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useState } from "react";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState();

  const DAVIS_TECH_COORDS = {
    latitude: 41.02964663532436,
    longitude: -111.92543821634911,
    delta: 0.02,
  };

  const region = {
    latitude: DAVIS_TECH_COORDS.latitude,
    longitude: DAVIS_TECH_COORDS.longitude,
    latitudeDelta: DAVIS_TECH_COORDS.delta,
    longitudeDelta: DAVIS_TECH_COORDS.delta,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
