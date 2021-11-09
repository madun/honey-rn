import React from 'react';
import { NativeBaseProvider, extendTheme } from 'honey-rn';
import { Content } from './Content';

export const Example = () => {
  const config = {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  };
  const customTheme = extendTheme({ config });
  return (
    <NativeBaseProvider theme={customTheme}>
      <Content />
    </NativeBaseProvider>
  );
};
