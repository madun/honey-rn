import React from 'react';
import { TextArea } from 'honey-rn';

export const Example = () => {
  return (
    <TextArea
      h={20}
      placeholder="Text Area Placeholder"
      w={{ base: '70%', md: '25%' }}
    />
  );
};
