//@ts-nocheck
import React from 'react';
import { Image } from 'honey-rn';

export function Example() {
  const myRef = React.useRef(null);

  React.useEffect(() => {
    if (myRef.current && myRef.current.setNativeProps)
      myRef.current?.setNativeProps({ borderWidth: 10, opacity: 0.5 });
  }, [myRef]);

  return (
    <Image
      ref={myRef}
      source={{
        uri: 'https://wallpaperaccess.com/full/317501.jpg',
      }}
      alt="Alternate Text"
      size="xl"
    />
  );
}
