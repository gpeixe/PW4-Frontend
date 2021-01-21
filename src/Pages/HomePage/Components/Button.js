import React from 'react';
import { Button } from '@material-ui/core';

export default function ButtonComponent(props) {

  return (
    <Button
      {
        ...props
      }
      variant="contained"
      color="secondary"
    >
      {props.value}
    </Button>
  );
}