import React, { useState } from 'react';
import { TextArea } from 'honey-rn';

export const Example = () => {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <TextArea
      value={textAreaValue}
      onChange={demoValueControlledTextArea}
      w={{ base: '70%', md: '25%' }}
    />
  );
};
