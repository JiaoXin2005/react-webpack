import React, { Component } from 'react'
import './Page1.css'

class Page1 extends Component {
  render () {
    return (
      <div className="border">
        this is Page1~
        <img src={require('@/../public/image.jpg')} alt=""/>
      </div>
    )
  }
}

export default Page1