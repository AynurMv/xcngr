import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import MapWrapper from './MapWrapper';

export default function Map({ coordinates }) {
  useEffect(() => {
    let map;
    const mapCoord = coordinates?.split(', ').map((el) => Number(el)).reverse();
    // eslint-disable-next-line no-unused-vars
    load().then((mapglAPI) => {
      map = new mapglAPI.Map('map-container', {
        center: mapCoord,
        zoom: 13,
        key: '486c5922-c3f3-4aec-9dee-554a93d8ed78',
      });
      // eslint-disable-next-line no-unused-vars
      const marker = new mapglAPI.Marker(map, {
        coordinates: mapCoord,
      });
    });
    return () => map;
  }, [coordinates]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapWrapper />
    </div>
  );
}
