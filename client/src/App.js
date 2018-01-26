import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import styled from 'styled-components'
import UserPage from './components/UserPage'
import NewUserPage from './components/NewUserPage'
import EditUserPage from './components/EditUserPage'
import UserList from './components/UserList'

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

//   updateUser = async (userid) => {
//     try {
//         console.log(this.state.user._id)
//         await axios.patch(`/api/users/${this.state.user._id}`, this.state)

//     } catch (error) {
//         console.log(error)
//     }
// }

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
    const UserPageComponent = () => (<UserPage/>)
    const NewUserPageComponent = () => (<NewUserPage users={this.state.users} createUser = {this.createUser}/> )
    const UserListComponent = () => (<UserList users={this.state.users} deleteUser={this.deleteUser}/>)
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={UserListComponent}/>
            <Route exact path="/new" component={NewUserPageComponent} />
            <Route exact path="/users/:userId/edit" component={EditUserPage} />
            <Route exact path="/users/:userId" component={UserPageComponent}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
