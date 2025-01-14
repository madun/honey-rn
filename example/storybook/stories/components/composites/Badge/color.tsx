import React from 'react';
import { Badge, HStack } from 'honey-rn';

export function Example() {
  return (
    <HStack space={{ base: 2, md: 4 }} mx={{ base: 'auto', md: 0 }}>
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="coolGray">DARK</Badge>
    </HStack>
  );
}
