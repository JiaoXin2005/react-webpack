import React, { Component } from 'react'
import { DatePicker } from 'antd'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render () {
    return (
      <div>
        <DatePicker/>
        <br/>
        当前计数器：{this.state.count}
        <button onClick={this.add}>增加</button>
      </div>
    )
  }
  add = () => {
    this.setState({
      count: ++this.state.count
    })
  }
}

export default Home