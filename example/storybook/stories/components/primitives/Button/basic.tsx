import React from 'react';
import { Button } from 'honey-rn';

export const Example = () => {
  return (
    <>
      <Button onPress={() => console.log('hello world')}>Primary</Button>
    </>
  );
};
