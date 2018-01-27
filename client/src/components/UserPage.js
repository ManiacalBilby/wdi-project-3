import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {

    state = {
        user: {},
        courses: []
    }

    componentWillMount() {
        this.getUser()
        this.getCourses()
    }

    getUser = () => {

        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res => {
                console.log("Response from API:", res.data)
                this.setState({ user: res.data })
                console.log("User in state:", this.state.user)
            })
    }

    getCourses = () => {
        axios.get(`/api/users/${this.props.match.params.userId}/courses`)
            .then(res => {
                console.log(res.data)
                this.setState({ courses: res.data })
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.user.username}'s page</h1>
                <div>
                    Discs Link
                </div>
                <div>
                    Courses Link
                </div>
                <div>
                    <Link to={`/users/${this.props.match.params.userId}/edit`}>Edit User</Link>
                </div>
            </div>
        )
    }
}

export default UserPage