import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route path='/' component={Landing} exact />
          <section className='container'>
            <Alert />
            <Switch>
              <Route path='/register' component={Register} exact />
              <Route path='/login' component={Login} exact />
              <Route path='/profiles' component={Profiles} exact />
              <Route path='/profile/:id' component={Profile} exact />
              <PrivateRoute path='/dashboard' component={Dashboard} exact />
              <PrivateRoute
                path='/create-profile'
                component={CreateProfile}
                exact
              />
              <PrivateRoute
                path='/edit-profile'
                component={EditProfile}
                exact
              />
              <PrivateRoute
                path='/add-experience'
                component={AddExperience}
                exact
              />
              <PrivateRoute
                path='/add-education'
                component={AddEducation}
                exact
              />
              <PrivateRoute path='/posts' component={Posts} exact />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
