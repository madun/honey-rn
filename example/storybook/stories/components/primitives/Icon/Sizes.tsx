import React from 'react';
import { Icon, Heading, Center, VStack } from 'honey-rn';
import { Ionicons } from '@expo/vector-icons';

export const Example = () => {
  const sizes = [
    '10',
    '50px',
    '2xl',
    // 'xs',
    // 'sm',
    // 'md',
    // 'lg',
    // 'xl',
    // '2xl',
    // '3xl',
    // '4xl',
    // '5xl',
    // '6xl',
  ];
  return (
    <Center>
      <Heading mb="10">Sizes</Heading>
      <VStack space={4} justifyContent="center">
        {sizes.map((size) => (
          <Icon
            as={Ionicons}
            name="md-checkmark-circle"
            alignSelf="center"
            size={size}
          />
        ))}
      </VStack>
    </Center>
  );
};
