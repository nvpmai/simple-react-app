import React, { Component } from 'react'
import queryString from 'query-string'
import Cards from './Cards'

class Result extends Component {
  constructor() {
    super()
    this.state = {
      developers: []
    }
  }

  componentDidMount() {
    this.initProps(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.query !== nextProps.location.query) {
      this.initProps(nextProps)
    }
  }

  initProps(props) {
    let result = []
    let term = queryString.parse(props.location.search).searchTerm.toLowerCase()
    JSON.parse(localStorage.getItem('developers')).forEach(value => {
      if (value.name.toLowerCase().includes(term) || value.description.toLowerCase().includes(term)) {
        result.push(value)
      }
    })
    this.setState({ developers: result })
  }

  render() {
    return (
      <div>
        <Cards developers={this.state.developers} />
      </div>
    )
  }
}

export default Result
