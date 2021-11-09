import React from 'react';
import { Image } from 'honey-rn';
export function Example() {
  return (
    <Image
      source={{
        uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
      alt="Alternate Text"
      size="xl"
    />
  );
}
