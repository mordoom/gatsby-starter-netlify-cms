import React from 'react';
import { makeStyles } from '@material-ui/core';

const useTitleStyles = makeStyles(() => ({
  fullWidthImage: {
    width: '100vw',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: `top left`,
    backgroundAttachment: `fixed`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const TitleImage = ({ image, children }) => {
  const classes = useTitleStyles();
  return (
    <div className={classes.fullWidthImage} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};
