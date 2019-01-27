import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routesJSON from './routes.json';

class AppRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    let self = this;
    // dynamically import component
    import(`./${this.props.component}`).then(component => {
      console.log(component);
      
      self.setState({
        data: component.default
      });
    });
  }

  render() {
    return (<Route {...this.props} component={this.state.data} />);
  }
}

function Routes(props) {
  const routes = routesJSON.map(route => 
      <AppRoute key={route.path} {...route} />
    );

  return (
    <Switch>
      { routes }
      <Route component={NoMatch} />
    </Switch>
  );
}

function NoMatch() {
  return (
    <h1>404 - Not Found</h1>
  );
}

export default Routes;
export const routesList = routesJSON;
