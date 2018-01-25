import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })
    }

    createUser = () => {
        axios.post('/api/users', {
            user: this.state.user
        })
            .then((res) => {
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

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleSignUp = (event) => {
        event.preventDefault()
        this.createUser()
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.updateUser()
    }

    componentWillMount() {
        this.getAllUsers()
    }

    render() {
        console.log(this.state.users)
        return (
            <div>
                <h1>Home Page</h1>
                <div>
                    {this.state.users.map((user) => {
                        return (
                            <div key={user._id}>
                                <div>
                                    <Link to={`/users/${user._id}`}>{user.username}</Link>
                                </div>
                                <img src={user.photoUrl} alt="user" />
                                <button onClick={() => this.deleteUser(user._id)}>Delete User</button>
                            </div>
                        )
                    })}
                </div>
                <h1>Add new user</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} name="firstName" type="text" value={this.state.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.handleChange} name="lastName" type="text" value={this.state.lastName} />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input onChange={this.handleChange} name="username" type="text" value={this.state.username} />
                    </div>
                    <div>
                        <label htmlFor="photoUrl">Photo Link</label>
                        <input onChange={this.handleChange} name="photoUrl" type="text" value={this.state.photoUrl} />
                    </div>
                    <div>
                        <label htmlFor="throwingHand">Throwing Hand</label>
                        <input onChange={this.handleChange} name="throwingHand" type="text" value={this.state.throwingHand} />
                    </div>
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}
export default HomePage