import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Header from './Components/Header/Header';
import ChildHeader from './Components/Header/ChildHeader/ChildHeader';
import { Route, Redirect, Switch } from 'react-router-dom';
import routes from './routes';

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <ChildHeader data={this.state.resumeData.main}></ChildHeader>
        <Switch>
          {routes.map((route, index) => {            
            return route.name ? 
            (              
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (<route.component {...props} />)}
                />
            ) : (null);
          })}
          <Redirect from="/" to="/products" />
        </Switch>
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default DefaultLayout;