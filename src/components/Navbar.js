import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="black">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleClick} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            <Link
              to="/catalog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>Catalog</MenuItem>
            </Link>
            <Link
              to="/pins/exclusive"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>Exclusive Pins</MenuItem>
            </Link>
            {/* <Link
              to="/collection"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>My Collection</MenuItem>
            </Link> */}
            {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Figpin
          </Typography>
          <Button color="inherit">Welcome</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
