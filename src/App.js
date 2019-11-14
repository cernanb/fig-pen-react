import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NewPin from "./components/NewPin";
import PinShow from "./components/PinShow";
import EditPin from "./components/EditPin";
import Navbar from "./components/Navbar";
import PinsList from "./containers/PinsList";
import PinCollection from "./containers/PinCollection";
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
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={PinsList} />
            <Route path="/pins/new" component={NewPin} />
            <Route exact path="/pins/:id/edit" component={EditPin} />
            <Route path="/pins/:id" component={PinShow} />
            <Route path="/collection" component={PinCollection} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { getPins })(App);
