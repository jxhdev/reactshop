import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import Header from './Header';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const RoutesWrap: React.FunctionComponent = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.FunctionComponent<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/products" />
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/admin">
              {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default RoutesWrap;