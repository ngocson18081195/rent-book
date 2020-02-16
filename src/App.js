import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import routes from './routes.js';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/" />
              </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
