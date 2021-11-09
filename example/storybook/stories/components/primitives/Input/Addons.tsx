import React from 'react';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from 'honey-rn';

export const Example = () => {
  return (
    <Stack alignItems="center">
      <InputGroup w={{ base: '70%', md: '285' }}>
        <InputLeftAddon children={'https://'} />
        <Input w={{ base: '70%', md: '100%' }} placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
