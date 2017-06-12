import React, { Component } from 'react';
import './App.css';
import faker from 'faker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Result from './components/Result'
import Header from './components/Header'
import { createBrowserHistory } from 'history'
import PropTypes from 'prop-types'
export const history = createBrowserHistory()

class App extends Component {
  saveToLocalStorage() {
    if (!localStorage.getItem('developers')) {
      let data = []
      for (let i = 0; i < 100; i++) {
        data.push({'name': faker.name.findName(),
                    'description': faker.hacker.phrase() })
      }
      localStorage.setItem('developers', JSON.stringify(data))
    }
  }

  componentWillMount() {
    this.saveToLocalStorage()
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Header history={history}/>
          <Switch>
            <Route path='/search' component={Result}/>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
