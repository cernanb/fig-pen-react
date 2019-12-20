import React, { Component, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
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

const PinsList = ({ pinsToDisplay }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Container>
        {pinsToDisplay
          .sort((a, b) => a.figpin_id - b.figpin_id)
          .map(pin => (
            <>
              <ListItem alignItems="center">
                <ListItemAvatar style={{ marginRight: "3rem" }}>
                  <Link to={`/pins/${pin.id}`}>
                    <img
                      height={130}
                      width={100}
                      alt={pin.name}
                      src={
                        pin.photo_url
                          ? process.env.NODE_ENV === "development"
                            ? `http://localhost:3001${pin.photo_url}`
                            : `https://cryptic-beyond-25854.herokuapp.com${pin.photo_url}`
                          : "https://via.placeholder.com/520x720"
                      }
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
                        variant="h5"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`${pin.name}  (#${pin.figpin_id})`}
                      </Typography>
                    </Link>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="subtitle2"
                        className={classes.inline}
                        color="textSecondary"
                      >
                        <br />
                        {pin.line && `${pin.line.name}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
      </Container>
    </List>
  );
};

export default PinsList;
