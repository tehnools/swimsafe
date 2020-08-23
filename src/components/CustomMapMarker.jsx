import React, { useState } from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

export default function CustomMapMarker({
  mapMarker,
  coordinate,
  title
}) {
  const [tracksViewChanges, setTracksViewChanges] = useState(true);
  return (
    <Marker
      coordinate={coordinate}
      title={title}
      tracksViewChanges={tracksViewChanges}
    >
      <Image
        onLoad={() => setTracksViewChanges(false)}
        source={mapMarker.mapMarker}
        fadeDuration={0}
      />
    </Marker>
  );
}
