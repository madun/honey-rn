import React from 'react';
import { PresenceTransition, Button, Center } from 'honey-rn';
export const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 250 } }}
      >
        <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
          ScaleFade
        </Center>
      </PresenceTransition>
    </>
  );
};
