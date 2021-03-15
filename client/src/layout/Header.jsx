import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createStyles,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const { root, title } = useStyles();

  return (
    <AppBar position="static" className={root}>
      <Toolbar>
        <MenuBookIcon />
        <Typography variant="h6" className={title}>
          Dutch2Be
        </Typography>
        <Button variant="contained">
          <HomeIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
