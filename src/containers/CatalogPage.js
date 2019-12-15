import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchPins, clearSearch } from "../redux/actions/pins";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import PinsList from "./PinsList";

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

const CatalogPage = ({ pins, searchedPins, searchPins, clearSearch }) => {
  useEffect(() => {
    clearSearch();
  }, [clearSearch]);

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
        />
      </Container>
      {search !== "" && searchedPins.length === 0 && <h1>No Search Results</h1>}
      <PinsList
        setSearch={setSearch}
        searchPins={searchPins}
        pinsToDisplay={pinsToDisplay}
      />
    </animated.div>
  );
};

const mapStateToProps = state => {
  return {
    pins: state.pins.all,
    searchedPins: state.pins.searchedPins
  };
};

export default connect(mapStateToProps, { searchPins, clearSearch })(
  CatalogPage
);
