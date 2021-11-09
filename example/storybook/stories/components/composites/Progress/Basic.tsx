import React from 'react';
import { Box, Progress, Heading, Center } from 'honey-rn';

export const Example = () => {
  return (
    <Box w="90%">
      <Center mb="10">
        <Heading size="md"> Simple Progress Bar</Heading>
      </Center>
      <Progress value={45} mx="4" />
    </Box>
  );
};
