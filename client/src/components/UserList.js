import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

const UserPhotoImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 8px;
    border-radius: 50%;
    transition: box-shadow 0.2s ease-in-out;
&:hover{
    box-shadow: 0px 0px 10px 5px rgba(201,197,201,1);
}
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(65, 113, 56);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

/* button generator used http://css3buttongenerator.com/ */
const DeleteButton = styled.button`
    background: #f00c0c;
    background-image: -webkit-linear-gradient(top, #f00c0c, #9c0808);
    background-image: -moz-linear-gradient(top, #f00c0c, #9c0808);
    background-image: -ms-linear-gradient(top, #f00c0c, #9c0808);
    background-image: -o-linear-gradient(top, #f00c0c, #9c0808);
    background-image: linear-gradient(to bottom, #f00c0c, #9c0808);
    -webkit-border-radius: 25;
    -moz-border-radius: 25;
    border-radius: 25px;
    font-family: Arial;
    color: #ffffff;
    font-size: 10px;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
&:hover{
    background: #ff0000;
    background-image: -webkit-linear-gradient(top, #ff0000, #e80000);
    background-image: -moz-linear-gradient(top, #ff0000, #e80000);
    background-image: -ms-linear-gradient(top, #ff0000, #e80000);
    background-image: -o-linear-gradient(top, #ff0000, #e80000);
    background-image: linear-gradient(to bottom, #ff0000, #e80000);
    text-decoration: none;
}
`

const NewUserLink = styled(Link)`
    background: #43703a;
    background-image: -webkit-linear-gradient(top, #43703a, #1d8f4a);
    background-image: -moz-linear-gradient(top, #43703a, #1d8f4a);
    background-image: -ms-linear-gradient(top, #43703a, #1d8f4a);
    background-image: -o-linear-gradient(top, #43703a, #1d8f4a);
    background-image: linear-gradient(to bottom, #43703a, #1d8f4a);
    -webkit-border-radius: 25;
    -moz-border-radius: 25;
    border-radius: 25px;
    font-family: Arial;
    color: #ffffff;
    font-size: 15px;
    padding: 5px 10px 5px 10px;
    text-decoration: none;
&:hover{
    background: #1ea642;
    background-image: -webkit-linear-gradient(top, #1ea642, #0dd63c);
    background-image: -moz-linear-gradient(top, #1ea642, #0dd63c);
    background-image: -ms-linear-gradient(top, #1ea642, #0dd63c);
    background-image: -o-linear-gradient(top, #1ea642, #0dd63c);
    background-image: linear-gradient(to bottom, #1ea642, #0dd63c);
    text-decoration: none;
}
`

class UserList extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Users</h1>
          <WrapperDiv>
                {this.props.users.map(user => (

                    <UserDiv key={user._id}>
                        <StyledLink to={`/users/${user._id}`}>
                            <div>
                                      {user.username}
                                    </div>
                            <div>
                                      <UserPhotoImg src={user.photoUrl} alt="user" />
                                    </div>
                          </StyledLink>
                        <DeleteButton onClick={() => this.props.deleteUser(user._id)}>Delete</DeleteButton>
                      </UserDiv>

                            ))}
              </WrapperDiv>
          <div>
                <NewUserLink to="/new">New User</NewUserLink>
              </div>
        </div>
      </div>
    )
  }
}

export default UserList
