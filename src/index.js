import React from 'react'
import { render } from 'react-dom'
import './main.css'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import createRootReducer from 'reducers'
// import Layout from 'containers/layout'
import routes from 'routes'

const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,

  document.getElementById('root')
)
