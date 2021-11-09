import React from 'react';
import { Tabs, Box } from 'honey-rn';

export const Example = () => {
  return (
    <Box w="90%">
      <Tabs isFitted>
        <Tabs.Bar>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
          <Tabs.Tab>Four</Tabs.Tab>
        </Tabs.Bar>
      </Tabs>
    </Box>
  );
};
