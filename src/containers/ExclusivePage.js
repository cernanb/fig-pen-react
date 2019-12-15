import React from "react";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PinsList from "./PinsList";

const ExclusivePage = ({ exclusivePins }) => {
  const props = useSpring({
    config: { duration: 500 },
    to: { opacity: 1 },
    from: { opacity: 0, height: 600 }
  });
  return (
    <animated.div style={props}>
      <Typography style={{ marginTop: "20px" }} variant="h2" gutterBottom>
        Exclusives
      </Typography>
      <Container>
        <PinsList pinsToDisplay={exclusivePins} />
      </Container>
    </animated.div>
  );
};

export default connect(state => {
  let exclusivePins = state.pins.all.reduce((accumulator, pin) => {
    if (pin.pin_releases.filter(pr => pr.exclusive).length > 0) {
      accumulator.push(pin);
    }
    return accumulator;
  }, []);

  return { exclusivePins };
})(ExclusivePage);
