import React from 'react';
import { Heading, Text, VStack } from 'honey-rn';

export const Example = () => {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Heading textAlign="center" mb="10">
        Sizes
      </Heading>
      <Text fontSize="xs">xs</Text>
      <Text fontSize="sm">sm</Text>
      <Text fontSize="md">md</Text>
      <Text fontSize="lg">lg</Text>
      <Text fontSize="xl">xl</Text>
      <Text fontSize="2xl">2xl</Text>
      <Text fontSize="3xl">3xl</Text>
      <Text fontSize="4xl">4xl</Text>
      <Text fontSize="5xl">5xl</Text>
      <Text fontSize="6xl">6xl</Text>
    </VStack>
  );
};
