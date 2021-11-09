import React from 'react';
import { Spinner, VStack, Heading } from 'honey-rn';

export const Example = () => {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        Sizes
      </Heading>
      <Spinner size="sm" />
      <Spinner size="lg" />
    </VStack>
  );
};
