import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Days({ changeHandlerTiming, timer, max }) {
  return (
    <Box sx={{ width: 300 }}>
      {timer.timing < (max * 0.8) ? (
        <Slider
          name="timing"
          aria-label="Temperature"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          value={timer.timing}
          max={max}
          onChange={changeHandlerTiming}
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
          value={timer.timing}
          min={1}
          max={max}
          onChange={changeHandlerTiming}
          style={{ width: '200%', color: 'red' }}
        />
      )}

    </Box>
  );
}
