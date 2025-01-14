import React from 'react';
import { ZStack, Box } from 'honey-rn';

export const Example = () => {
  return (
    <ZStack alignItems="center" justifyContent="center">
      <Box bg="primary.500" size="64" rounded="lg" />
      <Box bg="secondary.500" size="48" rounded="lg" shadow={8} />
      <Box bg="emerald.500" size="32" rounded="lg" shadow={8} />
    </ZStack>
  );
};
