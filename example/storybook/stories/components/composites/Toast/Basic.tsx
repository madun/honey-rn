import React from 'react';
import { Button, useToast } from 'honey-rn';

export const Example = () => {
  const toast = useToast();

  return (
    <Button
      onPress={() =>
        toast.show({
          description: 'Hello world',
        })
      }
    >
      Bottom
    </Button>
  );
};
