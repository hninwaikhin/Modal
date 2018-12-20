import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import App from "../App";
import WatchList from "./WatchList";
import ModalBox from "./ModalBox";
import "./SideBar.css";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="sidenav">
            <Navigation style={{ position: "fix" }} />
          </div>
          <div className="main">
            <Switch>
              <Route path="/" component={App} exact />
              <Route path="/watchlist" component={WatchList} />
              <Route path="/modalbox" component={ModalBox} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default SideBar;
