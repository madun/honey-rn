import React from 'react';
import { Switch, HStack, Text } from 'honey-rn';

export const Example = () => {
  return (
    <HStack space={8} alignItems="center">
      <Text fontSize="lg">Accessibility</Text>
      <Switch
        accessibilityLabel="switch-accessible"
        accessibilityHint="turn on or off"
      />
    </HStack>
  );
};
