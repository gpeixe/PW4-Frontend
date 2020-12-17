import React from 'react';
import Link from '@material-ui/core/Link';

export default function ButtonMUI(text, route) {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        this.props.history.push(`${route}`)
      }}
    >
      `${text}`
    </Link>
  );
}