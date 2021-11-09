import React from 'react';
import { Divider, Heading, Box } from 'honey-rn';

export const Example = () => {
  return (
    <Box w="140">
      <Heading mx="3" d="flex" alignItems="center" flexDirection="row">
        Chrome
      </Heading>
      <Divider my="2" />
      <Heading mx="3" d="flex" alignItems="center" flexDirection="row">
        Firefox
      </Heading>
    </Box>
  );
};
