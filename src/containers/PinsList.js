import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { searchPins } from "../redux/actions/pins";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
    // backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

const PinsList = ({ pins, searchedPins, searchPins }) => {
  const classes = useStyles();
  const props = useSpring({
    config: { duration: 500 },
    to: { opacity: 1 },
    from: { opacity: 0, height: 600 }
  });
  const [search, setSearch] = useState("");
  if (pins.length === 0) {
    return <p>Loading...</p>;
  }
  const pinsToDisplay =
    searchedPins.length === 0 && search === "" ? pins : searchedPins;
  return (
    <animated.div style={props}>
      <List className={classes.root}>
        <Typography style={{ marginTop: "20px" }} variant="h2" gutterBottom>
          Catalog
        </Typography>
        <Container>
          <TextField
            id="filled-full-width"
            label="Search"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => {
              setSearch(e.target.value);
              searchPins(e.target.value);
            }}
            variant="filled"
          />
          {search !== "" && searchedPins.length === 0 && (
            <h1>No Search Results</h1>
          )}
          {pinsToDisplay.map(pin => (
            <>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Link to={`/pins/${pin.id}`}>
                    <img
                      height={130}
                      width={100}
                      alt="Remy Sharp"
                      src={"http://localhost:3001" + pin.photo_url}
                    />
                  </Link>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link
                      to={`/pins/${pin.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        component="span"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {pin.name}
                      </Typography>
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        FiGPiN ID:
                      </Typography>
                      {" " + pin.figpin_id}
                      <br />
                      {pin.line && `Line: ${pin.line.name}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </Container>
      </List>
    </animated.div>
  );
};

const mapStateToProps = state => {
  return {
    pins: state.pins.all,
    searchedPins: state.pins.searchedPins
  };
};

export default connect(mapStateToProps, { searchPins })(PinsList);
