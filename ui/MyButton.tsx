'use client';

import Button from '#/ui/Button';
import React from 'react';

export default function MyButton({ alertTitle }: {alertTitle: string}) {
  // const [clicked, setClicked] = React.useState(false);

  // if (clicked) {
  //   throw new Error('Oh no! Something went wrong.');
  // }

  return (
    <Button
      kind="default"
      onClick={() => {
        alert(alertTitle)
      }}
    >
      Trigger Error
    </Button>
  );
}
