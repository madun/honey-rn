import React from 'react';
import { Collapse, Stack, Heading, Text, Button } from 'honey-rn';

export const Example = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Stack space={4} mx={8}>
      <Heading>Collapse with duration</Heading>
      <Collapse duration={700} isOpen={show}>
        Candy canes macaroon croissant carrot cake soufflé toffee topping
        pastry. Brownie lollipop brownie sesame snaps. Pastry gingerbread
        biscuit sweet I love macaroon bear claw fruitcake oat cake. Jelly sweet
        roll I love. Pastry pastry powder pie lemon drops chocolate topping
        dessert.
      </Collapse>
      <Button size="sm" colorScheme="emerald" onPress={handleToggle}>
        <Text color="white">Show {show ? 'Less' : 'More'}</Text>
      </Button>
    </Stack>
  );
};
