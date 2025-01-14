import React from 'react';
import { Tooltip, Button } from 'honey-rn';

export function Example() {
  return (
    <Tooltip
      label="Hey, I'm here!"
      openDelay={500}
      bg="indigo.500"
      _text={{ color: '#fff' }}
    >
      <Button>More</Button>
    </Tooltip>
  );
}
