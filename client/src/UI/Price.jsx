import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Price({ changeHandler, inputs }) {
  return (
    <Box sx={{ width: 300 }}>
      {inputs.timing < 25 ? (
        <Slider
          name="timing"
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10000}
          onChange={changeHandler}
          style={{ width: '200%' }}
        />
      ) : (
        <Slider
          name="timing"
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10000}
          onChange={changeHandler}
          style={{ width: '200%', color: 'red' }}
        />
      )}

    </Box>
  );
}
