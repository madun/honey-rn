import React from 'react';
import { Input } from 'honey-rn';

export const Example = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Input
      value={value}
      w={{ base: '75%', md: '25%' }}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
