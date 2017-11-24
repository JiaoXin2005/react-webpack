import React, { Component } from 'react'
import './Page1.css'
import Child from 'pages/Child/Child'
import {Route} from 'react-router-dom'

class Page1 extends Component {
  render () {
    return (
      <div className="border">
        <Route path="/page1/child" component={Child}/>
        <img src={require('@/../public/image.jpg')} alt=""/>
      </div>
    )
  }
}

export default Page1