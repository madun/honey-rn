import React from 'react';
import { PinInput } from 'honey-rn';

export const Example = () => {
  return (
    <PinInput manageFocus={false}>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput>
  );
};
