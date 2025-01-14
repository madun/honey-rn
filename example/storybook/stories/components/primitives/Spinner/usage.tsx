import React from 'react';
import { Spinner, HStack, Heading } from 'honey-rn';

export const Example = () => {
  return (
    <HStack space={2} alignItems="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
