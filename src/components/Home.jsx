import React, { Component } from 'react'
import Cards from './Cards'

class Home extends Component {
  getDevelopers() {
    let result = []
    JSON.parse(localStorage.getItem('developers')).forEach(value => {
      result.push(value)
    })
    return result
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Cards developers={this.getDevelopers()} />
      </div>
    )
  }
}

export default Home
