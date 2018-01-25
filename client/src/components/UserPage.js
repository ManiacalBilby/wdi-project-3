import React, { Component } from 'react'
import axios from 'axios'

class UserPage extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            photoUrl: '',
            throwingHand: ''

        }
    }

    componentWillMount() {
        this.getUser()
    }

    getUser = () => {
        console.log("State user:", this.state.user)
        console.log("param ID:", this.props.match.params.userId)
        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res => {
                console.log("Response from API:", res.data)
                this.setState({ user: res.data })
                console.log("User in state:", this.state.user)
            })
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    handleEdit = (event) => {
        event.preventDefault()
        this.updateUser()
    }

    updateUser = async (userid) => {
        try {
            console.log(this.state.user._id)
            await axios.patch(`/api/users/${this.state.user._id}`, this.state.user)

        } catch (error) {
            console.log(error)
        }
    }
    // deleteUser = async (user) => {
    //     try {console.log(this.props.match.params.userId)
    //         await axios.delete(`/api/users/${this.props.match.params.userId}`)
    //         const userToDelete = this.state.users.indexOf(user)
    //         const newUsers = [...this.state.users]
    //         newUsers.splice(userToDelete, 1)
    //         this.setState({users: newUsers})
    //     }catch (error) {
    //         console.log(error)
    //     }
    // } 

    render() {
        console.log(this.state.user)
        console.log(this.state.user._id)
        return (
            <div>
                <h1>User Page</h1>
                <div>
                    <form onSubmit={this.handleEdit}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input onChange={this.handleChange} name="firstName" type="text" value={this.state.user.firstName} />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input onChange={this.handleChange} name="lastName" type="text" value={this.state.user.lastName} />
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input onChange={this.handleChange} name="username" type="text" value={this.state.user.username} />
                        </div>
                        <div>
                            <label htmlFor="photoUrl">Photo Link</label>
                            <input onChange={this.handleChange} name="photoUrl" type="text" value={this.state.user.photoUrl} />
                        </div>
                        <div>
                            <label htmlFor="throwingHand">Throwing Hand</label>
                            <input onChange={this.handleChange} name="throwingHand" type="text" value={this.state.user.throwingHand} />
                        </div>
                        <button>Update User</button>
                    </form>
                    {/* <button onClick={this.deleteUser}>Delete User!</button> */}
                </div>
            </div>
        )
    }
}

export default UserPage