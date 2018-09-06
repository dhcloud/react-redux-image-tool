import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home/'
// import DynamicPage from './components/DynamicPage'
// import NoMatch from './components/NoMatch'
import rootReducer from './reducers/index'

import './assets/styles/sass/main.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(rootReducer, enhancer)

// resolve iOS hover interferance
if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += "no-touch";
}

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('react-app'))