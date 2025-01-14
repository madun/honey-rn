import React from 'react';
import { Divider, Flex, Box, Heading } from 'honey-rn';

export const Example = () => {
  return (
    <Box w="160">
      <Heading mx="auto">Shoes</Heading>
      <Divider my="2" />
      <Flex mx="3" direction="row" justify="space-evenly">
        <Heading py="2">Girls</Heading>
        <Divider orientation="vertical" mx="3" />
        <Heading py="2">Boys</Heading>
      </Flex>
    </Box>
  );
};
