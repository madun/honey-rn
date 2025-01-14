import React from 'react';
import { Box, Link } from 'honey-rn';

export const Example = () => {
  const [state, setState] = React.useState(false);
  const toggleState = () => {
    setState(!state);
  };
  return (
    <>
      <Box h="100" w="100" bg={state ? 'emerald.500' : 'indigo.500'} />
      <Link onPress={toggleState} mt="8">
        <Box
          px="3"
          py="2"
          bg="primary.400"
          rounded="sm"
          _text={{ color: 'white', fontWeight: 'medium' }}
        >
          Change Color
        </Box>
      </Link>
    </>
  );
};
