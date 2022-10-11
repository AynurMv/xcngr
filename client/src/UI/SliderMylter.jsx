import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function SliderMylter() {
  return (
    <div
      style={{
        width: '570px',
        height: '490px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="sliderMulter"
    >

      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{ width: '80px' }} />
      </Box>

    </div>
  );
}
