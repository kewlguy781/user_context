import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/profile" component={UserProfile} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
