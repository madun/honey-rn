import React from 'react';
import { CircularProgress, Heading, Center } from 'honey-rn';
export const Example = () => {
  return (
    <Center>
      <Heading mb={6}>Adding label</Heading>
      <CircularProgress value={60}>60%</CircularProgress>
    </Center>
  );
};
