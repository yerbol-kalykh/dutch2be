import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import React from "react";
import { useStyles } from "./HeaderStyle";
import { Link } from "react-router-dom";

const Header = () => {
  const { root, title, testBtn } = useStyles();

  return (
    <AppBar position="static" className={root}>
      <Toolbar>
        <MenuBookIcon />
        <Typography variant="h6" className={title}>
          Dutch2Be
        </Typography>
        <Button variant="contained">
          <Link to="/">
            <HomeIcon />
          </Link>
        </Button>
        <Button className={testBtn} variant="contained">
          <Link to="/testyourself">Test Yourself</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
