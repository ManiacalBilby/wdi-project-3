import React, { Component } from 'react'
import axios from 'axios'

class UserPage extends Component {

        state = {
            user: {}
        }

    componentWillMount() {
        this.getUser()
    }

    getUser= () => {
        console.log(this.props.match.params.userId)
        axios.get(`/api/users/${this.props.match.params.userId}`)
        .then(res => {
            console.log(res.data)
            this.setState({ user: res.data })
        })

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
        console.log(this.props.match.params.userId)
        return (
            <div>
                <h1>User Page</h1>
                <div>
                    <button onClick={this.deleteUser}>Delete User!</button>
                </div>
            </div>
        )
    }
}

export default UserPage