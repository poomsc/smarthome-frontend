import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import RoomsDashboard from "./containers/RoomsDashboard/RoomsDashboard";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import { MainPage } from "./MainPage";

function App() {
  const AsyncRoomsDevices = asyncComponent(() =>
    import("./containers/RoomsDashboard/RoomDevices/RoomDevices")
  );

  return <MainPage />;

  return (
    <Layout>
      <Switch>
        <Route path="/room/:id" exact component={AsyncRoomsDevices} />
        <Route path="/" exact component={RoomsDashboard} />
      </Switch>
    </Layout>
  );
}

export default App;
