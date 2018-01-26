import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class HomePage extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            photoUrl: '',
            throwingHand: ''
        }
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleSignUp = (event) => {
        event.preventDefault()
        console.log(this.state.user)
        this.props.createUser(this.state.user)
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.updateUser()
    }

    render() {
        // console.log(this.props.createUser)
        return (
            <div>
                <h1>Home Page</h1>
                <div>
                    {this.props.users.map((user) => {
                        return (
                            <div key={user._id}>
                                <div>
                                    <Link to={`/users/${user._id}`}>{user.username}</Link>
                                </div>
                                <img src={user.photoUrl} alt="user" />
                                <button onClick={() => this.props.deleteUser(user._id)}>Delete User</button>
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