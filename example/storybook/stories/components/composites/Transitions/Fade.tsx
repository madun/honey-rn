import React from 'react';
import { Button, Center, PresenceTransition } from 'honey-rn';

export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 250 } }}
      >
        <Center
          mt="7"
          bg="teal.500"
          rounded="md"
          w="200"
          h="100"
          _text={{ color: 'white' }}
        >
          Fade
        </Center>
      </PresenceTransition>
    </>
  );
};
