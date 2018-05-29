import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class EditUserPage extends Component {
    state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        photoUrl: '',
        throwingHand: '',
      },
    }

    componentWillMount() {
      this.getUser()
    }

    getUser = () => {
      axios.get(`/api/users/${this.props.match.params.userId}`)
        .then((res) => {
          this.setState({ user: res.data })
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

    updateUser = async () => {
      try {
        await axios.patch(`/api/users/${this.state.user._id}`, this.state.user)
      } catch (error) {
        console.error(error)
      }
    }

    render() {
      return (
        <div>
          <h1>Edit User</h1>
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
          </div>
          <Link to={`/users/${this.state.user._id}`}>Return to User</Link>
        </div>
      )
    }
}

EditUserPage.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
}

export default EditUserPage
