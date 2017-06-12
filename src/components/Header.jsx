import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Header extends Component {
  handleSearch(event) {
    let url = `/search?searchTerm=${event.target.value}`
    this.context.router.history.push(url)
  }

  render() {
    return (
      <div className="ui menu">
        <Link className="item" to='/'>Home</Link>
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

  static contextTypes = {
    router: PropTypes.object
  }
}

export default Header
