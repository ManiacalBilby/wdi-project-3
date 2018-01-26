import React, {Component} from 'react'
import axios from 'axios'

class UserPage extends Component {

    componentWillMount() {
        this.getUser()
    }

    getUser = () => {
        console.log(this.props)
        console.log("param ID:", this.props.match.params.userId)
        axios.get(`/api/users/${this.props.match.params.userId}`)
            // .then(res => {
            //     console.log("Response from API:", res.data)
            //     this.setState({ user: res.data })
            //     console.log("User in state:", this.state.user)
            // })
    }

    render() {
        console.log(this.props)
        return(
            <h1>User Page!</h1>
        )
    }
}

export default UserPage