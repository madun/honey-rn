import React from 'react';
import { Button, Toast } from 'honey-rn';

export const Example = () => {
  return (
    <Button
      onPress={() =>
        Toast.show({
          title: 'Hello world',
        })
      }
    >
      Bottom
    </Button>
  );
};
