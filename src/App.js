import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NewPin from "./components/NewPin";
import PinsList from "./containers/PinsList";
import { connect } from "react-redux";
import { getPins } from "./redux/actions/pins";

class App extends React.Component {
  componentDidMount() {
    this.props.getPins();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/pins" component={PinsList} />
          <Route path="/pins/new" component={NewPin} />
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { getPins }
)(App);
