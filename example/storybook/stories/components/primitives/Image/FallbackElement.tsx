import React from 'react';
import { Image, Box } from 'honey-rn';
export function Example() {
  return (
    <Image
      size={150}
      alt="fallback text"
      borderRadius={2}
      src="https://cdn.pixaba.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
      fallbackElement={
        <Box boxSize={20} bg="red.100">
          This is a box
        </Box>
      }
    />
  );
}
