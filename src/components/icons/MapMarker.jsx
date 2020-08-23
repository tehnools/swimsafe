import React from 'react';
import {
  Icon
} from '@ui-kitten/components';
import { Marker } from 'react-native-maps';


export default function MapMarker(name, latlng) {
  return (
    <Marker
      coordinate={latlng}
      title={name}
    />
  );
}
