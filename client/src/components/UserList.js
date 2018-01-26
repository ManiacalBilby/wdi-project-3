import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class UserList extends Component {
    render() {
        return(
            <div>
                {<h1>Users List Page</h1> }
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
                <button><Link to={"/new"}>Add New User</Link></button>
            </div>
        )
    }
}

export default UserList
