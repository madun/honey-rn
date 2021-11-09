import React from 'react';
import { Tabs } from 'honey-rn';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>One</Tabs.Tab>
        <Tabs.Tab>Two</Tabs.Tab>
        <Tabs.Tab>Three</Tabs.Tab>
        {/* <Tabs.Tab>Four</Tabs.Tab> */}
      </Tabs.Bar>
    </Tabs>
  );
};
