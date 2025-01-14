import React from 'react';
import { Factory } from 'honey-rn';
import { View } from 'react-native';

export const Example = () => {
  const FactoryView = Factory(View, {
    baseStyle: {
      bg: 'cyan.300',
      borderRadius: 'md',
    },
  });
  return <FactoryView height={50} width={50} />;
};
