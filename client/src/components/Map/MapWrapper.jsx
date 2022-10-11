import React from 'react';

const MapWrapper = React.memo(
  () => <div id="map-container" style={{ width: '100%', height: 400, marginTop: '180px' }} />,
  () => true,
);

export default MapWrapper;
