import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePin } from "../redux/actions/pins";
import { addPin } from "../redux/actions/users";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background-color: red;
  padding: 15px;
  border-radius: 5px;
  color: white;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    backgroundColor: "#27ae60",
    color: "white"
  }
}));

const PinShow = ({ deletePin, pin, loading, addPin }) => {
  const classes = useStyles();
  // const delete = () => {
  //   this.props.deletePin(this.props.pin.id, this.props.history);
  // };
  if (loading && !pin) {
    return <p>Loading...</p>;
  }

  if (!loading && !pin) {
    return <p>Pin not found</p>;
  }
  return (
    <div className={classes.root}>
      <Container>
        <Typography gutterBottom style={{ marginTop: "30px" }} variant="h2">
          Pin Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div>
              <img
                height={400}
                width={300}
                alt={`${pin.name} pic`}
                src={`https://cryptic-beyond-25854.herokuapp.com${pin.photo_url}`}
              />
            </div>
            <Button
              variant="contained"
              onClick={() => addPin(pin)}
              className={classes.button}
            >
              Add to Collection
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4">
                {pin.name} (#{pin.figpin_id})
              </Typography>
              {pin.line && (
                <Typography variant="body1" gutterBottom>
                  Line: {pin.line.name}
                </Typography>
              )}
              <Typography variant="h6" gutterBottom>
                Releases:
              </Typography>
              <List>
                {pin.pin_releases.map(pr => (
                  <ListItem>
                    <ListItemText
                      primary={`Edition: ${pr.edition} - Volume Size: ${pr.volume_size}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const pin = state.pins.all.filter(pin => pin.id == id)[0];
  return {
    pin,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { deletePin, addPin })(PinShow);
