import React from 'react';
import { Flex, Spacer, Center } from 'honey-rn';

export const Example = () => {
  return (
    <Flex h={40} w={20} mt={6}>
      <Center
        size={16}
        bg="primary.500"
        _dark={{ bg: 'primary.400' }}
        rounded="sm"
        _text={{
          color: 'warmGray.50',
          fontWeight: 'medium',
        }}
      >
        Box 1
      </Center>
      <Spacer />
      <Center
        size={16}
        bg="secondary.500"
        _dark={{ bg: 'secondary.400' }}
        rounded="sm"
        _text={{
          color: 'warmGray.50',
          fontWeight: 'medium',
        }}
      >
        Box 2
      </Center>
    </Flex>
  );
};
