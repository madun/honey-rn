import React from 'react';
import { Tabs } from 'honey-rn';

export const Example = () => {
  return (
    <Tabs>
      <Tabs.Bar>
        <Tabs.Tab>TAB ONE</Tabs.Tab>
        <Tabs.Tab>TAB TWO</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>One</Tabs.View>
        <Tabs.View>Two</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
};
