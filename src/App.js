import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UserProfile from "./pages/UserProfile/UserProfile";
import AuthPage from "./pages/AuthPage/AuthPage";
import PrivateRoute from "./services/PrivateRoute";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/userProfile" component={UserProfile} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
      
    </BrowserRouter>
  );
};

export default App;
