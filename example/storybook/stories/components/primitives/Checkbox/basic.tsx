import React from 'react';
import { HStack, Checkbox } from 'honey-rn';

export const Example = () => {
  return (
    <HStack space={6}>
      <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
      <Checkbox
        value="test"
        accessibilityLabel="This is a dummy checkbox"
        defaultIsChecked
      />
    </HStack>
  );
};
