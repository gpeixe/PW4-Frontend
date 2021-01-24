import React from 'react';
import { Button } from '@material-ui/core';

export default function ButtonComponent(props) {

  return (
    <Button
      {
        ...props
      }
      variant="contained"
      color={props.color}
    >
      {props.value}
    </Button>
  );
}