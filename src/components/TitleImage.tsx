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

interface TitleImageProps {
  image: string;
  children?: JSX.Element;
}

export const TitleImage = ({ image, children }: TitleImageProps) => {
  const classes = useTitleStyles();
  return (
    <div className={classes.fullWidthImage} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};
