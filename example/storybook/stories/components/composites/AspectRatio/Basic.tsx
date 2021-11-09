import React from 'react';
import { AspectRatio, Box } from 'honey-rn';

const Example = () => {
  return (
    <AspectRatio height={200} ratio={{ base: 4 / 3, md: 16 / 9 }}>
      <Box bg="red.400" />
    </AspectRatio>
  );
};

export default Example;
