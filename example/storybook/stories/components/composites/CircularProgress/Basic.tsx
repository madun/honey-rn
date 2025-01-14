import React from 'react';
import { CircularProgress, Heading, Center } from 'honey-rn';
export const Example = () => {
  return (
    <Center>
      <Heading mb={6}>Default CircularProgress</Heading>
      <CircularProgress value={60} />
    </Center>
  );
};
