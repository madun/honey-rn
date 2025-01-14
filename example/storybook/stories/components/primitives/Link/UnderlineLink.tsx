import React from 'react';
import { Link } from 'honey-rn';

export const Example = () => {
  return (
    // @ts-ignore
    <Link
      _text={{
        fontSize: 'xl',
        _light: {
          color: 'cyan.500',
        },
        color: 'cyan.300',
      }}
      mt={4}
      href="https://nativebase.io"
      isUnderlined
      _hover={{
        _text: {
          _light: {
            color: 'cyan.600',
          },
          color: 'cyan.400',
        },
      }}
    >
      Click me to open NativeBase website.
    </Link>
  );
};
