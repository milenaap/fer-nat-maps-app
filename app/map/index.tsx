import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';



const MapScreen = () => {
  return (
    <View
      style={styles.container}
    >
      <MapView
        // showsPointsOfInterest={false}
        style={styles.map}
        initialRegion={{
          // 41.391029239023105, 2.1448834763218048
          latitude: 41.39104,
          longitude: 2.14488,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  map: {
    width: '100%',
    height: '100%',
  },

})