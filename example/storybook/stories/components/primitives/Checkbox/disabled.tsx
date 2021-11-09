import React from 'react';
import { Checkbox, VStack } from 'honey-rn';

export const Example = () => {
  return (
    <VStack space={2}>
      <Checkbox isDisabled value="one">
        UX Research
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked value="two">
        Software Development
      </Checkbox>
    </VStack>
  );
};
