import React, { Component } from 'react'
import { Pagination } from 'antd';

class Child extends Component {
  render () {
    return (
      <div>
        <Pagination defaultCurrent={1} total={50}/>
      </div>
    )
  }
}

export default Child