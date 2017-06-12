import React, { Component } from 'react'

class Header extends Component {
  handleSearch(event) {
    let url = `/search?searchTerm=${event.target.value}`
    this.props.history.push(url)
  }

  render() {
    return (
      <div className="ui menu">
        <a className="item">Home</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search developers"
                onChange={this.handleSearch.bind(this)}
                />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
