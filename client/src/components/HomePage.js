import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
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

    componentWillMount() {
        this.getAllUsers()
    }

    render() {
        console.log(this.state.users)
        return (
            <div>
                <h1>Home Page!!!</h1>
                <div>
                    {this.state.users.map((user) => {
                        return (<div key={user._id}>
                            <div>
                                {user.username}
                            </div>
                            <img src={user.photoUrl} alt="user"/>
                        </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HomePage