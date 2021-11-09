import React from 'react';
import { Tag, HStack } from 'honey-rn';

export const Example = () => {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} variant="solid" _text={{ color: 'white' }}>
          NativeBase
        </Tag>
      ))}
    </HStack>
  );
};
