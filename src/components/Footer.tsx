import React from 'react';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: 'black',
    maxWidth: '100vw',
  },
  social: {
    padding: '2em',
    '& a': {
      padding: '.5em .5em .3em .5em',
      borderRadius: '1em',
      backgroundColor: 'white',
      margin: '.5em',
      width: '1em',
      height: '1em',
      verticalAlign: 'middle',
      display: 'inline',
    },
    '& img': {
      width: '1em',
      height: '1em',
    },
  },
  heading: {
    textAlign: 'center',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.heading}>MORDOOM</div>
      <div className={classes.socialContainer}>
        <div className={classes.social}>
          <a title="facebook" href="https://facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img className="fas fa-lg" src={twitter} alt="Twitter" />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img src={instagram} alt="Instagram" />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img src={vimeo} alt="Vimeo" />
          </a>
        </div>
      </div>
    </footer>
  );
};
