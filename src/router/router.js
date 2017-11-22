import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Bundle from './Bundle'

import Home from '@/pages/Home/Home.js'
import Page1 from '@/pages/Page1/Page1.js'
import Counter from '@/pages/Counter/Counter.js'

/* 
* 代码分割
import Home from 'bundle-loader?lazy&name=home!@/pages/Home/Home.js'
import Page1 from 'bundle-loader?lazy&name=page1!@/pages/Page1/Page1.js'
import Counter from 'bundle-loader?lazy&name=counter!@/pages/Counter/Counter.js'
*/
const Loading = () => {
  return <div>loading.....</div>
}

const createComponent = (component) => () => (
  <Bundle load={component}>
    {(Component) => Component ? <Component /> : <Loading/>}
  </Bundle>
)

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/counter">counter</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Counter path="/counter" component={Counter}/>
      </Switch>
      {/* <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route path="/page1" component={createComponent(Page1)} />
        <Route path="/counter" component={createComponent(Counter)}/>
      </Switch> */}

    </div>
  </Router>
)

export default getRouter