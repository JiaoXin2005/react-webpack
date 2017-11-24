import React, {Component} from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Page1 from 'pages/Page1/Page1'
import Child from 'pages/Child/Child'

const routesMap = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/page1',
    component: Page1,
    childrens: [
      {
        path: '/page1/child',
        component: Child
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} component={route.component}/>
)

class RouterView extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          {routesMap.map((route, i) => <RouteWithSubRoutes key={i} {...route}/>)}
        </div>
      </HashRouter>        
    )
  }
}

export default RouterView