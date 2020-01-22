import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Dimensions, Image, View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Marker } from 'react-native-maps';
import MapView from '@bam.tech/react-native-component-map-clustering';
import getMarkerInfo from '../../utils/getMarkerInfo';
import getWaterQualityIcon from '../../utils/getWaterQualityIcon';
import { getLocations, getAlerts } from '../../redux/actions/data';
import locations from '../../redux/reducers/locations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

function Main() {
  const dispatch = useDispatch();
  // const [region, setRegion] = useState(null);
  const loadingState = useSelector((state) => state.loadingState);
  const locationsState = useSelector((state) => state.locationsState);

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getAlerts());
  }, []);

  return (
    <>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -36.848461,
          longitude: 174.763336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        clustering
        // onRegionChange={onRegionChange}
        showsBuildings={false}
        showsTraffic={false}
        paddingAdjustmentBehavior="automatic"
      >
        {/* {(!loadingState.loadingLocations && locationsState) && locationsState.map(({ location }) => {
          const latlng = { latitude: location.lat, longitude: location.lng };
          return (
            <Marker
              key={JSON.stringify(location)}
              id={location.id}
              coordinate={latlng}
              title={location.name}
            >
              <View>
                <Image source={location.mapMaker} />
              </View>
            </Marker>
          );
        })} */}
      </MapView>
    </>
  );
}

export default Main;
