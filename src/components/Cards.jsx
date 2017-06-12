import React, { Component } from 'react'

class Cards extends Component {
  renderDeveloperList() {
    return this.props.developers.map((developer, index) => {
      return (
        <div className="card" key={index}>
          <div className="content">
            <div className="header">{developer.name}</div>
            <div className="description">
              {developer.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui stackable four cards">
        {this.renderDeveloperList()}
      </div>
    )
  }
}

export default Cards
