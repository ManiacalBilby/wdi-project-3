import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import styled from 'styled-components'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'

class App extends Component {
  state = {
    users: []
  }
  componentWillMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users')
      .then(res => {
        console.log(res.data)
        this.setState({ users: res.data })
      })
  }

  createUser = (newUser) => {
    console.log('From create Route')
    axios.post('/api/users', {
      user: newUser
    })
      .then((res) => {
        console.log("After post route",this.state.user)
        const newUsers = [...this.state.users]
        newUsers.push(res.data)
        this.setState({ users: newUsers })
      })
  }

  deleteUser = (userid) => {
    console.log(userid)
    axios.delete('/api/users/' + userid)
      .then((res) => {
        console.log("Deleted!")
        const newUsers = [...this.state.users]
        const userToDelete = this.state.users.indexOf(userid)
        newUsers.splice(userToDelete, 1)
        this.setState({ users: newUsers })
      })
  }

  render() {
    const HomePageComponent = () => (<HomePage users={this.state.users} deleteUser={this.deleteUser} createUser = {this.createUser}/> )
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePageComponent} />
            <Route exact path="/users/:userId" component={UserPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
