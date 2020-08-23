import React, { useState } from 'react';
import { Link } from 'gatsby';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSiteMetadata } from './SiteMetadata';

const useDrawerStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export const PopoutMenu = ({ menuLinks, open, onClose }) => {
  const classes = useDrawerStyles();
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className={classes.list} role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {menuLinks.map(({ name, link }) => (
            <Link key={name} className="navbar-item" to={link}>
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: 'white',
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const { menuLinks } = useSiteMetadata();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.nav}>
            <Link to="/" className="navbar-item" title="Logo">
              <Typography variant="h6" className={classes.title}>
                MORDOOM
              </Typography>
            </Link>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      <PopoutMenu menuLinks={menuLinks} open={open} onClose={onClose} />
    </div>
  );
};
