import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import DefaultLayout from './DefaultLayout';
import routes from './routes.js';

// import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
// import Footer from './Components/Footer';
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Portfolio from './Components/Portfolio';
// import Header from './Components/Header/Header';
// import Testimonials from './Components/Products/Testimonials';

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
