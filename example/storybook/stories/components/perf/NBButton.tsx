import React from 'react';
import { Button } from 'honey-rn';
export function NBButtons() {
  const foo = new Array(10).fill('hello');
  return (
    <>
      {foo.map((val, index) => (
        <Button key={index} onPress={() => {}}>
          {`NativeBase Button ${index}`}
        </Button>
      ))}
    </>
  );
}
