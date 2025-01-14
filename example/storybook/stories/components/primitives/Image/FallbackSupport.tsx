import React from 'react';
import { Image } from 'honey-rn';
export function Example() {
  return (
    <Image
      size={150}
      alt="fallback text"
      borderRadius={100}
      source={{
        uri: 'https://-page-icon.png',
      }}
      fallbackSource={{
        uri: 'https://www.w3schools.com/css/img_lights.jpg',
      }}
    />
  );
}
