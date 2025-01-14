import React from 'react';
import { Box, Progress, VStack, Heading } from 'honey-rn';

export const Example = () => {
  return (
    <Box w="90%">
      <VStack space="md">
        <Heading textAlign="center" mb="10" size="md">
          Progress Color Scheme
        </Heading>
        <VStack mx="4" space="md">
          <Progress colorScheme="primary" value={35} />
          <Progress colorScheme="secondary" value={45} />
          <Progress colorScheme="emerald" value={55} />
          <Progress colorScheme="warning" value={65} />
          <Progress colorScheme="light" value={75} />
        </VStack>
      </VStack>
    </Box>
  );
};
