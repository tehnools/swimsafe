import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Dimensions, Image, View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MapView from '@bam.tech/react-native-component-map-clustering';
import MapMarker from '../components/CustomMapMarker';
import { generateMarkers } from '../../redux/actions/mapMarkers';
import { getLocations, getAlerts } from '../../redux/actions/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

function Main() {
  const dispatch = useDispatch();
  // const [region, setRegion] = useState(null);
  const { loadingMapMarkers } = useSelector((state) => state.loadingState);
  const locationsState = useSelector((state) => state.locationsState);
  const alertsState = useSelector((state) => state.alertsState);
  const mapMarkersState = useSelector((state) => state.mapMarkersState);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    dispatch(getLocations());
    dispatch(getAlerts());
  }, [reload]);

  useEffect(() => {
    if (alertsState !== null && locationsState !== null) {
      dispatch(generateMarkers(alertsState, locationsState));
    }
  }, [alertsState, locationsState]);

  return (
    <>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -36.848461,
          longitude: 174.763336,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        clustering
        // onRegionChange={onRegionChange}
        minZoomLevel={10}
        maxZoomLevel={17}
        showsBuildings={false}
        showsTraffic={false}
        paddingAdjustmentBehavior="automatic"
      >
        {!loadingMapMarkers
        && mapMarkersState
        && Object.entries(mapMarkersState).map(([key, mapMarker]) => (
          <MapMarker
            key={JSON.stringify(mapMarker)}
            id={key}
            coordinate={mapMarker.latlng}
            title={mapMarker.title}
            mapMarker={mapMarker}
          />
        ))}
      </MapView>
    </>
  );
}

export default Main;
