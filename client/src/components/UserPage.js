import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const CourseDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`

const CoursePhotoImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 8px;
&:hover{
    box-shadow: 0px 0px 30px 5px rgba(201,197,201,1);
    transition: box-shadow 0.2s ease-in-out;
}
`
const DiscPhotoImg = styled.img`
    width: 225px;
    height: 150px;
    border-radius: 50%;
`

const EditUserLink = styled(Link) `
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

class UserPage extends Component {

    state = {
        user: {},
        courses: [],
        discs: []
    }



    componentWillMount() {
        this.getUser()
        this.getCourses()
        this.getDiscs()
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

    getDiscs = () => {
        axios.get(`/api/users/${this.props.match.params.userId}/discs`)
            .then(res => {
                console.log(res.data)
                this.setState({ discs: res.data })
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h1>{this.state.user.username}'s page</h1>
                    <div>
                        <h3>Courses</h3>
                    </div>
                    <WrapperDiv>
                        {this.state.courses.map((course) => {
                            return (
                                <CourseDiv key={course._id}>
                                    <div>
                                        {course.courseName}
                                    </div>
                                    <div>
                                        <CoursePhotoImg src={course.photoUrl} alt={`photo of ${course.courseName}`} />
                                    </div>
                                    <div>{course.location}</div>
                                </CourseDiv>
                            )
                        })}
                    </WrapperDiv>
                    <h3>Discs</h3>
                    <WrapperDiv>
                        {this.state.discs.map((disc) => {
                            return (
                                <div key={disc._id}>
                                    <div>
                                        <DiscPhotoImg src={disc.photoUrl} alt={`photo of ${disc.discMake} ${disc.discModel} ${disc.discType}`} />
                                    </div>
                                </div>
                            )
                        })}
                    </WrapperDiv>
                </div>
                <EditUserLink to={`/users/${this.props.match.params.userId}/edit`}>Edit User</EditUserLink>
                <Link to={`/`}>Return to Users</Link>
            </div>
        )
    }
}

export default UserPage