import React from 'react';
import store from './redux';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './screens/Home'
import Admin from './screens/Admin'
import Restrito from './screens/Restrito'
import Login from './screen/Login'
import { Container } from "semantic-ui-react"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/restrito' component={Restrito} />
          <Route path='/login' component={Login} />
        </Container>
      </Router>
    </Provider >
  );
}

export default App;
