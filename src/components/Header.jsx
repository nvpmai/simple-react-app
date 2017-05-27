import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="ui menu">
        <a className="item">Home</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
